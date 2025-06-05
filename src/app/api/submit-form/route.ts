import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment, { IIndividualInvestment } from '@/models/IndividualInvestment';
import StartupInvestment, { IStartupInvestment } from '@/models/StartupInvestment';
import BusinessInvestment, { IBusinessInvestment } from '@/models/BusinessInvestment';

// Define an interface for Mongoose ValidationError
interface MongooseValidationError extends Error {
  errors: Record<string, unknown>; // Mongoose validation errors typically have an 'errors' object
  _message?: string; // Often present in Mongoose validation errors
}

// Type guard to check if an error is a MongooseValidationError
function isMongooseValidationError(error: unknown): error is MongooseValidationError {
  return (
    error instanceof Error &&
    error.name === 'ValidationError' &&
    Object.prototype.hasOwnProperty.call(error, 'errors')
  );
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const formData = await req.json();
    const { formType, fullName, email, phone, investmentAmount, message, ...rest } = formData;

    let newInvestment;

    switch (formType) {
      case 'individual':
        newInvestment = await (IndividualInvestment as any).create({
          fullName,
          email,
          phone,
          investmentAmount: parseFloat(investmentAmount),
          occupation: rest.occupation as string,
          message,
          createdAt: new Date(),
        });
        break;
      case 'startup':
        newInvestment = await (StartupInvestment as any).create({
          startupName: rest.companyName as string,
          industry: rest.industry as string,
          contactPerson: fullName,
          email,
          phone,
          investmentAmount: parseFloat(investmentAmount),
          pitchDeck: rest.pitchDeck as string,
          businessPlan: rest.businessPlan as string,
          message,
          createdAt: new Date(),
        });
        break;
      case 'business':
        newInvestment = await (BusinessInvestment as any).create({
          companyName: rest.companyName as string,
          industry: rest.industry as string,
          contactPerson: fullName,
          email,
          phone,
          investmentAmount: parseFloat(investmentAmount),
          businessPlan: rest.businessPlan as string,
          pitchDeck: rest.pitchDeck as string,
          message,
          createdAt: new Date(),
        });
        break;
      default:
        return NextResponse.json({ success: false, message: 'Invalid form type' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: newInvestment }, { status: 201 });
  } catch (error: unknown) { // Use unknown for caught errors
    console.error('Error submitting investment form:', error);
    if (isMongooseValidationError(error)) { // Use the custom type guard
      return NextResponse.json({ success: false, message: error.message, errors: error.errors }, { status: 400 });
    } else if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: 'An unknown error occurred' }, { status: 500 });
  }
}

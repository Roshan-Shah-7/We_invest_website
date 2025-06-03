import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment from '@/models/IndividualInvestment';
import StartupInvestment from '@/models/StartupInvestment';
import BusinessInvestment from '@/models/BusinessInvestment';

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
    const { formType, fullName, companyName, industry, ...rest } = formData; // Destructure fullName, companyName, industry

    const dataToCreate: Record<string, unknown> = { ...rest }; // Use Record<string, unknown> instead of any

    if (formType === 'startup' || formType === 'business') {
      dataToCreate.contactPerson = fullName;
    }

    if (formType === 'startup') {
      dataToCreate.startupName = companyName; // Map companyName to startupName
      dataToCreate.industry = industry; // Map industry
    } else if (formType === 'business') {
      dataToCreate.companyName = companyName; // Explicitly add companyName for business form
      dataToCreate.industry = industry; // Map industry for business form
    }

    if (dataToCreate.pitchDeck instanceof File) {
      dataToCreate.pitchDeck = dataToCreate.pitchDeck.name;
    }
    if (dataToCreate.businessPlan instanceof File) {
      dataToCreate.businessPlan = dataToCreate.businessPlan.name;
    }

    let newInvestment;
    switch (formType) {
      case 'individual':
        // @ts-expect-error
        newInvestment = await IndividualInvestment.create(dataToCreate);
        break;
      case 'startup':
        // @ts-expect-error
        newInvestment = await StartupInvestment.create(dataToCreate);
        break;
      case 'business':
        // @ts-expect-error
        newInvestment = await BusinessInvestment.create(dataToCreate);
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

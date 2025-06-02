import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment from '@/models/IndividualInvestment';
import StartupInvestment from '@/models/StartupInvestment';
import BusinessInvestment from '@/models/BusinessInvestment';
export async function POST(req: Request) {
  await dbConnect();

  try {
    const formData = await req.json();
    const { formType, fullName, companyName, industry, ...rest } = formData; // Destructure fullName, companyName, industry

    const dataToCreate: any = { ...rest }; // Use 'any' for flexibility in adding properties

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
        newInvestment = await IndividualInvestment.create(dataToCreate);
        break;
      case 'startup':
        newInvestment = await StartupInvestment.create(dataToCreate);
        break;
      case 'business':
        newInvestment = await BusinessInvestment.create(dataToCreate);
        break;
      default:
        return NextResponse.json({ success: false, message: 'Invalid form type' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: newInvestment }, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting investment form:', error);
    if (error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: error.message, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

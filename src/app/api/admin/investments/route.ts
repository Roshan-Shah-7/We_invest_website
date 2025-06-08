import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment from '@/models/IndividualInvestment';
import StartupInvestment from '@/models/StartupInvestment';
import BusinessInvestment from '@/models/BusinessInvestment';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== 'admin' && (session.user as any).role !== 'superadmin') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  await dbConnect();

  try {
    const individualInvestments = await (IndividualInvestment as any).find({});
    const startupInvestments = await (StartupInvestment as any).find({});
    const businessInvestments = await (BusinessInvestment as any).find({});

    const allInvestments = [
      ...individualInvestments.map(doc => {
        const obj = doc.toObject();
        return {
          _id: obj._id,
          type: 'individual',
          fullName: obj.fullName,
          email: obj.email,
          phone: obj.phone, // Add phone
          investmentAmount: obj.investmentAmount,
          occupation: obj.occupation, // Add occupation
          sourceOfFunds: obj.sourceOfFunds, // Add sourceOfFunds
          investmentExperience: obj.investmentExperience, // Add investmentExperience
          message: obj.message, // Add message
          createdAt: obj.createdAt,
        };
      }),
      ...startupInvestments.map(doc => {
        const obj = doc.toObject();
        return {
          _id: obj._id,
          type: 'startup',
          contactPerson: obj.contactPerson,
          email: obj.email,
          phone: obj.phone, // Add phone
          investmentAmount: obj.investmentAmount,
          startupName: obj.startupName,
          industry: obj.industry,
          pitchDeck: obj.pitchDeck,
          businessPlan: obj.businessPlan,
          startupStage: obj.startupStage, // Added from model
          teamSize: obj.teamSize, // Added from model
          message: obj.message,
          createdAt: obj.createdAt,
        };
      }),
      ...businessInvestments.map(doc => {
        const obj = doc.toObject();
        return {
          _id: obj._id,
          type: 'business',
          contactPerson: obj.contactPerson,
          email: obj.email,
          phone: obj.phone, // Add phone
          investmentAmount: obj.investmentAmount,
          companyName: obj.companyName,
          industry: obj.industry,
          businessDescription: obj.message || obj.businessPlan,
          yearsInOperation: obj.yearsInOperation,
          annualRevenue: obj.annualRevenue,
          employees: obj.employees,
          reasonForInvestment: obj.reasonForInvestment,
          message: obj.message, // Add message
          createdAt: obj.createdAt,
        };
      }),
    ];

    // Sort by createdAt descending
    allInvestments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, data: allInvestments }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching investment data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

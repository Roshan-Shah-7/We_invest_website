import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment from '@/models/IndividualInvestment';
import StartupInvestment from '@/models/StartupInvestment';
import BusinessInvestment from '@/models/BusinessInvestment';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    const individualInvestments = await IndividualInvestment.find({});
    const startupInvestments = await StartupInvestment.find({});
    const businessInvestments = await BusinessInvestment.find({});

    const allInvestments = [
      ...individualInvestments.map(doc => ({ ...doc.toObject(), formType: 'individual' })),
      ...startupInvestments.map(doc => ({ ...doc.toObject(), formType: 'startup' })),
      ...businessInvestments.map(doc => ({ ...doc.toObject(), formType: 'business' })),
    ];

    // Sort by createdAt descending
    allInvestments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, data: allInvestments }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching investment data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

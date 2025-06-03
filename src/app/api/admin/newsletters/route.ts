import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    const newsletters = await Newsletter.find({}).sort({ createdAt: -1 }); // Sort by createdAt descending
    return NextResponse.json({ success: true, data: newsletters }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching newsletter data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

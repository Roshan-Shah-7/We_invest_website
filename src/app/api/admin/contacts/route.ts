import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    // @ts-expect-error
    const contacts = await Contact.find({}).sort({ createdAt: -1 }); // Sort by createdAt descending
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching contact data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

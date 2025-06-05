import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== 'admin' && (session.user as any).role !== 'superadmin') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  await dbConnect();

  try {
    const contacts = await (Contact as any).find({}).sort({ createdAt: -1 }); // Cast to any to bypass TypeScript error
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching contact data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

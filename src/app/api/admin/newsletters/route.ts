import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== 'admin' && (session.user as any).role !== 'superadmin') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  await dbConnect();

  try {
    const newsletters = await (Newsletter as any).find({}).sort({ createdAt: -1 }); // Cast to any to bypass TypeScript error
    return NextResponse.json({ success: true, data: newsletters }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching newsletter data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

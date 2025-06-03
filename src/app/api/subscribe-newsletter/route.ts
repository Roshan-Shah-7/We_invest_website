import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const newsletterEntry = await Newsletter.create({ email });

    return NextResponse.json({ success: true, data: newsletterEntry }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error subscribing to newsletter:', error);
    if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 11000) { // MongoDB duplicate key error
      return NextResponse.json({ success: false, message: 'Email already subscribed' }, { status: 409 });
    }
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: error.message, errors: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

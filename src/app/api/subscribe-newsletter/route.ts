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
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);
    if (error.code === 11000) { // MongoDB duplicate key error
      return NextResponse.json({ success: false, message: 'Email already subscribed' }, { status: 409 });
    }
    if (error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: error.message, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

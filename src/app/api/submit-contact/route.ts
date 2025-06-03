import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
export async function POST(req: Request) {
  await dbConnect();

  try {
    const formData = await req.json();
    const contact = await Contact.create(formData);

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error submitting contact form:', error);
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: error.message, errors: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

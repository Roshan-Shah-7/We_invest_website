import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact, { IContact } from '@/models/Contact';

// Define an interface for Mongoose ValidationError
interface MongooseValidationError extends Error {
  errors: Record<string, unknown>; // Mongoose validation errors typically have an 'errors' object
  _message?: string; // Often present in Mongoose validation errors
}

// Type guard to check if an error is a MongooseValidationError
function isMongooseValidationError(error: unknown): error is MongooseValidationError {
  return (
    error instanceof Error &&
    error.name === 'ValidationError' &&
    Object.prototype.hasOwnProperty.call(error, 'errors')
  );
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const formData: Omit<IContact, 'createdAt' | '_id'> = await req.json();
    const contact = new Contact(formData);
    await contact.save();

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error submitting contact form:', error);
    if (isMongooseValidationError(error)) {
      return NextResponse.json({ success: false, message: error.message, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

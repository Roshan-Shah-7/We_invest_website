import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

// Define an interface for MongoDB duplicate key error
interface MongoDuplicateKeyError extends Error {
  code?: number;
}

// Define an interface for Mongoose ValidationError
interface MongooseValidationError extends Error {
  errors: Record<string, unknown>; // Mongoose validation errors typically have an 'errors' object
  _message?: string; // Often present in Mongoose validation errors
}

// Type guard to check if an error is a MongoDuplicateKeyError
function isMongoDuplicateKeyError(error: unknown): error is MongoDuplicateKeyError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as MongoDuplicateKeyError).code === 11000
  );
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
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const newsletterEntry = await Newsletter.create({ email });

    return NextResponse.json({ success: true, data: newsletterEntry }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error subscribing to newsletter:', error);
    if (isMongoDuplicateKeyError(error)) { // MongoDB duplicate key error
      return NextResponse.json({ success: false, message: 'Email already subscribed' }, { status: 409 });
    }
    if (isMongooseValidationError(error)) {
      return NextResponse.json({ success: false, message: error.message, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

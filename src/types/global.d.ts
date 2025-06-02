import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';

declare global {
  let mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
  let _mongoClientPromise: Promise<MongoClient>;
}

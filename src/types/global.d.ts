import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';

declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
  var _mongoClientPromise: Promise<MongoClient>;
}

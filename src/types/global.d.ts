import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
      _mongoClientPromise: Promise<MongoClient>;
    }
  }
}

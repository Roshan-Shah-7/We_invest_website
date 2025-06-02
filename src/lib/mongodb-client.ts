import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  monitorCommands: false,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000
};

let client;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// In production mode, it's best to not use a global variable.
// In development mode, use a global variable so that the client is preserved across module reloads
// caused by HMR (Hot Module Replacement).
// Ensure MongoClient is only instantiated on the server side.
if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  // Provide a dummy promise for client-side to prevent errors, though this code path should ideally not be reached.
  clientPromise = Promise.resolve(undefined as unknown as MongoClient); // Cast to MongoClient to satisfy type, as it won't be used on client-side.
}

// Export a module-scoped MongoClient object. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

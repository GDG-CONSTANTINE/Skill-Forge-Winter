import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MongoDB URI to .env.local');
}

// Use a global variable to avoid reconnecting on every request
let cached: { client: MongoClient; promise: Promise<MongoClient> } | undefined = undefined;

function connectToDatabase(): Promise<MongoClient> {
    if (cached === undefined) {
        cached = {
            client: new MongoClient(process.env.MONGODB_URI!),
            promise: new MongoClient(process.env.MONGODB_URI!).connect(),
        };
    }
    return cached.promise;
}

export { connectToDatabase };
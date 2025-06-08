// import mongoose from 'mongoose';
// import AdminUser from '../src/models/AdminUser'; // Adjust path as needed
// import dotenv from 'dotenv';
// import readline from 'readline';

// dotenv.config({ path: '.env.local' }); // Load environment variables

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function askQuestion(query: string): Promise<string> {
//   return new Promise(resolve => rl.question(query, resolve));
// }

// async function createAdminUser() {
//   try {
//     // Connect to MongoDB
//     const MONGODB_URI = process.env.MONGODB_URI;
//     if (!MONGODB_URI) {
//       console.error('MONGODB_URI is not defined in .env.local');
//       process.exit(1);
//     }
//     await mongoose.connect(MONGODB_URI);
//     console.log('MongoDB connected successfully.');

//     const email = await askQuestion('Enter admin email: ');
//     const password = await askQuestion('Enter admin password: ');
//     const role = await askQuestion('Enter admin role (admin/superadmin, default: superadmin): ') || 'superadmin';

//     if (!email || !password) {
//       console.error('Email and password are required.');
//       rl.close();
//       await mongoose.disconnect();
//       process.exit(1);
//     }

//     if (role !== 'admin' && role !== 'superadmin') {
//       console.error('Invalid role. Must be "admin" or "superadmin".');
//       rl.close();
//       await mongoose.disconnect();
//       process.exit(1);
//     }

//     // Check if user already exists
//     const existingUser = await AdminUser.findOne({ email });
//     if (existingUser) {
//       console.warn(`Admin user with email "${email}" already exists.`);
//       rl.close();
//       await mongoose.disconnect();
//       process.exit(0);
//     }

//     const newAdmin = new AdminUser({ email, password, role });
//     await newAdmin.save();

//     console.log(`Admin user "${email}" with role "${role}" created successfully!`);

//   } catch (error) {
//     console.error('Error creating admin user:', error);
//   } finally {
//     rl.close();
//     await mongoose.disconnect();
//   }
// }

// createAdminUser();










import mongoose from 'mongoose';
import AdminUser from '../src/models/AdminUser'; // Adjust path as needed
import dotenv from 'dotenv';
import readline from 'readline';

dotenv.config({ path: '.env.local' }); // Load environment variables

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function createAdminUser() {
    try {
        // Connect to MongoDB
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) {
            console.error('MONGODB_URI is not defined in .env.local');
            process.exit(1);
        }
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully.');

        const email = await askQuestion('Enter admin email: ');
        const password = await askQuestion('Enter admin password: ');
        const roleInput = await askQuestion('Enter admin role (admin/superadmin, default: superadmin): ');
        const role = (roleInput.trim() === '' ? 'superadmin' : roleInput.trim()) as 'admin' | 'superadmin';


        if (!email || !password) {
            console.error('Email and password are required.');
            rl.close();
            await mongoose.disconnect();
            process.exit(1);
        }

        if (role !== 'admin' && role !== 'superadmin') {
            console.error('Invalid role. Must be "admin" or "superadmin".');
            rl.close();
            await mongoose.disconnect();
            process.exit(1);
        }

        // Check if user already exists
        const existingUser = await AdminUser.findOne({ email });
        if (existingUser) {
            console.warn(`Admin user with email "${email}" already exists.`);
            rl.close();
            await mongoose.disconnect();
            process.exit(0);
        }

        const newAdmin = new AdminUser({ email, password, role });
        await newAdmin.save();

        console.log(`Admin user "${email}" with role "${role}" created successfully!`);

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            console.error('Validation Error:');
            for (const field in error.errors) {
                console.error(`- ${error.errors[field].message}`);
            }
        } else {
            console.error('Error creating admin user:', error);
        }
    } finally {
        rl.close();
        await mongoose.disconnect();
        console.log('MongoDB disconnected.');
    }
}

createAdminUser();
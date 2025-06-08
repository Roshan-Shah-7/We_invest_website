// import mongoose, { Schema, Document, Model } from 'mongoose';
// import bcrypt from 'bcrypt';

// // Interface for the AdminUser document
// export interface IAdminUser extends Document {
//   email: string;
//   password: string;
//   role: 'admin' | 'superadmin';
//   createdAt: Date;
//   updatedAt: Date;
//   comparePassword(candidatePassword: string): Promise<boolean>;
// }

// // Interface for the AdminUser model (to include static/method types)
// interface IAdminUserModel extends Model<IAdminUser> {
//   // You can add static methods here if needed
// }

// const AdminUserSchema: Schema<IAdminUser, IAdminUserModel> = new Schema({
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true,
//     match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [6, 'Password must be at least 6 characters long'],
//     select: false // Do not return password by default
//   },
//   role: {
//     type: String,
//     enum: ['admin', 'superadmin'],
//     default: 'admin'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Pre-save hook to hash password
// AdminUserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare password
// AdminUserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// const AdminUser = (mongoose.models.AdminUser || mongoose.model<IAdminUser, IAdminUserModel>('AdminUser', AdminUserSchema)) as IAdminUserModel;

// export default AdminUser;





import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

// Interface for the AdminUser document
// Note: createdAt and updatedAt are now handled by Mongoose's timestamps option
// and will be automatically added to the interface.
export interface IAdminUser extends Document {
    email: string;
    password: string;
    role: 'admin' | 'superadmin';
    createdAt: Date; // Automatically managed by timestamps
    updatedAt: Date; // Automatically managed by timestamps

    /**
     * Compares a candidate password with the stored hashed password.
     * @param candidatePassword The password to compare.
     * @returns A promise that resolves to true if the passwords match, false otherwise.
     */
    comparePassword(candidatePassword: string): Promise<boolean>;
}

// Interface for the AdminUser model (to include static/method types)
interface IAdminUserModel extends Model<IAdminUser> {
    // You can add static methods here if needed
}

const AdminUserSchema: Schema<IAdminUser, IAdminUserModel> = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false // IMPORTANT: Do not return password by default
    },
    role: {
        type: String,
        enum: ['admin', 'superadmin'],
        default: 'admin'
    }
}, {
    // Use Mongoose's built-in timestamps
    // This automatically adds `createdAt` and `updatedAt` fields
    timestamps: true
});

// Pre-save hook to hash password before saving
AdminUserSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

/**
 * Method to compare a candidate password with the user's hashed password.
 * IMPORTANT: When fetching a user to use this method, you MUST explicitly
 * select the password field, like so:
 * `const user = await AdminUser.findOne({ email }).select('+password');`
 */
AdminUserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    // 'this.password' will be undefined if the document was fetched without .select('+password')
    if (!this.password) {
        throw new Error('Password field not available. Did you forget to use .select("+password")?');
    }
    return await bcrypt.compare(candidatePassword, this.password);
};

// This pattern prevents "OverwriteModelError" in development environments with hot-reloading
const AdminUser = (mongoose.models.AdminUser || mongoose.model<IAdminUser, IAdminUserModel>('AdminUser', AdminUserSchema)) as IAdminUserModel;

export default AdminUser;
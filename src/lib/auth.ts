import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/mongodb';
import AdminUser from '@/models/AdminUser'; // Import the new AdminUser model

// Simple in-memory rate limiter for failed login attempts
const failedLoginAttempts = new Map<string, { count: number; blockedUntil: number }>();
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect(); // Connect to the database

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email.toLowerCase(); // Normalize email for rate limiting

        // Check if email is currently blocked
        const attemptInfo = failedLoginAttempts.get(email);
        if (attemptInfo && attemptInfo.blockedUntil > Date.now()) {
          console.warn(`Login attempt for ${email} blocked due to too many failed attempts.`);
          return null; // Blocked
        }

        const user = await AdminUser.findOne({ email }).select('+password'); // Select password explicitly
        
        if (!user) {
          // Increment failed attempt count for non-existent user (to prevent enumeration)
          const currentAttempts = attemptInfo ? attemptInfo.count + 1 : 1;
          const blockedUntil = currentAttempts >= MAX_ATTEMPTS ? Date.now() + BLOCK_DURATION_MS : 0;
          failedLoginAttempts.set(email, { count: currentAttempts, blockedUntil });
          console.warn(`Login attempt for non-existent user ${email}. Attempts: ${currentAttempts}`);
          return null; // User not found
        }

        const isMatch = await user.comparePassword(credentials.password);

        if (isMatch) {
          // Clear failed attempts on successful login
          failedLoginAttempts.delete(email);
          // Return user object without sensitive data
          return {
            id: user._id.toString(), // Convert ObjectId to string
            name: user.email, // Or a proper name field if available
            email: user.email,
            role: user.role,
          };
        } else {
          // Increment failed attempt count for existing user
          const currentAttempts = attemptInfo ? attemptInfo.count + 1 : 1;
          const blockedUntil = currentAttempts >= MAX_ATTEMPTS ? Date.now() + BLOCK_DURATION_MS : 0;
          failedLoginAttempts.set(email, { count: currentAttempts, blockedUntil });
          console.warn(`Failed login attempt for ${email}. Attempts: ${currentAttempts}`);
          return null; // Invalid credentials
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role; // Add role to JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
        (session.user as any).role = token.role; // Add role to session
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

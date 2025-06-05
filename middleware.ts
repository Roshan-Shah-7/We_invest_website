import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments the Request with the user's token.
  function middleware(req) {
    // Example: Check if the user has the 'admin' role to access admin pages
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/admin')) {
      if (!token || (token.role !== 'admin' && token.role !== 'superadmin')) {
        // Redirect to login if not authorized, or to a custom unauthorized page
        const url = new URL('/admin/login', req.url);
        // Optionally add a callbackUrl so the user is redirected back after login
        url.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(url);
      }
    }
    // Continue if authorized
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // This callback is invoked before the middleware function above.
        // It determines if the user is authenticated at all.
        // The actual role check is done in the middleware function.
        return !!token; // Only allow if a token exists (user is authenticated)
      },
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

export const config = {
  matcher: ['/admin/:path*'],
};

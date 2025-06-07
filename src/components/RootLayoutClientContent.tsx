'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppClientSetup from '@/components/SmoothScrollSetup';
import Loader from '@/components/Loader';
import { ArrowUp } from 'lucide-react'; // Import the ArrowUp icon
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

export default function RootLayoutClientContent({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname(); // Get current pathname
  const isAdminPath = pathname.startsWith('/admin'); // Check if it's any admin path


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoaderAnimationComplete = () => {
    setLoading(false);
  };

  return (
    <SessionProvider> {/* Wrap with SessionProvider */}
      {loading && (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <Loader onAnimationComplete={handleLoaderAnimationComplete} />
        </div>
      )}
      {!loading && (
        <div>
          <AppClientSetup />
          {!isAdminPath && <Header />} {/* Conditionally render Header */}
          <main className="transition-all duration-500 ease-in-out">
            {children}
          </main>
          {!isAdminPath && <Footer />} {/* Conditionally render Footer */}

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 w-12 h-12 bg-brand_green hover:bg-brand_teal text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </SessionProvider>
  );
}

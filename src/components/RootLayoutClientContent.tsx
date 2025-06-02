'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppClientSetup from '@/components/SmoothScrollSetup';
import Loader from '@/components/Loader';
import { ArrowUp } from 'lucide-react'; // Import the ArrowUp icon
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

export default function RootLayoutClientContent({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <SessionProvider> {/* Wrap with SessionProvider */}
      {loading && <Loader />}
      {!loading && (
        <div>
          <AppClientSetup />
          <Header />
          <main className="transition-all duration-500 ease-in-out">
            {children}
          </main>
          <Footer />

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

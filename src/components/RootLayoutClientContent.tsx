'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppClientSetup from '@/components/SmoothScrollSetup';
import Loader from '@/components/Loader';

export default function RootLayoutClientContent({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <AppClientSetup />
          <Header />
          <main className="transition-all duration-500 ease-in-out">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

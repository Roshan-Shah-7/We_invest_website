'use client';

import React from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import GlobalLoader from '@/components/GlobalLoader';
import PageWrapper from '@/components/PageWrapper';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppClientSetup from '@/components/SmoothScrollSetup';

export default function RootLayoutClientContent({ children }: { children: React.ReactNode }) {
  const { isAppLoading } = useLoading();

  return (
    <>
      <GlobalLoader />
      <PageWrapper>
        <AppClientSetup />
        <Header />
        <main className="transition-all duration-500 ease-in-out">
          {children}
        </main>
        <Footer />
      </PageWrapper>
    </>
  );
}

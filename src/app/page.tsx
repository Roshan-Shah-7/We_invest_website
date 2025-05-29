'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import WhatWeProvide from '@/components/home/WhatWeProvide';
import WhyUs from '@/components/home/WhyUs';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Video from '@/components/home/Video';
import FundPools from '@/components/home/FundPools';
import { useLoading } from '@/contexts/LoadingContext'; // Import the hook

export default function Home() {
  const { setAppLoading } = useLoading();

  useEffect(() => {
    console.log('[Home Mount Effect] Setting appLoading to TRUE.');
    setAppLoading(true);
  }, [setAppLoading]);

  useEffect(() => {
    console.log('[Home Page] Setting appLoading to FALSE after initial render with delay.');
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [setAppLoading]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <main className="flex flex-col items-center justify-center w-full text-center mx-auto">
        <Hero />
        <WhatWeProvide />
        <WhyUs />
        <FundPools />
        <Portfolio />
        <Video />
        <Testimonials />
      </main>
    </div>
  );
}

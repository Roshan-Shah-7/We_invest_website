'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

import Hero from '@/components/home/Hero';
import OurServices from '@/components/home/OurServices';
import { fundPoolsData } from '@/data/fundPoolsData';

// Dynamically imported components (client-heavy)
const WhyUs = dynamic(() => import('@/components/home/WhyUs'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/home/Portfolio'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: false });
const Video = dynamic(() => import('@/components/home/Video'), { ssr: false });
const FundPool = dynamic(() => import('@/components/home/Fund-pool'), { ssr: false });

export default function Home() {
  const videos = useMemo(
    () => [
      {
        id: 'Y4RIOljIQuk',
        title: 'Getting Started with Next.js',
        description: 'This is the chance, to buy stocks',
      },
      {
        id: 'aOUn0HN3Bw4',
        title: 'Advanced Tailwind Techniques',
        description: 'Good News for Market',
      },
      {
        id: '1ykLKlQipw4',
        title: 'TypeScript Best Practices',
        description: 'How to see sold stock',
      },
    ],
    []
  );

  return (
    <main className="flex flex-col items-center justify-center w-full text-center mx-auto">
      <Hero />
      <OurServices />
      <WhyUs />
      <FundPool funds={fundPoolsData} />
      <Portfolio />
      <Video videos={videos} />
      <Testimonials />
    </main>
  );
}

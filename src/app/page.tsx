'use client';

import React from 'react';
import Hero from '@/components/home/Hero';

import WhyUs from '@/components/home/WhyUs';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Video from '@/components/home/Video';
import FundPools from '@/components/home/FundPools';
import OurServices from '@/components/home/OurServices';

const videos = [
  {
    id: 'Y4RIOljIQuk',
    title: 'Getting Started with Next.js',
    description: 'This is the chance, to buy stocks'
  },
  {
    id: 'aOUn0HN3Bw4',
    title: 'Advanced Tailwind Techniques',
    description: 'Good News for Market'
  },
  {
    id: '1ykLKlQipw4',
    title: 'TypeScript Best Practices',
    description: 'How to see sold stock'
  },
];

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center overflow-hidden justify-center w-full text-center mx-auto">
        <Hero />
        <OurServices />
        <WhyUs />
        <FundPools />
        <Portfolio />
        <Video videos={videos} />
        <Testimonials />
      </main>
    </>
  );
}

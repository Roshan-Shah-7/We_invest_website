'use client';

import React from 'react';

import Hero from '@/components/home/Hero';
import WhyUs from '@/components/home/WhyUs';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Video from '@/components/home/Video';
import OurServices from '@/components/home/OurServices';
import FundPool from '@/components/home/Fund-pool';
import { fundPoolsData } from '@/data/fundPoolsData';

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
      <main className="flex flex-col items-center justify-center w-full text-center mx-auto">
        <Hero />
        <OurServices />
        <WhyUs />
        <FundPool funds={fundPoolsData} />
        <Portfolio />
        <Video videos={videos} />
        <Testimonials />
      </main>
    </>
  );
}

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
    description: 'Learn the basics of Next.js framework and its core features'
  },
  {
    id: 'aOUn0HN3Bw4',
    title: 'Advanced Tailwind Techniques',
    description: 'Master advanced Tailwind CSS patterns and optimization strategies'
  },
  {
    id: '1ykLKlQipw4',
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns for robust applications'
  },
  {
    id: 'KvV2OFNpH08',
    title: 'Responsive Design Principles',
    description: 'Create responsive layouts that work on all devices'
  }
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

'use client';

import React, { useEffect, useState } from 'react';
import { gsap, CSSPlugin, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin);

import Hero from '@/components/home/Hero';
import WhatWeProvide from '@/components/home/WhatWeProvide';
import WhyUs from '@/components/home/WhyUs';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Video from '@/components/home/Video';
import FundPools from '@/components/home/FundPools';


export default function Home() {
  const [counter, setCounter] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const loadingTexts = [
    'Loading your dashboard…',
    'Fetching user preferences…',
    'Optimizing layout…',
    'Almost there…'
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [loadingTexts.length]);

  useEffect(() => {
    if (counter === 100) {
      revel();
    }
  }, [counter]);

  const revel = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoadingComplete(true);
        setTimeout(() => {
          setShowMainContent(true);
        }, 50);
      },
    });

    tl.to('.follow', {
      width: '100%',
      duration: 1.5,
      delay: 0.7,
      ease: Expo.easeInOut,
    })
      .to('.hide', {
        opacity: 0,
        duration: 0.3,
      })
      .to('.hide', {
        display: 'none',
        duration: 0.1,
      })
      .to('.follow', {
        height: '100%',
        duration: 0.7,
        delay: 0.3,
        ease: Expo.easeInOut,
      }).to('.loader', {
        width: "0%",
        duration: 0.5,
      }).to('.loader', {
        opacity: 0,
        duration: 0.7,
        backgroundColor: "transparent",
      })
  };


  return (
    <>
      {/* Loader */}
      {!loadingComplete && (
        <div className="w-full h-screen fixed z-[100000] text-center loader">
          <div className="loading w-full h-screen bg-black flex items-center justify-center absolute top-0 left-0">
            <div className="follow absolute bg-brand_teal h-[2px] w-0 z-10 left-0"></div>
            <div
              className="progressBar hide absolute left-0 h-[2px] bg-white transition-all duration-300 ease-out"
              style={{ width: `${counter}%` }}
            ></div>
            <h1 className="count hide absolute text-6xl md:text-9xl text-white font-semibold -translate-x-4 z-20">
              {counter}%
            </h1>
            <p className="absolute bottom-20 text-white animate-pulse text-lg hide">
              {loadingTexts[currentTextIndex]}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {showMainContent && (
        <div
          className={`transition-opacity duration-500 ease-in-out w-full h-full ${loadingComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col items-center justify-center w-full">
            <main className="flex flex-col items-center justify-center w-full text-center mx-auto">
              {loadingComplete ? (
                <>
                  <Hero />
                  <WhatWeProvide />
                  <WhyUs />
                  <FundPools />
                  <Portfolio />
                  <Video />
                  <Testimonials />
                </>
              ) : (
                <div className="animate-pulse space-y-6 p-4">
                  <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  <div className="h-64 bg-gray-200 rounded w-full max-w-4xl mx-auto"></div>
                </div>
              )}
            </main>
          </div>
        </div>
      )}
    </>
  );
}

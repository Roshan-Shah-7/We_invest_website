// src/components/AppClientSetup.tsx
'use client'; // This component uses client-side hooks

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

const AppClientSetup = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // smoothTouch: true,
            // wheelMultiplier: 1,
            // touchMultiplier: 2,
        });

        const scrollFn = (time: number) => {
            lenis.raf(time * 1000); // Lenis expects timestamp in milliseconds
        };

        // Connect Lenis to GSAP's ticker
        gsap.ticker.add(scrollFn);
        gsap.ticker.lagSmoothing(0); // Disable GSAP lag smoothing when using custom ticker

        // Update ScrollTrigger on Lenis scroll events
        lenis.on('scroll', ScrollTrigger.update);

        // Cleanup
        return () => {
            gsap.ticker.remove(scrollFn);
            lenis.destroy();
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return null; // This component does not render any visible UI
};

export default AppClientSetup;
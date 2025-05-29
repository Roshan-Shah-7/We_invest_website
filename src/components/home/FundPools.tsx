'use client';

import React, { useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import Lottie from 'lottie-react';
import bgAnimation from '../../assets/bg.json';

import { fundPoolsData } from '@/data/fundPoolsData';
import { Badge } from '@/components/ui/Badge';
import NumberedBadge from '@/components/ui/NumberedBadge';

gsap.registerPlugin(ScrollTrigger);

const FundPools: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const addToRefs = useCallback((el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    }, []);

    // Smooth scroll with Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const scrollFn = (time: number) => lenis.raf(time * 1000);

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(scrollFn);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(scrollFn);
            lenis.destroy();
        };
    }, []);

    useLayoutEffect(() => {
        const cards = cardsRef.current;
        if (!cards.length) return;

        // Reset card styles
        gsap.set(cards, {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            scale: 0.8,
            rotateX: 15,
            transformOrigin: 'top center',
            opacity: 0,
            zIndex: (i) => i,
            y: (i) => i * 40,
        });

        gsap.to(cards[0], {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            zIndex: cards.length + 10,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${window.innerHeight * (cards.length * 0.6)}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                markers: false,
            },
        });

        cards.forEach((card, index) => {
            if (index === 0) return;

            tl.to(card, {
                scale: 1,
                rotateX: 0,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                zIndex: cards.length + index + 1,
            })
                .to(
                    cards.slice(0, index),
                    {
                        scale: (i) => 0.8 - i * 0.04,
                        rotateX: 15,
                        opacity: 1,
                        y: (i) => (index - i) * 40,
                        duration: 0.5,
                        ease: 'power2.inOut',
                        zIndex: (i) => i,
                    },
                    '<',
                )
                .to(
                    card,
                    {
                        scale: 0.8,
                        rotateX: 15,
                        opacity: 0,
                        y: index * 40,
                        duration: 0.5,
                        ease: 'power2.inOut',
                        zIndex: index,
                    },
                    '+=0.4',
                );
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.clearMatchMedia();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#F5F7FA] w-full overflow-hidden h-screen"
            style={{ zIndex: 10 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
                <h2 className="text-5xl font-extrabold text-center mb-12 text-foreground">
                    Fund Pools at Wee Invest
                </h2>
                <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-20">
                    Diverse Sectors, Endless Opportunities.
                </p>

                <div className="relative h-[40vh]">
                    {(() => {
                        cardsRef.current = []; // ✅ Reset before render
                        return fundPoolsData.map((pool) => (
                            <div
                                key={pool.title}
                                ref={addToRefs}
                                className="card_items absolute inset-0 mx-auto max-w-5xl"
                            >
                                <div className="card_el bg-white will-change-transform shadow-2xl rounded-2xl overflow-hidden h-[40vh] flex flex-col items-center md:flex-row transition-transform duration-500 hover:scale-105">
                                    <div className="relative w-full md:w-1/2 h-full">
                                        <Image
                                            src={pool.image}
                                            alt={pool.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-1/2 flex flex-col justify-between items-end text-end">
                                        <div className="flex items-center mb-4">
                                            <NumberedBadge number={pool.number} color={pool.color} />
                                            <h3
                                                className="ml-4 text-xl font-bold text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.title }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground mb-1">
                                                Focus:
                                            </h4>
                                            <p
                                                className="text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.focus }}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-sm font-bold text-muted-foreground mb-1">
                                                Goal:
                                            </h4>
                                            <p
                                                className="text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.goal }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ));
                    })()}
                </div>
            </div>

            <div className="mx-auto w-full absolute top-0 left-0 -z-10 h-full">
                <Lottie animationData={bgAnimation} loop className='mix-blend-darken'/>
            </div>
        </section>
    );
};

export default FundPools;

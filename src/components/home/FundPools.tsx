'use client';

import React, { useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Lottie from 'lottie-react';
import bgAnimation from '../../assets/bg.json';

import { fundPoolsData } from '@/data/fundPoolsData';
import NumberedBadge from '@/components/ui/NumberedBadge';

gsap.registerPlugin(ScrollTrigger);

const FundPools: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    // Reset cardsRef when data changes
    useEffect(() => {
        cardsRef.current = [];
    }, []);

    const addToRefs = useCallback((el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    }, []);

    useLayoutEffect(() => {
        const cards = cardsRef.current;
        const container = containerRef.current;
        const cardsWrapper = cardsWrapperRef.current;

        if (!cards.length || !container || !cardsWrapper) return;

        const ctx = gsap.context(() => {
            // Kill all existing triggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(cards);

            const heightUnit = window.innerHeight * 0.7;
            const totalScrollHeight = heightUnit * (cards.length - 1);

            // Initialize all cards to a hidden stacked state
            gsap.set(cards, {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                scale: 0.9,
                opacity: 0,
                zIndex: 0,
                y: 40,
                transformOrigin: 'top center',
            });

            // First card is active
            gsap.set(cards[0], {
                scale: 1,
                opacity: 1,
                y: 0,
                zIndex: 10
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: `+=${totalScrollHeight}`,
                    scrub: 1.2,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    fastScrollEnd: true
                },
                defaults: {
                    duration: 0.6,
                    ease: "power2.inOut"
                }
            });

            cards.forEach((card, index) => {
                if (index === 0) return;

                tl.to(cards[index - 1], {
                    scale: 0.92,
                    y: 20,
                    opacity: 0.7,
                    zIndex: cards.length - index
                }, `card-${index}`);

                tl.to(card, {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    zIndex: 10
                }, `card-${index}`);

                if (index > 1) {
                    tl.set(cards.slice(0, index - 1), {
                        opacity: 0,
                        zIndex: 0
                    }, `card-${index}`);
                }
            });

            // Cleanup
            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={containerRef}
            className="relative bg-[#F5F7FA] w-full overflow-hidden"
            style={{ zIndex: 10 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
                <h2 className="text-4xl text-brand_teal sm:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-foreground">
                    Fund Pools at We Invest
                </h2>
                <p className="text-lg sm:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 sm:mb-20">
                    Diverse Sectors, Endless Opportunities.
                </p>

                {/* Optimized card container */}
                <div
                    ref={cardsWrapperRef}
                    className="relative mx-auto h-[50vh] sm:h-[55vh] md:h-[60vh]"
                >
                    {fundPoolsData.map((pool, index) => (
                        <div
                            key={pool.title}
                            ref={addToRefs}
                            className="card_items mx-auto max-w-5xl"
                            style={{
                                willChange: 'transform, opacity',
                                backfaceVisibility: 'hidden'
                            }}
                        >
                            <div className="card_el bg-white shadow-xl rounded-2xl overflow-hidden h-[50vh] sm:h-[55vh] md:h-[60vh] flex flex-col md:flex-row">
                                <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                                    <Image
                                        src={pool.image}
                                        alt={pool.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority={index <= 1}
                                    />
                                </div>
                                <div className="p-4 sm:p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between text-justify h-1/2 md:h-full">
                                    <div className="flex items-center mb-3 sm:mb-4 self-start">
                                        <NumberedBadge number={pool.number} color={pool.color} />
                                        <h3
                                            className="ml-3 sm:ml-4 text-lg sm:text-xl font-bold text-foreground"
                                            dangerouslySetInnerHTML={{ __html: pool.title }}
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center space-y-3 sm:space-y-4">
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-0.5 sm:mb-1">
                                                Problem:
                                            </h4>
                                            <li
                                                className="text-sm sm:text-base text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.problem }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-0.5 sm:mb-1">
                                                Focus:
                                            </h4>
                                            <li
                                                className="text-sm sm:text-base text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.focus }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-0.5 sm:mb-1">
                                                Goal:
                                            </h4>
                                            <li
                                                className="text-sm sm:text-base text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.goal }}
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-2 sm:pt-4"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto w-full absolute top-0 left-0 -z-10 h-full pointer-events-none">
                <Lottie
                    animationData={bgAnimation}
                    loop
                    className='mix-blend-darken opacity-30 md:opacity-50 w-full h-full object-cover'
                />
            </div>
        </section>
    );
};

export default FundPools;

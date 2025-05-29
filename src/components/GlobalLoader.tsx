'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';

const GlobalLoaderGSAP: React.FC = () => {
    const { isAppLoading } = useLoading();

    const [percentage, setPercentage] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const graphPathRef = useRef<SVGPathElement>(null);
    const graphDotRef = useRef<SVGCircleElement>(null);
    const percentageTextRef = useRef<HTMLParagraphElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    const graphPoints = [
        { x: 0, y: 80 },
        { x: 30, y: 70 },
        { x: 60, y: 75 },
        { x: 90, y: 50 },
        { x: 120, y: 40 },
        { x: 150, y: 25 },
        { x: 180, y: 30 },
        { x: 200, y: 10 },
    ];
    const pathD = graphPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

    useEffect(() => {
        if (isAppLoading && containerRef.current && graphPathRef.current && graphDotRef.current && percentageTextRef.current) {
            gsap.set(containerRef.current, { opacity: 1 });

            const path = graphPathRef.current;
            const dot = graphDotRef.current;
            const pathLength = path.getTotalLength();

            const counter = { value: 0 };

            timelineRef.current = gsap.timeline({});

            timelineRef.current
                .set(path, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                    autoRound: false,
                })
                .set(dot, {
                    opacity: 0,
                    attr: { cx: graphPoints[0].x, cy: graphPoints[0].y },
                    autoRound: false,
                })
                .set(percentageTextRef.current, { opacity: 0, y: 10 })
                .set(containerRef.current.querySelector('.loading-text'), { opacity: 0, y: 10 })

                .to(containerRef.current.querySelector('.loading-text'), { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
                .to(percentageTextRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
                .to(dot, { opacity: 1, duration: 0.3 }, "-=0.2")

                .to(path, {
                    strokeDashoffset: 0,
                    duration: 3,
                    ease: "sine.inOut",
                }, ">")
                .to(counter, {
                    value: 100,
                    duration: 3,
                    ease: "sine.inOut",
                    onUpdate: () => {
                        setPercentage(Math.round(counter.value));
                    },
                }, "<")
                .to(dot, {
                    motionPath: {
                        path: path,
                        align: path,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: false,
                    },
                    duration: 3,
                    ease: "sine.inOut",
                }, "<")

        } else if (!isAppLoading && timelineRef.current && containerRef.current && percentageTextRef.current && graphDotRef.current && graphPathRef.current) {
            gsap.to([percentageTextRef.current, graphDotRef.current, graphPathRef.current, containerRef.current.querySelector('.loading-text')], {
                opacity: 0,
                duration: 0.3,
                stagger: 0.1,
                onComplete: () => {
                    setPercentage(0);
                }
            });
        }

        return () => {
            timelineRef.current?.kill();
        };
    }, [isAppLoading, pathD]);

    return (
        <AnimatePresence>
            {isAppLoading && (
                <motion.div
                    className="background fixed inset-0 z-[9999999] flex items-center justify-center bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.1 } }}
                >
                    <div ref={containerRef} className="flex flex-col items-center text-white p-8 rounded-lg">
                        <svg width="300" height="100" viewBox="0 0 200 100" className="overflow-visible mb-4">
                            <path
                                ref={graphPathRef}
                                d={pathD}
                                stroke="url(#lineGradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle ref={graphDotRef} r="5" fill="url(#dotGradient)" stroke="#fff" strokeWidth="1.5" />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#34D399" />
                                    <stop offset="100%" stopColor="#A78BFA" />
                                </linearGradient>
                                <radialGradient id="dotGradient">
                                    <stop offset="0%" stopColor="#fff" />
                                    <stop offset="60%" stopColor="#A78BFA" />
                                    <stop offset="100%" stopColor="rgba(167,139,250,0.5)" />
                                </radialGradient>
                            </defs>
                        </svg>

                        <h1 ref={percentageTextRef} className="text-5xl font-semibold text-transparent bg-clip-text bg-brand_green tabular-nums">
                            {percentage}%
                        </h1>
                        <p className="loading-text mt-3 text-lg md:text-2xl lg:text-4xl text-gray-100">Wee Invest Global Pvt. Ltd.</p>
                        <p className="loading-text mt-3 text-lg text-gray-300">Loading Assets.......</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GlobalLoaderGSAP;

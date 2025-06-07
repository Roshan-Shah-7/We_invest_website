"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"
import W_Logo from "../../public/w_logo.png"

// Register GSAP Text plugin
gsap.registerPlugin(TextPlugin)

interface LoadingProps {
    onAnimationComplete: () => void;
}

/**
 * Generates a random, wavy path string for an SVG that mimics a profit chart.
 * It trends from the bottom-left to the top-right of the given dimensions.
 */
const generateProfitChartPath = (width: number, height: number): string => {
    const segments = 30; // Number of points in the chart line
    const volatility = height * 0.15; // How much the line can fluctuate vertically

    let path = `M 0,${height * 0.85 + (Math.random() * volatility)} `;

    for (let i = 1; i <= segments; i++) {
        const x = (width / segments) * i;
        // Calculate a base Y that trends upwards
        const baseY = height * (0.85 - (i / segments) * 0.7);
        // Add random fluctuation
        const fluctuatedY = baseY + (Math.random() - 0.5) * volatility;
        path += `L ${x.toFixed(2)},${fluctuatedY.toFixed(2)} `;
    }
    return path;
}


const Loading = ({ onAnimationComplete }: LoadingProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cubeRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<SVGCircleElement>(null)
    const lineRef = useRef<SVGPathElement>(null) // Ref for the profit chart line

    const messages = [
        "Initializing secure environment...",
        "Connecting to global financial networks...",
        "Aggregating real-time market data...",
        "Compiling personalized analytics...",
        "Building your investment dashboard...",
        "Finalizing secure connection...",
    ]

    useEffect(() => {
        // Guard against running on the server or if refs aren't ready
        if (!lineRef.current || typeof window === 'undefined') {
            return;
        }

        const masterTimeline = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.in",
                    onComplete: onAnimationComplete
                });
            }
        })

        const textTimeline = gsap.timeline()
        const totalDuration = messages.length * 1.5;

        // --- Text Animation ---
        messages.forEach((message, index) => {
            const startTime = index * (totalDuration / messages.length);
            textTimeline
                .to(textRef.current, { duration: 0.01, text: "" }, startTime)
                .to(textRef.current, { duration: 0.5, text: message, ease: "none" }, startTime);
        })

        // --- Progress Circle Animation ---
        const circumference = 2 * Math.PI * progressRef.current.r.baseVal.value
        progressRef.current.style.strokeDasharray = `${circumference}`
        progressRef.current.style.strokeDashoffset = `${circumference}`
        masterTimeline.to(progressRef.current, {
            strokeDashoffset: 0,
            duration: totalDuration,
            ease: "linear",
        }, 0)

        // --- CORRECTED: Profit Chart Line Animation ---
        // 1. Generate the dynamic path based on screen size
        const profitPath = generateProfitChartPath(window.innerWidth, window.innerHeight);
        // 2. Set the 'd' attribute directly on the DOM element
        lineRef.current.setAttribute('d', profitPath);
        // 3. Get the length of the newly set path
        const lineLength = lineRef.current.getTotalLength();

        // 4. Set up the animation from invisible to fully drawn
        masterTimeline.fromTo(lineRef.current,
            {
                strokeDasharray: lineLength,
                strokeDashoffset: lineLength
            },
            {
                strokeDashoffset: 0,
                duration: totalDuration,
                ease: "power1.inOut",
            },
            0 // Start at the beginning of the master timeline
        );

        // --- Main Scene & Cube Animation ---
        masterTimeline
            .to(cubeRef.current, {
                rotationY: "+=270",
                rotationX: "+=90",
                duration: totalDuration,
                ease: "none",
            }, 0)
            .add(textTimeline, 0.5);

        return () => {
            masterTimeline.kill()
        }
    }, [onAnimationComplete])

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen w-full bg-slate-900 p-4 relative overflow-hidden font-sans">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>

            {/* Growing Profit Chart SVG Layer - Placed behind main content */}
            <svg className="absolute inset-0 w-full h-full z-10" >
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path
                    ref={lineRef}
                    d="M 0 0" // Initial dummy path
                    stroke="url(#lineGradient)" // Use a gradient for a nicer effect
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>

            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-xs text-center">
                {/* 3D Scene Container */}
                <div className="relative w-48 h-48 mb-12" style={{ perspective: "1000px" }}>
                    {/* Progress Bar and Cube... */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="58" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="3" fill="transparent" />
                        <circle ref={progressRef} cx="60" cy="60" r="58" stroke="#10b981" strokeWidth="3" fill="transparent" strokeLinecap="round" />
                    </svg>

                    <div ref={cubeRef} className="w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "translateZ(96px)" }}>
                            <Image src={W_Logo} alt="We Invest Global" width={80} height={80} className="object-contain" />
                        </div>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "rotateY(180deg) translateZ(96px)" }}>
                            <Image src={W_Logo} alt="We Invest Global" width={80} height={80} className="object-contain" />
                        </div>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "rotateY(90deg) translateZ(96px)" }}>
                            <Image src={W_Logo} alt="We Invest Global" width={80} height={80} className="object-contain" />
                        </div>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "rotateY(-90deg) translateZ(96px)" }}>
                            <Image src={W_Logo} alt="We Invest Global" width={80} height={80} className="object-contain" />
                        </div>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "rotateX(90deg) translateZ(96px)" }}></div>
                        <div className="absolute flex items-center justify-center w-48 h-48 border border-white/10 bg-white/5 backdrop-blur-md" style={{ transform: "rotateX(-90deg) translateZ(96px)" }}></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="relative h-12 w-full">
                    <div className="flex items-center justify-center">
                        <div ref={textRef} className="font-mono text-slate-300 text-sm text-center" />
                        <div className="ml-1 w-0.5 h-4 bg-emerald-400 animate-pulse" />
                    </div>
                </div>

                <h1 className="text-xl font-semibold text-white/90 mt-4 tracking-wide">
                    Wee Invest Global Pvt. Ltd.
                </h1>
            </div>
        </div>
    )
}

export default Loading
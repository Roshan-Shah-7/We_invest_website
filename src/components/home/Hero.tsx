'use client';

import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import rocketAnimation from '../../assets/a.json'; // Ensure this path is correct
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeadline from '../AnimatedHeadline'; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

// Static data for "Who We Help" section
const whoWeHelpData = [
    {
        title: 'Aspiring Founders',
        desc: 'We help early-stage dreamers become startup leaders with mentorship and MVP support.',
    },
    {
        title: 'Startup Teams',
        desc: 'We accelerate small teams with big goals — from pre-seed to Series A.',
    },
    {
        title: 'Scaleups',
        desc: 'For scaling ventures looking to break ceilings with strategic guidance.',
    },
];

// Helper function for greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
};

const HeroSection: React.FC = () => {
    const [isFirstHeadlineExpanded, setIsFirstHeadlineExpanded] = useState(false);
    const [isSecondHeadlineExpanded, setIsSecondHeadlineExpanded] = useState(false);

    // Parallax effect for the background gradient
    useEffect(() => {
        const parallaxTween = gsap.to('.parallax-bg', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section-container', // Target the main section container
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
        return () => {
            parallaxTween.scrollTrigger?.kill(); // Kill ScrollTrigger instance
            parallaxTween.kill(); // Kill the tween itself
        };
    }, []);

    // Dynamic greeting
    const [greeting, setGreeting] = useState(() => getGreeting()); // Optimized initial state
    useEffect(() => {
        const timer = setInterval(() => setGreeting(getGreeting()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Typing text for sub-headline
    const [text] = useTypewriter({
        words: [
            'Funding & Mentorship',
            'Expert Growth Resources',
            'Strategic Startup Support',
        ],
        loop: true, // Changed to true for continuous typing
        delaySpeed: 1500,
        typeSpeed: 70,
        deleteSpeed: 50,
    });

    // Particles configuration (memoized if options were dynamic, but static is fine here)
    const particlesOptions = useMemo(() => ({
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
            },
        },
        particles: {
            color: { value: '#4A5568' }, // Using gray for particles color
            links: {
                color: '#CBD5E0', // Lighter gray for links
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
            },
            collisions: { enable: false }, // Disabled for performance, enable if needed
            move: {
                direction: 'none' as const,
                enable: true,
                outMode: 'bounce' as const,
                random: false,
                speed: 0.8,
                straight: false,
            },
            number: { density: { enable: true, value_area: 800 }, value: 40 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' as const },
            size: { random: true, value: 2 },
        },
        detectRetina: true,
    }), []);


    return (
        <section className="hero-section-container relative min-h-screen flex flex-col items-center 
        justify-start overflow-hidden text-black pt-24 sm:pt-32 lg:pt-20 px-4 sm:px-6">
            {/* Particle background */}
            <Particles
                id="tsparticles"
                options={particlesOptions}
                className="!absolute inset-0 -z-10"
            />

            <div
                className="parallax-bg absolute inset-0"
                style={{ zIndex: -9 }}
            />

            {/* Main content hero block */}
            <div className="relative z-10 w-full lg:mt-20 max-w-7xl flex flex-col lg:flex-row items-start justify-between">
                <div className="w-full lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
                    <AnimatedHeadline
                        text="Grow Your Startup with"
                        style="text-slate-700 text-3xl sm:text-4xl md:text-4xl"
                        isExpanded={isFirstHeadlineExpanded}
                        onToggleExpansion={() => setIsFirstHeadlineExpanded(!isFirstHeadlineExpanded)}
                    />
                    <AnimatedHeadline
                        text="For Visionaries, By Visionaries" // Example: different main headline or pass {text} for typewriter
                        style="font-bold text-slate-900 text-4xl sm:text-5xl md:text-5xl mt-1 leading-tight"
                        isExpanded={isSecondHeadlineExpanded}
                        onToggleExpansion={() => setIsSecondHeadlineExpanded(!isSecondHeadlineExpanded)}
                    />

                    <p className="text-xl sm:text-2xl text-slate-600 my-6 sm:my-8">
                        {greeting} <span className="font-semibold">Ready to take the next step?</span>
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-medium text-brand_teal min-h-[3em] sm:min-h-[2.5em]"> {/* min-h for layout stability */}
                        We provide <span className='font-semibold'>{text}</span>
                        <Cursor cursorStyle='_' cursorColor="#20B2AA" />
                    </h2>
                </div>

                <div className="w-full lg:w-2/5 xl:w-[45rem] flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                        <Lottie animationData={rocketAnimation} loop={true} className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* WHO WE HELP Section */}
            <section className="relative z-10 py-10 px-4 sm:px-6 text-gray-900 w-full max-w-7xl">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Who <span className="text-brand_green">We</span> Help?
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
                        We are your trusted partner for your financial and entrepreneurial endeavors.
                        We collaborate with founders, teams, and organizations poised for growth and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whoWeHelpData.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white/60 backdrop-blur-lg border border-slate-200/80 p-6 py-8 sm:p-8 rounded-xl shadow-lg 
                            hover:shadow-xl transition-all transform duration-300 hover:-translate-y-1 hover:border-brand_teal/50 group"
                        >
                            <h4 className="text-xl sm:text-2xl font-semibold text-slate-800 group-hover:text-brand_teal transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-base text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default HeroSection;

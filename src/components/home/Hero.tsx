'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AnimatedHeadline from '../AnimatedHeadline';

const Particles = dynamic(() => import('@tsparticles/react'), { ssr: false });
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const WhoWeHelpCard = React.memo(
    React.forwardRef<HTMLDivElement, { title: string; desc: string }>(
        ({ title, desc }, ref) => (
            <div
                ref={ref}
                className="bg-white/60 backdrop-blur-lg border border-slate-200/80 p-6 py-8 sm:p-8 rounded-xl shadow-lg 
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-brand_teal/50 group"
            >
                <h4 className="text-xl sm:text-2xl font-semibold text-slate-800 group-hover:text-brand_teal transition-colors">
                    {title}
                </h4>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm">{desc}</p>
            </div>
        )
    )
);
WhoWeHelpCard.displayName = 'WhoWeHelpCard';

const whoWeHelpData = [
    {
        title: 'Aspiring Founders',
        desc: 'We help early-stage dreamers become startup leaders with mentorship and MVP support.',
    },
    {
        title: 'Startup Teams',
        desc: 'We accelerate small teams with big goals — from pre-seed to full scale launch.',
    },
    {
        title: 'Scaleups',
        desc: 'For scaling ventures looking to break ceilings with strategic guidance.',
    },
    {
        title: 'Individuals',
        desc: 'We help individual investors grow their wealth through strategic, high-potential investment opportunities.',
    },
];

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
};

import { Volume2, VolumeX } from 'lucide-react'; // Import icons

const HeroSection: React.FC = () => {
    const [greeting, setGreeting] = useState(getGreeting());
    const [showLottie, setShowLottie] = useState(false);
    const [animationData, setAnimationData] = useState<any>(null);
    const lottieRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null); // Ref for video element
    const [isMuted, setIsMuted] = useState(true); // State for mute status

    const [text] = useTypewriter({
        words: [
            'Funding & Mentorship',
            'Expert Growth Resources',
            'Strategic Startup Support',
            'Tailored Investment Options',
        ],
        loop: true,
        delaySpeed: 1500,
        typeSpeed: 70,
        deleteSpeed: 50,
    });

    useEffect(() => {
        const timer = setInterval(() => setGreeting(getGreeting()), 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowLottie(true);
                import('../../assets/a.json').then((mod) => setAnimationData(mod.default));
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (lottieRef.current) observer.observe(lottieRef.current);
        return () => observer.disconnect();
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <>
            <section className="hero-section-container relative flex
        flex-col items-center justify-start overflow-hidden text-black pt-24 sm:pt-32 lg:pt-20 px-4 sm:px-6">

                {/* Hero Section */}
                <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
                        <div className="slogan mb-2">
                            <h2 className='italic'>"Beyond returns. Building legacies"</h2>
                        </div>
                        <AnimatedHeadline
                            text="Grow Your Startup with"
                            style="text-slate-700 text-3xl sm:text-4xl"
                        />
                        <AnimatedHeadline
                            text="Visionaries, For Visionaries"
                            style="font-bold text-slate-900 text-4xl sm:text-5xl mt-1 leading-tight"
                        />
                        <p className="text-xl sm:text-2xl text-slate-600 my-6 sm:my-8">
                            {greeting} <span className="font-semibold">Ready to take the next step?</span>
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-medium text-brand_teal min-h-[3em]">
                            We provide <span className="font-semibold">{text}</span>
                            <Cursor cursorStyle="|" cursorColor="#20B2AA" />
                        </h2>
                    </div>

                    <div ref={lottieRef} className="w-full lg:w-2/5 xl:w-[45rem] flex justify-center lg:justify-end mt-8 lg:mt-0">
                        {showLottie && animationData && (
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                                <Lottie animationData={animationData} loop className="w-full h-auto" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Who We Help Section */}
                <section className="relative z-10 py-10 px-4 sm:px-6 text-gray-900 w-full max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Who <span className="text-brand_teal">We</span> Help?
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
                            We are your trusted partner for your financial and entrepreneurial endeavors. We collaborate with founders, teams, and organizations poised for growth and innovation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {whoWeHelpData.map((item) => (
                            <WhoWeHelpCard key={item.title} {...item} />
                        ))}
                    </div>
                </section>

            </section>

            {/* Video Section */}
            <section className="w-full mt-16 mb-16 relative mx-auto">
                <video
                    ref={videoRef} // Add ref to video
                    src="/hero_video.mp4"
                    autoPlay
                    loop
                    muted={isMuted} // Use state for muted
                    playsInline
                    preload="metadata"
                    className="m-auto"
                ></video>
                <button
                    onClick={toggleMute}
                    className="absolute bottom-8 right-8 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg
                               hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand_teal"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="h-6 w-6 text-slate-700" />
                    ) : (
                        <Volume2 className="h-6 w-6 text-slate-700" />
                    )}
                </button>
            </section>
        </>
    );
};

HeroSection.displayName = 'HeroSection';
export default HeroSection;

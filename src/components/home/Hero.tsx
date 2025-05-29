import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import rocketAnimation from '../../assets/a.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeadline from '../AnimatedHeadline';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const [isFirstHeadlineExpanded, setIsFirstHeadlineExpanded] = useState(false);
    const [isSecondHeadlineExpanded, setIsSecondHeadlineExpanded] = useState(false);

    // Parallax effect
    React.useEffect(() => {
        gsap.to('.parallax-bg', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    // Greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning!';
        if (hour < 18) return 'Good afternoon!';
        return 'Good evening!';
    };
    const [greeting, setGreeting] = React.useState(getGreeting());
    React.useEffect(() => {
        const timer = setInterval(() => setGreeting(getGreeting()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Typing text
    const [text] = useTypewriter({
        words: [
            'Funding & Mentorship',
            'Expert Growth Resources',
            'Strategic Startup Support',
        ],
        loop: 0,
        delaySpeed: 1000,
    });

    return (
        <section className="hero-section md:mt-20 lg:mt-10 relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-black px-6">
            {/* Particle background */}
            <Particles
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 40 },
                        size: { value: 2 },
                        move: { enable: true, speed: 0.8 },
                        links: { enable: true, distance: 120, opacity: 0.15 },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: 'repulse' },
                                onClick: { enable: true, mode: 'push' },
                            },
                        },
                    },
                }}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            />

            {/* Parallax gradient overlay */}
            <div
                className="parallax-bg absolute inset-0 bg-gradient-to-tr from-gray-200 via-transparent to-white opacity-10"
                style={{ zIndex: 1 }}
            />

            {/* Main content */}
            <div className="relative w-full max-w-10xl text-start flex justify-center items-end">
                <div>
                    <AnimatedHeadline
                        text="Grow Your Startup with"
                        style='text-black/70 text-3xl sm:text-4xl md:text-5xl'
                        isExpanded={isFirstHeadlineExpanded}
                        onToggleExpansion={() => setIsFirstHeadlineExpanded(!isFirstHeadlineExpanded)}
                    />
                    <AnimatedHeadline
                        text="Funding & Mentorship"
                        style='font-semibold text-4xl sm:text-5xl md:text-7xl'
                        isExpanded={isSecondHeadlineExpanded}
                        onToggleExpansion={() => setIsSecondHeadlineExpanded(!isSecondHeadlineExpanded)}
                    />

                    <p className="text-xl sm:text-2xl my-4">
                        {greeting} <span className='font-bold'>Ready to grow your startup?</span>
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-brand_teal">
                        {text}
                        <Cursor />
                    </h2>
                </div>
                <div className="mx-auto w-[50rem] h-[25rem]">
                    <Lottie animationData={rocketAnimation} loop />
                </div>
            </div>

            {/* WHO WE HELP Section */}
            <section className="relative py-24 px-6 text-gray-900 mt-[2rem]">
                <div className="max-w-6xl mx-auto text-center mb-10 z-20">
                    <h2 className="text-4xl font-bold">Who <span className='text-brand_green'>Wee</span> Help ?</h2>
                    <p className="mt-4 text-lg text-gray-800 z-10">
                        Wee are your trusted partner for your financial and entrepreneurial endeavors.
                        <br />
                        Wee collaborate with founders, teams, and organizations poised for growth and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {[
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
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/30 backdrop-blur-md border border-gray-200 p-8 rounded-xl shadow-xl 
                            hover:shadow-2xl transition transform duration-500 hover:scale-105 hover:rotate-2 text-center cursor-pointer"
                        >
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </section>
    );
};

export default HeroSection;

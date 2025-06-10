'use client';

import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { Lightbulb, Building, Handshake, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InvestmentPhilosophyItem {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const WhyUs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const philosophyItems: InvestmentPhilosophyItem[] = [
        {
            icon: <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />,
            title: 'Empowering Innovation',
            text: 'We back bold ideas that push boundaries, fostering innovation that drives progress in industries worldwide.',
        },
        {
            icon: <Building className="w-12 h-12 text-green-600 mb-4" />,
            title: 'Building Futures',
            text: 'By investing in early-stage startups, we help create sustainable businesses that generate jobs, impact communities, and shape the future.',
        },
        {
            icon: <Handshake className="w-12 h-12 text-purple-600 mb-4" />,
            title: 'Partnering for Success',
            text: 'We provide more than capital—offering mentorship and strategic support to help founders navigate challenges and grow.',
        },
        {
            icon: <Eye className="w-12 h-12 text-orange-600 mb-4" />,
            title: 'Believing in Visionaries',
            text: 'We see ourselves in the entrepreneurs we support—dreamers with the courage to take risks and the determination to succeed.',
        },
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const items = containerRef.current.querySelectorAll('.philosophy-item');

        gsap.fromTo(
            items,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(containerRef.current?.querySelector('h2'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(containerRef.current?.querySelector('.text-lg.text-center'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "<0.2"
        )
        .fromTo(containerRef.current?.querySelector('h3'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "<0.2"
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto" ref={containerRef}>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-brand_text_primary mb-8">
                    Why <span className="text-brand_teal">We</span> Invest ?
                </h2>

                <p className="lg:text-lg text-center mb-16 max-w-4xl mx-auto leading-relaxed text-brand_text_secondary">
                    At We Invest Global Pvt. Ltd., we believe in the power of ideas to change the world.
                    Our mission is to fuel the dreams of visionaries by providing resources, mentorship,
                    and capital to turn bold concepts into thriving businesses.
                </p>

                <h3 className="text-3xl font-semibold text-brand_text_primary mb-10 text-center">
                    Our Investment Philosophy
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophyItems.map((item, index) => (
                        <div
                            key={index}
                            className="philosophy-item p-6 bg-white border border-brand_teal/10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out text-center"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h4 className="text-lg font-semibold text-brand_teal mt-4 mb-2">{item.title}</h4>
                            <p className="text-sm text-brand_text_secondary leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

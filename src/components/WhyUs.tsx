import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { Lightbulb, Building, Handshake, Eye } from 'lucide-react'; // Import Lucide icons
import { Button } from '@/components/ui/button'; // Import Button component

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

interface InvestmentPhilosophyItem {
    icon: React.ReactNode; // Use React.ReactNode for flexibility
    title: string;
    text: string;
}

const WhyUs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation for the main section container
            if (containerRef.current) {
                gsap.fromTo(containerRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 80%', // Adjust as needed
                            once: true,
                        },
                    }
                );
            }

            // Animation for individual philosophy items
            if (itemsRef.current.length > 0) {
                gsap.fromTo(itemsRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current, // Trigger when the main container enters view
                            start: 'top 60%', // Adjust to trigger after main section animation starts
                            once: true,
                        },
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []); // No dependencies, runs once on mount

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
            text: 'We don’t just provide capital—we partner with founders, offering mentorship and strategic support to navigate challenges and achieve growth.',
        },
        {
            icon: <Eye className="w-12 h-12 text-orange-600 mb-4" />,
            title: 'Believing in Visionaries',
            text: 'We see ourselves in the entrepreneurs we support—dreamers with the courage to take risks and the determination to succeed.',
        },
    ];

    return (
        <section
            ref={containerRef}
            className="py-16 px-4 md:px-8 lg:px-16 min-h-screen flex items-center"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Why <span className='text-brand_teal'>Wee</span> Invest?
                </h2>

                <div className="mb-16 space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        At Wee Invest Global Pvt. Ltd., we believe in the power of ideas to change the world. Our mission is to fuel the dreams of visionaries by providing the resources, guidance, and capital they need to turn innovative concepts into thriving businesses.
                    </p>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-foreground mb-8">
                        Our Investment Philosophy
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {philosophyItems.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    itemsRef.current[index] = el;
                                }}
                                className="p-6 bg-card rounded-lg shadow-lg transition-transform hover:scale-105"
                            >
                                {item.icon}
                                <h4 className="text-xl font-semibold text-foreground mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-muted-foreground">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Button size="lg" className="rounded-full bg-brand_teal hover:bg-brand_teal/90">
                        Apply Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

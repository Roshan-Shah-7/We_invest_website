import React, { useRef, useLayoutEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import servicesData from '@/data/servicesData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const OurServices: React.FC = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            },
        });

        tl.fromTo(
            [headingRef.current, subheadingRef.current, descriptionRef.current],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );

                gsap.fromTo(
                    card.querySelectorAll('.gsap-check-icon'),
                    { opacity: 0, scale: 0.5 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%', // Animate icons slightly after card
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 px-4 sm:px-8 bg-gradient-to-br from-[#f1fff9] to-[#eafffa] border border-brand_teal shadow-inner shadow-brand_teal/10 w-full rounded-t-[8rem]">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 ref={headingRef} className="text-brand_teal text-sm font-semibold tracking-widest uppercase">
                        Our Services
                    </h2>
                    <p ref={subheadingRef} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand_text_primary leading-tight">
                        Empowering Visionaries, Building Futures
                    </p>
                    <p ref={descriptionRef} className="mt-6 max-w-2xl mx-auto text-lg text-brand_text_secondary">
                        At We Invest, we are dedicated to transforming innovative ideas into thriving businesses.
                        Our services guide startups through every stage, ensuring success in competitive markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el: HTMLDivElement | null) => { cardsRef.current[index] = el; }}
                            className="bg-white p-6 sm:p-8 rounded-3xl border border-brand_teal/10 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col group"
                        >
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand_green text-white group-hover:bg-brand_teal transition-colors duration-300 shadow-md">
                                    <service.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="mt-5 flex-grow text-justify">
                                <h3 className="text-xl font-bold text-brand_teal group-hover:text-brand_green transition-colors duration-300">
                                    {service.mainTitle}
                                </h3>
                                <p className="mt-3 text-sm text-brand_text_secondary leading-relaxed">
                                    {service.mainDescription}
                                </p>
                                {service.details && (
                                    <ul className="mt-4 space-y-2 text-sm">
                                        {service.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start">
                                                <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand_green mr-2 mt-0.5 gsap-check-icon" />
                                                <span className="text-brand_text_secondary">
                                                    <strong className="text-brand_text_primary">{detail.title}:</strong>{' '}
                                                    {detail.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;

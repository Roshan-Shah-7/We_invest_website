"use client"

import React, { useLayoutEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import servicesData from '@/data/servicesData';

// Import GSAP and ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// ServiceCard Component (with one minor change for easier selection)
const ServiceCard = React.forwardRef<HTMLDivElement, { service: any; index: number }>(({ service, index }, ref) => {
    return (
        <div
            ref={ref} // Assign the forwarded ref to the card div
            className="bg-white p-6 sm:p-8 rounded-3xl border border-brand_teal/10 shadow-md hover:shadow-xl will-change-transform transform hover:-translate-y-1 
                transition-all duration-300 ease-in-out flex flex-col group h-full service-card"
        >
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand_green text-white group-hover:bg-brand_teal transition-colors duration-300 shadow-md">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
            </div>
            <div className="mt-5 flex-grow text-start xl:text-justify">
                <h3 className="text-xl font-bold text-brand_teal group-hover:text-brand_green transition-colors duration-500">
                    {service.mainTitle}
                </h3>
                <p className="mt-3 text-sm text-brand_text_secondary leading-relaxed">
                    {service.mainDescription}
                </p>
                {service.details && (
                    <ul className="mt-4 space-y-2 text-sm">
                        {service.details.map((detail: any, i: number) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand_green mr-2 mt-0.5" />
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
    );
});

ServiceCard.displayName = 'ServiceCard'; // Add display name for better debugging


// OurServices Component (with GSAP animations)
const OurServices: React.FC = () => {
    const services = servicesData;
    const sectionRef = useRef<HTMLElement>(null);
    // Create an array of refs for each service card
    const serviceCardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        // Using gsap.context() for safe cleanup
        const ctx = gsap.context(() => {
            // Animate the main heading and description
            const headerElements = ".our-services-title, .our-services-description";
            gsap.from(headerElements, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top', 
                    end: 'bottom bottom', 
                    toggleActions: 'play none none none',
                    scrub: 1, 
                },
            });

            // Animate each service card individually
            serviceCardRefs.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        opacity: 0,
                        y: 50,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none none',
                            scrub: 1,
                        },
                    });
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);


    return (
        // Added a ref to the main section element
        <section ref={sectionRef} className="relative py-20 md:py-28 px-4 sm:px-8 bg-gradient-to-br from-[#f1fff9] to-[#eafffa] border shadow-inner shadow-brand_teal/10 w-full rounded-t-[4rem]">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-brand_teal text-sm lg:text-lg font-semibold tracking-widest uppercase our-services-title">
                        Our Services
                    </h2>
                    <p className="mt-3 text-2xl lg:text-4xl font-extrabold text-brand_text_primary leading-tight our-services-title">
                        Empowering Visionaries, Building Futures
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto lg:text-lg our-services-description">
                        At We Invest, we are dedicated to transforming innovative ideas into thriving businesses.
                        Our services guide startups through every stage, ensuring success in competitive markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            ref={(el) => { serviceCardRefs.current[index] = el; }} // Assign ref to each card
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;

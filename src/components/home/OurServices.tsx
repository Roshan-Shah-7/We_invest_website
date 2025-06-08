import React, { useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicesData from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-brand_teal/10 shadow-md hover:shadow-xl will-change-transform transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col group"
        >
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand_green text-white group-hover:bg-brand_teal transition-colors duration-300 shadow-md">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
            </div>
            <div className="mt-5 flex-grow text-justify">
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
};

const OurServices: React.FC = () => {
    const services = useMemo(() => servicesData, []);
    const sectionRef = useRef(null);
    const q = gsap.utils.selector(sectionRef);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            }
        });

        tl.fromTo(q(".text-center > h2, .text-center > p"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 px-4 sm:px-8 bg-gradient-to-br from-[#f1fff9] to-[#eafffa] border shadow-inner shadow-brand_teal/10 w-full rounded-t-[4rem]">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-brand_teal text-sm font-semibold tracking-widest uppercase">
                        Our Services
                    </h2>
                    <p className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand_text_primary leading-tight">
                        Empowering Visionaries, Building Futures
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-brand_text_secondary">
                        At We Invest, we are dedicated to transforming innovative ideas into thriving businesses.
                        Our services guide startups through every stage, ensuring success in competitive markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;

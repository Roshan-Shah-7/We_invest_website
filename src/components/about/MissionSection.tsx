"use client";

import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { DollarSign, LineChart, Lightbulb } from "lucide-react"
import { colors, aboutImages } from "@/data/aboutData"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const listItemRefs = useRef<Array<HTMLDivElement | null>>([]);
    const statRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                [badgeRef.current, titleRef.current, paragraphRef.current],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                listItemRefs.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                statRefs.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div ref={badgeRef} className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                            <span className="text-[#00C853] text-sm font-medium">Our Mission</span>
                        </div>

                        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#333333] mb-8 leading-tight">
                            Transforming Ideas Into
                            <span className="block text-[#00695C]">Industry Leaders</span>
                        </h2>

                        <p ref={paragraphRef} className="text-xl text-[#666666] mb-8 leading-relaxed">
                            We are dedicated to transforming financial assets into opportunities for growth. Our experienced team
                            leverages extensive market knowledge to guide entrepreneurs through the complexities of the financial
                            landscape.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group" ref={el => { listItemRefs.current[0] = el; }}>
                                <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                    <DollarSign className="h-6 w-6 text-[#00C853]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#333333] mb-2">Capital & Mentorship</h4>
                                    <p className="text-[#666666]">
                                        Providing comprehensive resources and expert guidance to empower everyone in competitive markets.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group" ref={el => { listItemRefs.current[1] = el; }}>
                                <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                    <LineChart className="h-6 w-6 text-[#00C853]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#333333] mb-2">Strategic Growth</h4>
                                    <p className="text-[#666666]">
                                        Building resilient enterprises that deliver lasting impact and sustainable value creation
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group" ref={el => { listItemRefs.current[2] = el; }}>
                                <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                    <Lightbulb className="h-6 w-6 text-[#00C853]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#333333] mb-2">Visionary Leadership</h4>
                                    <p className="text-[#666666]">
                                        Turning innovative ideas into industry-leading realities through expert guidance and strategic
                                        vision
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/20 to-[#00C853]/20 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <Image
                                    src={aboutImages.mission}
                                    alt="Mission illustration"
                                    width={600} // Assuming a width for h-96 (384px)
                                    height={384} // h-96 is 384px
                                    className="w-full h-96 object-cover rounded-2xl"
                                />

                                {/* Floating Stats */}
                                <div ref={el => { statRefs.current[0] = el; }} className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#00695C]">6+</div>
                                        <div className="text-xs text-[#666666]">Startups Funded</div>
                                    </div>
                                </div>

                                <div ref={el => { statRefs.current[1] = el; }} className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#00C853]">Rs 2.5cr</div>
                                        <div className="text-xs text-[#666666]">Capital Deployed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionSection;

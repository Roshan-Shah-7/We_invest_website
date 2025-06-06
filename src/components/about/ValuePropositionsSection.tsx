"use client";

import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, PieChart, Target } from "lucide-react"
import { colors } from "@/data/aboutData"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ValuePropositionsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        // markers: true,
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group md:mt-10" ref={el => { cardRefs.current[0] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardContent className="p-8 text-center">
                                <div className="bg-[#00695C] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <UserCheck className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">Strategic Partnership</h3>
                                <p className="text-[#666666] leading-relaxed">
                                    We don't just fund businesses—we partner with founders, working side by side to build resilient
                                    enterprises that deliver lasting impact.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="group" ref={el => { cardRefs.current[1] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardContent className="p-8 text-center">
                                <div className="bg-[#00BCD4] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <PieChart className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">Diverse Portfolio</h3>
                                <p className="text-[#666666] leading-relaxed">
                                    Investment funds spanning technology, healthcare, renewable energy, and the arts to fuel your
                                    entrepreneurial journey.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="group md:mt-10" ref={el => { cardRefs.current[2] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardContent className="p-8 text-center">
                                <div className="bg-[#00C853] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">Innovation Focus</h3>
                                <p className="text-[#666666] leading-relaxed">
                                    Our client-centric approach combines deep market expertise with a passion for innovation and
                                    long-term success across diverse industries.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ValuePropositionsSection;

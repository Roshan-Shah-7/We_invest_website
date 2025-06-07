"use client";

import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Hospital, LandPlot, Building2, Zap, Globe } from "lucide-react"
import { colors } from "@/data/aboutData"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InvestmentSectorsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const introBadgeRef = useRef<HTMLDivElement>(null);
    const introTitleRef = useRef<HTMLHeadingElement>(null);
    const introParagraphRef = useRef<HTMLParagraphElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (sectionRef.current) {
            // Intro text animation
            gsap.fromTo(
                [introBadgeRef.current, introTitleRef.current, introParagraphRef.current],
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

            // Sector cards animation
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
            <div className="container mx-auto max-w-8xl">
                <div className="text-center mb-16">
                    <div ref={introBadgeRef} className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Market Focus</span>
                    </div>
                    <h2 ref={introTitleRef} className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Investment Sectors</h2>
                    <p ref={introParagraphRef} className="text-xl text-[#666666] max-w-3xl mx-auto">
                        At We Invest, we operate at the intersection of innovation and opportunity. Our investment funds are tailored to support a
                        focused range of high-growth sectors, each chosen for its potential to drive transformative change and deliver strong returns. Below are the key sectors we invest in:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 lg:mt-32">
                    <div className="group lg:mt-10" ref={el => { cardRefs.current[0] = el; }}>

                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00695C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00695C] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Cpu className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Technology</h3>
                                    <p className="text-[#666666] mb-4">We fund early-stage tech startups in AI, fintech, and software, addressing the challenge of scaling disruptive innovations in competitive markets.
                                        Our goal is to empower entrepreneurs to create technologies that redefine industries.</p>
                                    <div className="text-2xl font-bold text-[#00695C]">20%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:-mt-10" ref={el => { cardRefs.current[1] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00C853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00C853] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Hospital className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Health Care</h3>
                                    <p className="text-[#666666] mb-4">We back innovative healthcare solutions, addressing funding gaps to improve access and outcomes through transformative technologies.</p>
                                    <div className="text-2xl font-bold text-[#00C853]">16%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:mt-10" ref={el => { cardRefs.current[1] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00C853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="border-orange-900 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <LandPlot className="h-8 w-8 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Agriculture/Agri-Tech</h3>
                                    <p className="text-[#666666] mb-4">We invest in sustainable farming practices and food security solutions to combat unsustainable practices and global food challenges. Our focus is on building resilient, eco-friendly agricultural systems with economic benefits.</p>
                                    <div className="text-2xl font-bold text-orange-900">12%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:mt-10" ref={el => { cardRefs.current[2] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00BCD4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00BCD4] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Waste Management & Renewable Energy</h3>
                                    <p className="text-[#666666] mb-4"> We support initiatives in clean energy (solar, wind, hydropower) and sustainable waste solutions, tackling high costs and regulatory barriers to adoption. Our investments drive environmental impact and long-term financial returns.</p>
                                    <div className="text-2xl font-bold text-[#00BCD4]">13%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group 2xl:-mt-10" ref={el => { cardRefs.current[3] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFD54F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#FFD54F] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Equity Market</h3>
                                    <p className="text-[#666666] mb-4">We target opportunities in stock markets, leveraging data-driven insights to navigate volatility and investor sentiment. Our investments aim to capitalize on economic growth for diversified, long-term returns.</p>
                                    <div className="text-2xl font-bold text-[#FFD54F]">17%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:mt-10" ref={el => { cardRefs.current[4] = el; }}>
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00BCD4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#9C27B0] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Real Estate & Infrastructure</h3>
                                    <p className="text-[#666666] mb-4">We enable access to high-value properties through collective investment models, addressing the barrier of high costs for individual investors. Our goal is to deliver strong returns through appreciating land and property values.</p>
                                    <div className="text-2xl font-bold text-[#00BCD4]">22%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InvestmentSectorsSection;

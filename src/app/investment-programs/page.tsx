'use client'

import { useLayoutEffect, useRef } from "react"
import type { NextPage } from "next";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import InvestmentProgramsHeroSection from "@/components/investment-program/InvestmentProgramsHeroSection";
import InvestmentProgramsIntroSection from "@/components/investment-program/InvestmentProgramsIntroSection";
import OurInvestmentProgramsSection from "@/components/investment-program/OurInvestmentProgramsSection";
import WhyChooseUsSection from "@/components/investment-program/WhyChooseUsSection";

gsap.registerPlugin(ScrollTrigger)

const Programs: NextPage = () => {
    const comp = useRef(null) // create a ref for the root div

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate sections
            gsap.utils.toArray(".investment-section").forEach((section: any) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom top",
                        toggleActions: "play none none none",
                        // markers: true, // For debugging
                    },
                })

                // Animate inner elements (e.g., direct children of sections)
                gsap.utils.toArray(section.children).forEach((child: any, index: number) => {
                    gsap.from(child, {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                        delay: index * 0.1, // Stagger effect
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: child,
                            start: "top 90%",
                            toggleActions: "play none none none",
                            // markers: true, // For debugging
                        },
                    })
                })
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={comp} className="min-h-screen bg-gray-50 text-gray-900">
            <InvestmentProgramsHeroSection className="investment-section" />
            <main className="container mx-auto px-6 py-16">
                <InvestmentProgramsIntroSection className="investment-section" />
                <OurInvestmentProgramsSection className="investment-section" />
                <WhyChooseUsSection className="investment-section" />
            </main>
        </div>
    );
};

export default Programs;

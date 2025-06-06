"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Badge } from "@/components/ui/Badge"
import Image from "next/image"
import InvestmentHero from "@/assets/investment/investment.svg"
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface InvestmentHeroSectionProps {
    className?: string;
}

const InvestmentHeroSection = ({ className }: InvestmentHeroSectionProps) => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".hero-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".hero-blockquote", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".hero-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".hero-image", { opacity: 0, scale: 0.8, duration: 0.8, ease: "power3.out" }, "-=0.5");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={clsx("mt-[4rem] py-10 flex items-end justify-center", className)}>
            <div className="container text-center max-w-4xl">
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 hero-badge">Understanding Investment</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 hero-title">
                    We Invest: Your Gateway to <span className="text-emerald-600">Financial Growth</span>
                </h1>
                <blockquote className="text-xl md:text-2xl text-slate-600 italic mb-8 border-l-4 border-emerald-600 pl-6 hero-blockquote">
                    "Investing puts money to work. The only reason to save money is to invest it."
                    <footer className="text-lg mt-2 not-italic">— Grant Cardone</footer>
                </blockquote>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto hero-paragraph">
                    Smart investing is the key to unlocking financial potential. Whether you're an entrepreneur seeking capital
                    or an individual building wealth, we're here to guide your journey.
                </p>
            </div>
            <Image
                src={InvestmentHero}
                alt="We Invest Global | What is Investment?"
                width={480} // Approximate width based on lg:w-[30rem]
                height={480} // Assuming a square aspect ratio for an SVG icon
                className="hidden lg:block lg:w-[30rem] hero-image"
            />
        </section>
    )
}

export default InvestmentHeroSection;

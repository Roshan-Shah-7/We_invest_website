"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface InvestmentCtaSectionProps {
    className?: string;
}

const InvestmentCtaSection = ({ className }: InvestmentCtaSectionProps) => {
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

            tl.from(".cta-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".cta-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".cta-button", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={clsx("py-20 px-4 bg-brand_teal", className)}>
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cta-title">Ready to Start Your Investment Journey?</h2>
                <p className="text-xl text-emerald-100 mb-8 cta-paragraph">
                    Join thousands of investors who trust We Invest to grow their wealth and achieve their financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href='/contact'>
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 cta-button">
                            Schedule Consultation
                        </Button>
                    </Link>
                    {/* <Button
                        size="lg"
                        variant="outline"
                        className="border-white hover:bg-white hover:text-emerald-600"
                    >
                        Download Investment Guide
                    </Button> */}
                </div>
            </div>
        </section>
    );
};

export default InvestmentCtaSection;

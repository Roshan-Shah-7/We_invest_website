"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Shield, BarChart3, Target } from "lucide-react"
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface WhatIsInvestmentSectionProps {
    className?: string;
}

const WhatIsInvestmentSection = ({ className }: WhatIsInvestmentSectionProps) => {
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

            tl.from(".what-is-investment-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".what-is-investment-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".what-is-investment-card", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out", stagger: 0.2 }, "-=0.3")
              .from(".what-investment-does-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".what-investment-does-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".objective-item", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className={clsx("py-16 px-4 bg-white", className)}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 what-is-investment-title">What Is Investment?</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto what-is-investment-paragraph">
                        Investment is the act of allocating resources into assets or ventures with the expectation of generating
                        income or achieving appreciation over time.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="border-emerald-200 what-is-investment-card">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <TrendingUp className="h-6 w-6 text-emerald-600" />
                                <CardTitle>Capital Gains</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">
                                Purchasing assets like stocks or real estate and selling them at a higher price for profit.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 what-is-investment-card">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <DollarSign className="h-6 w-6 text-emerald-600" />
                                <CardTitle>Income Generation</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">
                                Earning regular returns through dividends, interest, or rental income from your investments.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Key Objectives */}
                <h2 className="text-3xl text-center mt-12 md:text-4xl font-bold text-slate-900 mb-5 what-investment-does-title">What Investment Does ?</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 what-investment-does-paragraph">
                    Investing actively grows your financial resources by putting your capital to work. It enables you to:
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center objective-item">
                        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Wealth Creation</h3>
                        <p className="text-sm text-slate-600">Generate income and capital gains to increase your net worth</p>
                    </div>
                    <div className="text-center objective-item">
                        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Shield className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Financial Security</h3>
                        <p className="text-sm text-slate-600">Build a safety net for retirement and emergencies</p>
                    </div>
                    <div className="text-center objective-item">
                        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BarChart3 className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Beat Inflation</h3>
                        <p className="text-sm text-slate-600">Ensure your money retains purchasing power over time</p>
                    </div>
                    <div className="text-center objective-item">
                        <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Target className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Achieve Goals</h3>
                        <p className="text-sm text-slate-600">Fund major milestones like homes, education, or business</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIsInvestmentSection;

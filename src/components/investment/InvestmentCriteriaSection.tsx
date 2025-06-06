"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, CheckCircle } from "lucide-react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface InvestmentCriteriaSectionProps {
    className?: string;
}

const InvestmentCriteriaSection = ({ className }: InvestmentCriteriaSectionProps) => {
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

            tl.from(".criteria-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".criteria-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".criteria-card", { opacity: 0, y: 50, duration: 0.6, ease: "power3.out", stagger: 0.2 }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={clsx("py-16 px-4 bg-white", className)}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 criteria-title">Investment Criteria</h2>
                    <p className="text-lg text-slate-600 criteria-paragraph">What we look for in investment opportunities</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-emerald-200 criteria-card">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Briefcase className="h-6 w-6 text-emerald-600" />
                                <span>For Companies</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Experience & Expertise</div>
                                    <div className="text-sm text-slate-600">Strong leadership with proven track record</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Passion & Vision</div>
                                    <div className="text-sm text-slate-600">Clear mission and commitment to impact</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Competitive Landscape</div>
                                    <div className="text-sm text-slate-600">Unique value proposition in viable market</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Business Model</div>
                                    <div className="text-sm text-slate-600">Sustainable and scalable growth approach</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 criteria-card">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Users className="h-6 w-6 text-emerald-600" />
                                <span>For Individuals</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Investment Size</div>
                                    <div className="text-sm text-slate-600">Amount you're able to commit</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Risk Tolerance</div>
                                    <div className="text-sm text-slate-600">Comfort level with potential volatility</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Time Horizon</div>
                                    <div className="text-sm text-slate-600">Short-term gains vs long-term growth</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                                <div>
                                    <div className="font-semibold">Preferred Sectors</div>
                                    <div className="text-sm text-slate-600">Industries aligned with interests and growth</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCriteriaSection;

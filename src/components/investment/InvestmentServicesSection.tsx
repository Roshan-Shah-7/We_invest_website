"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, User, Building, CheckCircle } from "lucide-react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface InvestmentServicesSectionProps {
    className?: string;
}

const InvestmentServicesSection = ({ className }: InvestmentServicesSectionProps) => {
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

            tl.from(".services-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".services-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".service-card", { opacity: 0, y: 50, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className={clsx("py-16 px-4 bg-white", className)}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 services-title">How We Invest Supports You</h2>
                    <p className="text-lg text-slate-600 services-paragraph">Tailored investment strategies for every type of investor</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow service-card">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Lightbulb className="h-8 w-8 text-emerald-600" />
                                <CardTitle>For Entrepreneurs</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-slate-600">Empowering visionary founders with capital and guidance</p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Funding for innovative businesses</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Strategic mentorship</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Industry network access</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow service-card">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <User className="h-8 w-8 text-emerald-600" />
                                <CardTitle>For Individuals</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-slate-600">Helping individuals achieve financial security</p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Personalized investment roadmaps</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Access to exclusive opportunities</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Education and ongoing support</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow service-card">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Building className="h-8 w-8 text-emerald-600" />
                                <CardTitle>For Institutions</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-slate-600">Large-scale projects with economic impact</p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Job creation and innovation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">Brand value enhancement</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm">High-return strategic investments</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default InvestmentServicesSection;

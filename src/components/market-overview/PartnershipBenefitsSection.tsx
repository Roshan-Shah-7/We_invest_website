"use client"

import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/market-overview/AnimatedCounter"
import { Target, Star, Shield, BrainCircuit, Users } from "lucide-react"

interface PartnershipBenefitsSectionProps {
    className?: string;
}

const PartnershipBenefitsSection = ({ className }: PartnershipBenefitsSectionProps) => {
    return (
        <section className={`py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50 ${className}`}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Partnership Benefits</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                            Why Partner with
                            <span className="block text-emerald-600">We Invest?</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Combine deep market knowledge with client-centric approach for tailored investment solutions
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                    <Target className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Strategic Guidance</h4>
                                    <p className="text-slate-600">
                                        Expert advice aligned with your goals, risk tolerance, and investment horizon
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                    <Star className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Network & Ecosystem Access</h4>
                                    <p className="text-slate-600">
                                        Gain unparalleled access to a thriving network of industry leaders, investors, and fellow entrepreneurs to accelerate your growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                    <Shield className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Risk Management</h4>
                                    <p className="text-slate-600">
                                        Rigorous due diligence and diversification strategies to optimize returns
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                    <BrainCircuit className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Deep Research</h4>
                                    <p className="text-slate-600">
                                        Comprehensive market analysis and data-driven insights to identify high-potential opportunities
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                    <Users className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Long-Term Partnership</h4>
                                    <p className="text-slate-600">
                                        Commitment to fostering sustainable growth and lasting financial success
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                                        <AnimatedCounter end={6} suffix="+" />
                                    </div>
                                    <div className="text-sm text-slate-600">Active Investments</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">
                                        <AnimatedCounter end={2.5} prefix="Rs " suffix="Cr+" decimalPlaces={1} />
                                    </div>
                                    <div className="text-sm text-slate-600">Capital Deployed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">
                                        <AnimatedCounter end={71} suffix="%" />
                                    </div>
                                    <div className="text-sm text-slate-600">Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">
                                        <AnimatedCounter end={4} suffix="+" />
                                    </div>
                                    <div className="text-sm text-slate-600">Market Sectors</div>
                                </div>
                            </div>
                            <blockquote className="text-md text-slate-600 italic mb-8 border-l-4 rounded-lg border-emerald-600 pl-4">
                                "Never invest in a business you cannot understand."
                                <footer className="mt-2 not-italic font-semibold">— Warren Buffett</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnershipBenefitsSection;

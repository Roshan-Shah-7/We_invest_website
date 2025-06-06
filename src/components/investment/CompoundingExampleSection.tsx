"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart, Lightbulb } from "lucide-react"
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface CompoundingExampleSectionProps {
    className?: string;
}

const CompoundingExampleSection = ({ className }: CompoundingExampleSectionProps) => {
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

            tl.from(".compounding-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".compounding-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".summary-card", { opacity: 0, x: -50, duration: 0.8, ease: "power3.out" }, "-=0.3")
              .from(".breakdown-card", { opacity: 0, x: 50, duration: 0.8, ease: "power3.out" }, "-=0.5");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={clsx("py-16 px-4 bg-emerald-50 relative", className)}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 compounding-title">The Power of Compounding</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto compounding-paragraph">
                        See how reinvesting earnings can exponentially grow your wealth over time
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Summary Card */}
                    <Card className="bg-white border-emerald-200 h-fit md:sticky top-20 summary-card">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <PieChart className="h-6 w-6 text-emerald-600" />
                                <span>Real Example: Mr. Shah's Investment Journey</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-600">NPR 10,00,000</div>
                                    <div className="text-sm text-slate-600">Initial Investment</div>
                                </div>
                                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-600">5% Annual</div>
                                    <div className="text-sm text-slate-600">Interest Rate</div>
                                </div>
                                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-600">15 Years</div>
                                    <div className="text-sm text-slate-600">Investment Period</div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-slate-50 rounded-lg">
                                        <div className="text-3xl font-bold text-slate-900 mb-2">NPR 20,78,928</div>
                                        <div className="text-emerald-600 font-semibold">With Compounding</div>
                                        <div className="text-sm text-slate-600 mt-1">Total return: NPR 10,78,928</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-50 rounded-lg">
                                        <div className="text-3xl font-bold text-slate-900 mb-2">NPR 17,50,000</div>
                                        <div className="text-slate-600 font-semibold">Without Compounding</div>
                                        <div className="text-sm text-slate-600 mt-1">Total return: NPR 7,50,000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4 border-t">
                                <div className="text-lg font-semibold text-emerald-600">
                                    Compounding generated an additional NPR 3,28,928 in returns!
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Column: Detailed Breakdown */}
                    <div className="bg-white border border-emerald-200 rounded-xl overflow-hidden breakdown-card">
                        <div className="bg-emerald-600 p-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <BarChart className="h-5 w-5 mr-2" />
                                Year-by-Year Compounding Breakdown
                            </h3>
                        </div>

                        <div className="p-6">
                            <p className="text-slate-700 mb-6">
                                Mr. Shrestha invests NPR 10,00,000 at a 5% annual interest rate, compounded annually, for 15 years.
                                The power of compounding is demonstrated through the increasing interest earned each year:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Year</th>
                                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-700 uppercase tracking-wider">Starting Balance</th>
                                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-700 uppercase tracking-wider">Interest Earned</th>
                                            <th className="px-4 py-3 whitespace-nowrap text-right text-xs font-medium text-slate-700 uppercase tracking-wider">Ending Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {/* Year 1 */}
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">1</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 10,00,000</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-600 font-medium text-right">NPR 50,000</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900 font-medium text-right">NPR 10,50,000</td>
                                        </tr>
                                        {/* Year 2 */}
                                        <tr className="bg-emerald-50/50">
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">2</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 10,50,000</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-600 font-medium text-right">NPR 52,500</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900 font-medium text-right">NPR 11,02,500</td>
                                        </tr>
                                        {/* Year 3 */}
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">3</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 11,02,500</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-600 font-medium text-right">NPR 55,125</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900 font-medium text-right">NPR 11,57,625</td>
                                        </tr>
                                        {/* Year 4 */}
                                        <tr className="bg-emerald-50/50">
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">4</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 11,57,625</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-600 font-medium text-right">NPR 57,881</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900 font-medium text-right">NPR 12,15,506</td>
                                        </tr>
                                        {/* Year 5 */}
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">5</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 12,15,506</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-600 font-medium text-right">NPR 60,775</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900 font-medium text-right">NPR 12,76,281</td>
                                        </tr>
                                        {/* Middle Years */}
                                        <tr>
                                            <td colSpan={4} className="px-4 py-3 text-center text-sm text-slate-500 italic">
                                                ... consistent growth over 10 years ...
                                            </td>
                                        </tr>
                                        {/* Year 15 */}
                                        <tr className="bg-emerald-100/30">
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-slate-900">15</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">NPR 19,80,000</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-emerald-700 text-right">NPR 98,928</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-slate-900 text-right">NPR 20,78,928</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-800 mb-2">Key Observations:</h4>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li>Year 1: Earns NPR 50,000 (5% of initial investment)</li>
                                    <li>Year 2: Earns NPR 52,500 (5% of new balance)</li>
                                    <li>Year 15: Earns NPR 98,928 (almost double the first year's interest)</li>
                                    <li>Total interest without compounding: NPR 7,50,000 (50,000 x 15)</li>
                                    <li>Total interest with compounding: NPR 10,78,928</li>
                                    <li>Compounding advantage: NPR 3,28,928 extra returns</li>
                                </ul>
                            </div>

                            <div className="mt-6 flex items-center bg-emerald-50 p-4 rounded-lg">
                                <Lightbulb className="h-6 w-6 text-emerald-600 mr-3 flex-shrink-0" />
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold">Financial Insight:</span> The power of compounding accelerates over time.
                                    By year 15, Mr. Shrestha earns almost twice as much interest annually as he did in the first year,
                                    without investing any additional capital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}

export default CompoundingExampleSection;

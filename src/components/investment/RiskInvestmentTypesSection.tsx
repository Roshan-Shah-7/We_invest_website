"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Shield } from "lucide-react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface RiskInvestmentTypesSectionProps {
    className?: string;
}

const RiskInvestmentTypesSection = ({ className }: RiskInvestmentTypesSectionProps) => {
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

            tl.from(".risk-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".risk-card", { opacity: 0, x: -50, duration: 0.8, ease: "power3.out", stagger: 0.2 }, "-=0.3")
              .from(".risk-conclusion", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={clsx("py-16 px-4 bg-white", className)}>
            <div className="container mx-auto max-w-8xl">
                <div className="mt-16 w-full">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center risk-title">Investments and Risk</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-emerald-200 risk-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Users className="h-6 w-6 text-emerald-600" />
                                    <span>Young Investors</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="py-2">
                                <p className="text-slate-600 mb-4">
                                    For younger individuals, the investment landscape is filled with opportunities. With a longer time horizon, they can embrace higher-risk investments, allowing them to capitalize on market fluctuations and recover from potential downturns. This age group is often encouraged to explore:
                                </p>
                                <ul className="list-disc pl-5 text-slate-600 space-y-2 px-4">
                                    <li>
                                        <b>Equities:</b> Investing in stocks can provide significant growth potential over time.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> High volatility, potential for significant capital loss. However, a long-time horizon allows for recovery from market downturns.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Growth Stocks:</b> These companies are expected to grow at an above-average rate compared to their industry, offering the chance for substantial returns.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Higher volatility than established companies, as their valuations often depend on future growth expectations.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Startups:</b> Investing in early-stage companies can be risky but may yield high rewards for those willing to take the plunge.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Extremely high risk, high potential for complete loss of capital. Lack of liquidity. Due diligence is crucial.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 risk-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Briefcase className="h-6 w-6 text-blue-600" />
                                    <span>Middle-Aged Investors</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="py-2">
                                <p className="text-slate-600 mb-4">
                                    Middle-aged investors typically have established careers and a clearer picture of their financial
                                    goals, such as saving for a home, children's education, or retirement. With a moderate time horizon,
                                    they can balance growth with a growing need for stability. This group often seeks:
                                </p>
                                <ul className="list-disc pl-5 text-slate-600 space-y-2 px-4">
                                    <li>
                                        <b>Diversified Portfolios:</b> A mix of equities and fixed-income securities to balance growth and risk.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Moderate risk, designed to mitigate overall portfolio volatility through asset allocation.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Blue-Chip Stocks:</b> Investments in large, well-established, and financially sound companies with a history of stable earnings.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Lower volatility than growth stocks, but still subject to market fluctuations.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Real Estate:</b> Investing in properties can offer long-term appreciation and potential rental income.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Illiquidity, market fluctuations, maintenance costs, and potential for tenant issues.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Balanced Mutual Funds/ETFs:</b> Funds that invest in a predetermined mix of stocks and bonds,
                                        automatically providing diversification.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Moderate risk, depending on the fund's specific asset allocation. Subject to management fees.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-200 risk-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Shield className="h-6 w-6 text-orange-600" />
                                    <span>Nearing Retirement</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="py-2">
                                <p className="text-slate-600 mb-4">
                                    As individuals approach retirement, their investment strategy typically shifts towards preserving capital and generating reliable income. Older investors often prioritize safety and stability, focusing on assets that can provide peace of mind. Recommended options include:
                                </p>
                                <ul className="list-disc pl-5 text-slate-600 space-y-2 px-4">
                                    <li>
                                        <b>Bonds:</b> These fixed-income securities offer regular interest payments and are generally considered safer than stocks.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Lower risk than stocks, but subject to interest rate risk (bond prices fall when interest rates rise) and inflation risk.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Fixed Deposits:</b> A secure way to earn interest on savings, providing guaranteed returns with minimal risk.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Very low risk, but returns may be lower than inflation, eroding purchasing power over time.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Dividend Stocks:</b> Investing in established companies that pay dividends can provide a steady income stream while still allowing for some growth potential.
                                        <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                            <li>
                                                <b>Risk:</b> Lower volatility than growth stocks, but still subject to market fluctuations. Dividend payments are not guaranteed.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-slate-600 italic risk-conclusion">
                            At We Invest, we understand that each investor's journey is unique.
                            We collaborate closely with our clients to evaluate their risk tolerance and tailor
                            investment strategies that align with their individual goals. Whether you are seeking
                            aggressive growth or prefer the security of steady returns, our team is here to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskInvestmentTypesSection;

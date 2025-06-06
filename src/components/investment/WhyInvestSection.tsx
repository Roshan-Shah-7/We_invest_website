import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, PieChart, BarChart3, CheckCircle } from "lucide-react";

const WhyInvestSection = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-8xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Invest?</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Investing is a powerful tool for achieving financial independence and meeting long-term goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-16">
                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Beat Inflation</h3>
                            <p className="text-slate-600 text-sm">
                                Inflation erodes purchasing power over time. Investments with returns that outpace inflation help
                                maintain and grow your wealth.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                <Target className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Achieve Financial Goals</h3>
                            <p className="text-slate-600 text-sm">
                                Whether it's buying a home, funding education, or retiring early, investing accelerates your progress
                                toward major milestones.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                <PieChart className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Leverage Compounding</h3>
                            <p className="text-slate-600 text-sm">
                                Starting early maximises the benefits of compounding, allowing smaller investments to grow
                                significantly over time.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                <BarChart3 className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Navigate Market Volatility</h3>
                            <p className="text-slate-600 text-sm">
                                Long-term investments can weather short-term market fluctuations, providing stability and higher
                                returns.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Increase Risk-Taking Capacity</h3>
                            <p className="text-slate-600 text-sm">
                                Younger investors with fewer financial responsibilities can explore higher-risk, higher-reward
                                opportunities.
                            </p>
                        </CardContent>
                    </Card>
                </div>


                {/* Key Considerations */}
                <div className="bg-slate-50 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Key Considerations Before Investing</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Conduct Thorough Research</h4>
                                    <p className="text-sm text-slate-600">
                                        Understand the investment vehicles you're considering, whether it's stocks, bonds, or alternative
                                        assets.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Establish a Financial Plan</h4>
                                    <p className="text-sm text-slate-600">
                                        Ensure you have sufficient savings to cover monthly expenses and an emergency fund before
                                        investing.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Understand Liquidity</h4>
                                    <p className="text-sm text-slate-600">
                                        Some investments may have lock-in periods or limited liquidity, impacting your ability to access
                                        funds quickly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Assess Risk Tolerance</h4>
                                    <p className="text-sm text-slate-600">
                                        All investments carry some level of risk. Evaluate your comfort level and consider diversifying.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Seek Professional Guidance</h4>
                                    <p className="text-sm text-slate-600">
                                        Consult a financial advisor to tailor an investment strategy that aligns with your goals and risk
                                        profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyInvestSection;

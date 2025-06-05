import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import Link from 'next/link';
import {
    BarChart,
    TrendingUp,
    Shield,
    Target,
    Users,
    Building,
    User,
    Briefcase,
    CheckCircle,
    ArrowRight,
    DollarSign,
    PieChart,
    BarChart3,
    Lightbulb,
} from "lucide-react"

export default function InvestmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Understanding Investment</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        We Invest: Your Gateway to <span className="text-emerald-600">Financial Growth</span>
                    </h1>
                    <blockquote className="text-xl md:text-2xl text-slate-600 italic mb-8 border-l-4 border-emerald-600 pl-6">
                        &quot;Investing puts money to work. The only reason to save money is to invest it.&quot;
                        <footer className="text-lg mt-2 not-italic">— Grant Cardone</footer>
                    </blockquote>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Smart investing is the key to unlocking financial potential. Whether you&apos;re an entrepreneur seeking capital
                        or an individual building wealth, we&apos;re here to guide your journey.
                    </p>
                </div>
            </section>

            {/* What is Investment */}
            <section id="about" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Is Investment?</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Investment is the act of allocating resources into assets or ventures with the expectation of generating
                            income or achieving appreciation over time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <Card className="border-emerald-200">
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

                        <Card className="border-emerald-200">
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
                    <h2 className="text-3xl text-center mt-12 md:text-4xl font-bold text-slate-900 mb-5">What Investment Dose?</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
                        Investing actively grows your financial resources by putting your capital to work. It enables you to:
                    </p>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <TrendingUp className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Wealth Creation</h3>
                            <p className="text-sm text-slate-600">Generate income and capital gains to increase your net worth</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Financial Security</h3>
                            <p className="text-sm text-slate-600">Build a safety net for retirement and emergencies</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <BarChart3 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Beat Inflation</h3>
                            <p className="text-sm text-slate-600">Ensure your money retains purchasing power over time</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Target className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Achieve Goals</h3>
                            <p className="text-sm text-slate-600">Fund major milestones like homes, education, or business</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compounding Example */}
            <section className="py-16 px-4 bg-emerald-50 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Power of Compounding</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            See how reinvesting earnings can exponentially grow your wealth over time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column: Summary Card */}
                        <Card className="bg-white border-emerald-200 h-fit md:sticky top-20">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <PieChart className="h-6 w-6 text-emerald-600" />
                                    <span>Real Example: Mr. Shrestha&apos;s Investment Journey</span>
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
                        <div className="bg-white border border-emerald-200 rounded-xl overflow-hidden">
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
                                                <th className="px-4 py-3 text-right text-xs font-medium text-slate-700 uppercase tracking-wider">Ending Balance</th>
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
                                        <li>Year 15: Earns NPR 98,928 (almost double the first year&apos;s interest)</li>
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

            {/* Why Invest Section */}
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
                                    Whether it&apos;s buying a home, funding education, or retiring early, investing accelerates your progress
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
                                            Understand the investment vehicles you&apos;re considering, whether it&apos;s stocks, bonds, or alternative
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

                    {/* Risk and Investment Types */}
                    <div className="mt-16 w-full">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Investments and Risk</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-emerald-200">
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

                            <Card className="border-blue-200">
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

                            <Card className="border-orange-200">
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
                            <p className="text-slate-600 italic">
                                At We Invest, we understand that each investor&apos;s journey is unique.
                                We collaborate closely with our clients to evaluate their risk tolerance and tailor
                                investment strategies that align with their individual goals. Whether you are seeking
                                aggressive growth or prefer the security of steady returns, our team is here to guide you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Invest Supports You</h2>
                        <p className="text-lg text-slate-600">Tailored investment strategies for every type of investor</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
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

                        <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
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

                        <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
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

            {/* Due Diligence Process */}
            <section id="process" className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Due Diligence Process</h2>
                        <p className="text-lg text-slate-600">Rigorous evaluation ensures sound investment decisions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Company Analysis</h3>
                            <p className="text-sm text-slate-600">
                                Assess business model, market potential, and competitive landscape
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Founder Evaluation</h3>
                            <p className="text-sm text-slate-600">Verify credibility, expertise, and vision of leadership team</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Risk Assessment</h3>
                            <p className="text-sm text-slate-600">Identify potential risks and develop mitigation strategies</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Goal Alignment</h3>
                            <p className="text-sm text-slate-600">Ensure opportunity supports sustainable growth and impact</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Criteria */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investment Criteria</h2>
                        <p className="text-lg text-slate-600">What we look for in investment opportunities</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-emerald-200">
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

                        <Card className="border-emerald-200">
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
                                        <div className="text-sm text-slate-600">Amount you&apos;re able to commit</div>
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

            {/* CTA Section */}
            <section className="py-20 px-4 bg-brand_teal">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Investment Journey?</h2>
                    <p className="text-xl text-emerald-100 mb-8">
                        Join thousands of investors who trust We Invest to grow their wealth and achieve their financial goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href='/contact'>
                            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
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

        </div>
    )
}

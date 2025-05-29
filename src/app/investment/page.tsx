import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import {
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
                        "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn&apos;t, pays
                        it."
                        <footer className="text-lg mt-2 not-italic">— Albert Einstein</footer>
                    </blockquote>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Smart investing is the key to unlocking financial potential. Whether you&apos;re an entrepreneur seeking capital
                        or an individual building wealth, we&apos;re here to guide your journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            Start Investing <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
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
            <section className="py-16 px-4 bg-emerald-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Power of Compounding</h2>
                        <p className="text-lg text-slate-600">
                            See how reinvesting earnings can exponentially grow your wealth over time
                        </p>
                    </div>

                    <Card className="bg-white border-emerald-200">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <PieChart className="h-6 w-6 text-emerald-600" />
                                <span>Real Example: Mr. Shrestha&apos;s Investment Journey</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-6">
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
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Invest?</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Investing is a powerful tool for achieving financial independence and meeting long-term goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Investments and Risk</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-emerald-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Users className="h-6 w-6 text-emerald-600" />
                                        <span>Young Investors</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-4">
                                        With a longer time horizon, younger individuals can afford to take on higher-risk investments, as
                                        they have time to recover from market downturns.
                                    </p>
                                    <div className="bg-emerald-50 p-4 rounded-lg">
                                        <p className="text-sm text-emerald-700 font-medium">
                                            Recommended: Equities, Growth Stocks, Startups
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-orange-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Shield className="h-6 w-6 text-orange-600" />
                                        <span>Nearing Retirement</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-4">
                                        Older investors may prefer safer, income-generating assets to preserve capital and ensure financial
                                        security.
                                    </p>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <p className="text-sm text-orange-700 font-medium">
                                            Recommended: Bonds, Fixed Deposits, Dividend Stocks
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-slate-600 italic">
                                At We Invest, we work closely with clients to assess their risk tolerance and align investments with
                                their unique goals, whether they seek aggressive growth or steady returns.
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
            <section className="py-20 px-4 bg-emerald-600">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Investment Journey?</h2>
                    <p className="text-xl text-emerald-100 mb-8">
                        Join thousands of investors who trust We Invest to grow their wealth and achieve their financial goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                            Schedule Consultation
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white hover:bg-white hover:text-emerald-600"
                        >
                            Download Investment Guide
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    )
}

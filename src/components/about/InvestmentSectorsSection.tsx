import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Building2, Heart, Zap, Globe } from "lucide-react"
import { colors } from "@/data/aboutData"

const InvestmentSectorsSection = () => {
    return (
        <section className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
            <div className="container mx-auto max-w-8xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Market Focus</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Investment Sectors</h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        At We Invest, we operate at the intersection of innovation and opportunity. Our investment funds are tailored to support a
                        focused range of high-growth sectors, each chosen for its potential to drive transformative change and deliver strong returns. Below are the key sectors we invest in:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 mb-16 lg:mt-32">
                    <div className="group lg:mt-10">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00695C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00695C] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Technology</h3>
                                    <p className="text-[#666666] mb-4">We fund early-stage tech startups in AI, fintech, and software, addressing the challenge of scaling disruptive innovations in competitive markets.
                                        Our goal is to empower entrepreneurs to create technologies that redefine industries.</p>
                                    <div className="text-2xl font-bold text-[#00695C]">30%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:-mt-10">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00C853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00C853] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Agriculture</h3>
                                    <p className="text-[#666666] mb-4">We invest in sustainable farming practices and food security solutions to combat unsustainable practices and global food challenges. Our focus is on building resilient, eco-friendly agricultural systems with economic benefits.</p>
                                    <div className="text-2xl font-bold text-[#00C853]">15%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:mt-10">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00BCD4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#00BCD4] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Waste Management & Renewable Energy</h3>
                                    <p className="text-[#666666] mb-4"> We support initiatives in clean energy (solar, wind, hydropower) and sustainable waste solutions, tackling high costs and regulatory barriers to adoption. Our investments drive environmental impact and long-term financial returns.</p>
                                    <div className="text-2xl font-bold text-[#00BCD4]">9%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group 2xl:-mt-10">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFD54F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#FFD54F] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Equity Market</h3>
                                    <p className="text-[#666666] mb-4">We target opportunities in stock markets, leveraging data-driven insights to navigate volatility and investor sentiment. Our investments aim to capitalize on economic growth for diversified, long-term returns.</p>
                                    <div className="text-2xl font-bold text-[#FFD54F]">25%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>

                    <div className="group lg:mt-10">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00BCD4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardContent className="p-8 relative">
                                    <div className="bg-[#9C27B0] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Real Estate</h3>
                                    <p className="text-[#666666] mb-4">We enable access to high-value properties through collective investment models, addressing the barrier of high costs for individual investors. Our goal is to deliver strong returns through appreciating land and property values.</p>
                                    <div className="text-2xl font-bold text-[#00BCD4]">21%</div>
                                    <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InvestmentSectorsSection;

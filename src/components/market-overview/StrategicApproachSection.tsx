"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Activity, PieChart, LineChart as LineChartIcon } from "lucide-react"

const StrategicApproachSection = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-emerald-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-400/30">Strategic Approach</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sector Rotation & Diversification</h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Navigate market cycles with our proven approach to maximize returns and minimize risk
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-8 text-center">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <Activity className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sector Rotation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Strategically shift investments toward growth sectors while reducing exposure to overvalued markets
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-8 text-center">
                            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <PieChart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Diversification</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Spread investments across multiple sectors to reduce risk and enhance portfolio resilience
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-8 text-center">
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <LineChartIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Market Expertise</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Analyze trends and economic indicators to identify high-potential opportunities
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default StrategicApproachSection;

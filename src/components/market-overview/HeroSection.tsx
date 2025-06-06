"use client"

import { BarChart3, ChevronRight, LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import LineChart from "@/components/market-overview/LineChart"
import { Sector } from "@/data/marketOverviewData"

interface HeroSectionProps {
    sectors: Sector[];
    handleSectorClick: (sector: Sector) => void;
}

const HeroSection = ({ sectors, handleSectorClick }: HeroSectionProps) => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                  linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
                `,
                            backgroundSize: "50px 50px",
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDuration: "8s" }}
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDuration: "10s", animationDelay: "2s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"
                        style={{ animationDuration: "12s", animationDelay: "4s" }}
                    ></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full mb-8 animate-fade-in"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <BarChart3 className="h-4 w-4 text-emerald-300 mr-2" />
                            <span className="text-emerald-300 text-sm font-medium">Investment Intelligence</span>
                        </div>
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Market
                            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                Overview
                            </span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12 animate-fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            A strategic snapshot of key investment sectors, offering insights into trends, opportunities, and risks
                            that shape informed decision-making.
                        </p>
                    </div>
                    <div
                        className="relative animate-fade-in"
                        style={{ animationDelay: "1s" }}
                    >
                        <div className="relative h-[500px]">
                            {sectors.slice(0, 4).map((sector, index) => {
                                const Icon: LucideIcon = sector.icon
                                const positions = [
                                    { top: "0%", left: "10%", rotate: "-5deg", scale: "0.9", zIndex: 4 },
                                    { top: "15%", left: "40%", rotate: "3deg", scale: "1", zIndex: 5 },
                                    { top: "35%", left: "5%", rotate: "-8deg", scale: "0.85", zIndex: 3 },
                                    { top: "50%", left: "30%", rotate: "6deg", scale: "0.95", zIndex: 4 },
                                ]
                                const pos = positions[index]
                                return (
                                    <div
                                        key={sector.id}
                                        className="absolute bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50 w-64 transform transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer"
                                        style={{
                                            top: pos.top,
                                            left: pos.left,
                                            transform: `rotate(${pos.rotate}) scale(${pos.scale})`,
                                            zIndex: pos.zIndex,
                                        }}
                                        onClick={() => handleSectorClick(sector)}
                                    >
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div
                                                className={`bg-gradient-to-br ${sector.bgColor} rounded-xl p-3 flex items-center justify-center`}
                                            >
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                            <h3 className="font-bold text-slate-900">{sector.name}</h3>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Market Size</span>
                                                <span className="font-medium text-slate-900">{sector.marketSize}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Growth Rate</span>
                                                <span className="font-medium text-emerald-600">{sector.growth}%</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Risk Level</span>
                                                <span className="font-medium text-slate-900">{sector.risk}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <LineChart
                                                data={sector.data}
                                                labels={sector.yearlyData.map(d => d.year)}
                                                height={60}
                                                color={sector.color}
                                                showDots={false}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                            <div
                                className="absolute top-[25%] right-[15%] w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-80 blur-sm animate-float"
                                style={{ animationDuration: "8s" }}
                            ></div>
                            <div
                                className="absolute top-[60%] right-[25%] w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-70 blur-sm animate-float"
                                style={{ animationDuration: "10s", animationDelay: "1s" }}
                            ></div>
                            <div
                                className="absolute top-[40%] right-[5%] w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full opacity-60 blur-sm animate-float"
                                style={{ animationDuration: "12s", animationDelay: "2s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-emerald-300 text-sm mb-2">Scroll to Explore</span>
                <ChevronRight className="h-6 w-6 text-emerald-300 transform rotate-90" />
            </div>
        </section>
    )
}

export default HeroSection;

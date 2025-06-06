"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { TrendingUp, CheckCircle, Filter, Eye, Shield } from "lucide-react"
import AnimatedSection from "@/components/market-overview/AnimatedSection"
import HorizontalScroll from "@/components/market-overview/HorizontalScroll"
import LineChart from "@/components/market-overview/LineChart"
import ComparisonChart from "@/components/market-overview/ComparisonChart"
import { Sector } from "@/data/marketOverviewData"

interface SectorOverviewSectionProps {
    sectors: Sector[];
    handleSectorClick: (sector: Sector) => void;
    comparedSectors: string[];
    toggleSectorComparison: (sectorId: string) => void;
    className?: string; // Add className prop
}

const SectorOverviewSection = ({ sectors, handleSectorClick, comparedSectors, toggleSectorComparison, className }: SectorOverviewSectionProps) => {
    const [comparisonMode, setComparisonMode] = useState(false)
    const [filterView, setFilterView] = useState<"all" | "low-risk" | "high-growth">("all")

    const getComparisonData = () => {
        const metrics = [
            { key: "growth", label: "Growth Rate", unit: "%" },
            { key: "risk", label: "Risk Level", unit: "" },
            { key: "liquidity", label: "Liquidity", unit: "" },
            { key: "volatility", label: "Volatility", unit: "" },
            { key: "entryBarrier", label: "Entry Barrier", unit: "" },
            { key: "timeHorizon", label: "Time Horizon", unit: "" },
        ]

        const riskLevels = {
            "Low": 1,
            "Low-Medium": 2,
            "Medium": 3,
            "Medium-High": 4,
            "High": 5,
            "Very High": 6,
        }

        const liquidityLevels = {
            "Low": 1,
            "Medium": 2,
            "Medium-High": 3,
            "High": 4,
        }

        const volatilityLevels = {
            "Low": 1,
            "Medium-Low": 2,
            "Medium": 3,
            "High": 4,
            "Very High": 5,
        }

        const entryBarrierLevels = {
            "Low": 1,
            "Medium": 2,
            "Medium-High": 3,
            "High": 4,
        }

        const timeHorizonLevels = {
            "Short-Medium": 1,
            "Medium": 2,
            "Medium-Long": 3,
            "Long": 4,
        }

        return metrics.map(metric => {
            const data = comparedSectors.map(sectorId => {
                const sector = sectors.find(s => s.id === sectorId)
                let value: number = 0;
                let displayValue: string = "";

                if (!sector) {
                    return {
                        label: "N/A",
                        value: 0,
                        displayValue: "N/A",
                        color: "#ccc",
                    };
                }

                if (metric.key === "growth") {
                    value = sector.growth
                    displayValue = `${sector.growth}%`
                } else if (metric.key === "risk") {
                    value = riskLevels[sector.risk] || 0
                    displayValue = sector.risk
                } else if (metric.key === "liquidity") {
                    value = liquidityLevels[sector.liquidity] || 0
                    displayValue = sector.liquidity
                } else if (metric.key === "volatility") {
                    value = volatilityLevels[sector.volatility] || 0
                    displayValue = sector.volatility
                } else if (metric.key === "entryBarrier") {
                    value = entryBarrierLevels[sector.entryBarrier] || 0
                    displayValue = sector.entryBarrier
                } else if (metric.key === "timeHorizon") {
                    value = timeHorizonLevels[sector.timeHorizon] || 0
                    displayValue = sector.timeHorizon
                }

                return {
                    label: sector.name,
                    value,
                    displayValue,
                    color: sector.color,
                }
            })

            let maxMetricValue: number;
            if (metric.key === "risk") {
                maxMetricValue = Math.max(...Object.values(riskLevels));
            } else if (metric.key === "liquidity") {
                maxMetricValue = Math.max(...Object.values(liquidityLevels));
            } else if (metric.key === "volatility") {
                maxMetricValue = Math.max(...Object.values(volatilityLevels));
            } else if (metric.key === "entryBarrier") {
                maxMetricValue = Math.max(...Object.values(entryBarrierLevels));
            } else if (metric.key === "timeHorizon") {
                maxMetricValue = Math.max(...Object.values(timeHorizonLevels));
            } else {
                maxMetricValue = Math.max(...data.map(item => item.value)) || 100; // Default for growth or other numerical metrics
            }


            return {
                metric: metric.label,
                unit: metric.unit,
                data,
                maxValue: maxMetricValue,
            }
        })
    }

    return (
        <section className={`py-24 px-4 bg-slate-50 ${className}`}>
            <div className="container mx-auto max-w-7xl">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                        <div>
                            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Investment Landscape</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Key Investment Sectors</h2>
                            <p className="text-xl text-slate-600 max-w-2xl">
                                Explore our comprehensive analysis of seven critical investment sectors, each offering unique
                                opportunities and risk profiles
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 flex items-center gap-4">
                            <div className="relative">
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2"
                                    onClick={() => setFilterView(filterView === "all" ? "low-risk" : filterView === "low-risk" ? "high-growth" : "all")}
                                >
                                    <Filter className="h-4 w-4" />
                                    {filterView === "all" ? "All Sectors" : filterView === "low-risk" ? "Low Risk" : "High Growth"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <HorizontalScroll>
                        {sectors
                            .filter(sector => {
                                if (filterView === "all") return true
                                if (filterView === "low-risk") return sector.risk === "Low-Medium" || sector.risk === "Medium"
                                if (filterView === "high-growth") return sector.growth >= 10
                                return true
                            })
                            .map((sector) => {
                                const Icon = sector.icon
                                const isCompared = comparedSectors.includes(sector.id)
                                return (
                                    <div
                                        key={sector.id}
                                        className={`snap-center flex-shrink-0 w-[300px] md:w-[350px] ${comparisonMode ? "cursor-pointer" : ""
                                            }`}
                                        onClick={() => comparisonMode ? toggleSectorComparison(sector.id) : handleSectorClick(sector)}
                                    >
                                        <Card
                                            className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isCompared ? "ring-2 ring-purple-500" : ""
                                                }`}
                                        >
                                            <CardContent className="p-6 h-full flex flex-col">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className={`bg-gradient-to-br ${sector.bgColor} rounded-xl p-3 flex items-center justify-center`}
                                                        >
                                                            <Icon className="h-6 w-6 text-white" />
                                                        </div>
                                                        <h3 className="font-bold text-slate-900">{sector.name}</h3>
                                                    </div>
                                                    {!comparisonMode && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="p-1 h-auto"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleSectorClick(sector)
                                                            }}
                                                        >
                                                            <Eye className="h-4 w-4 text-slate-500" />
                                                        </Button>
                                                    )}
                                                    {comparisonMode && (
                                                        <div
                                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isCompared
                                                                ? "bg-purple-500 border-purple-500 text-white"
                                                                : "border-slate-300"
                                                                }`}
                                                        >
                                                            {isCompared && <CheckCircle className="h-4 w-4" />}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="space-y-4 mb-4">
                                                    <div>
                                                        <div className="text-sm text-slate-500 mb-1">Market Size</div>
                                                        <div className="text-lg font-semibold text-slate-900">{sector.marketSize}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-slate-500 mb-1">Growth Rate</div>
                                                        <div className="flex items-center">
                                                            <span className="text-lg font-semibold text-emerald-600">{sector.growth}%</span>
                                                            <TrendingUp className="h-4 w-4 text-emerald-600 ml-2" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-slate-500 mb-1">Risk Profile</div>
                                                        <Badge
                                                            variant="outline"
                                                            className={`
                                  ${sector.risk === "Low-Medium" || sector.risk === "Medium"
                                                                    ? "border-emerald-200 text-emerald-700"
                                                                    : sector.risk === "Medium-High"
                                                                        ? "border-amber-200 text-amber-700"
                                                                        : "border-red-200 text-red-700"
                                                                }
                                `}
                                                        >
                                                            {sector.risk}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <div className="mt-auto">
                                                    <LineChart
                                                        data={sector.data}
                                                        labels={sector.yearlyData.map(d => d.year)}
                                                        height={80}
                                                        color={sector.color}
                                                        showDots={false}
                                                    />
                                                </div>
                                                {!comparisonMode && (
                                                    <Button
                                                        className="mt-4 w-full bg-slate-100 hover:bg-slate-200 text-slate-800"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleSectorClick(sector)
                                                        }}
                                                    >
                                                        View Details
                                                    </Button>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                )
                            })}
                    </HorizontalScroll>
                </AnimatedSection>

                {/* Sector Comparison View */}
                {comparisonMode && comparedSectors.length > 0 && (
                    <AnimatedSection delay={400}>
                        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sector Comparison</h3>
                                <p className="text-slate-600">
                                    Compare key metrics across {comparedSectors.length} selected investment sectors
                                </p>
                            </div>
                            <div className="space-y-12">
                                {getComparisonData().map((item, index) => (
                                    <div key={index}>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{item.metric}</h4>
                                        <ComparisonChart
                                            data={item.data}
                                            maxValue={item.maxValue}
                                            height={250}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Insights</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 rounded-xl p-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                                            <h5 className="font-semibold text-slate-900">Growth Potential</h5>
                                        </div>
                                        <p className="text-slate-600">
                                            {comparedSectors.includes("startups") ? "Startups offer the highest growth potential but come with increased risk. " : ""}
                                            {comparedSectors.includes("stocks") ? "Stock markets provide consistent long-term growth with moderate volatility. " : ""}
                                            {comparedSectors.includes("realestate") ? "Real estate delivers stable appreciation with strong income potential. " : ""}
                                            {comparedSectors.includes("crypto") ? "Cryptocurrencies show extreme growth potential with corresponding volatility. " : ""}
                                            {comparedSectors.includes("gold") ? "Gold provides moderate growth with excellent stability during market uncertainty. " : ""}
                                            {comparedSectors.includes("renewable") ? "Renewable energy offers steady growth supported by policy incentives. " : ""}
                                            {comparedSectors.includes("microbusiness") ? "Microbusinesses deliver reliable returns with community impact. " : ""}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Shield className="h-5 w-5 text-amber-600" />
                                            <h5 className="font-semibold text-slate-900">Risk Assessment</h5>
                                        </div>
                                        <p className="text-slate-600">
                                            {comparedSectors.includes("gold") ? "Gold offers the lowest risk profile, ideal for portfolio stabilization. " : ""}
                                            {comparedSectors.includes("realestate") ? "Real estate presents moderate risk with strong inflation protection. " : ""}
                                            {comparedSectors.includes("microbusiness") ? "Microbusinesses have lower risk due to their local focus and established customer base. " : ""}
                                            {comparedSectors.includes("renewable") ? "Renewable energy carries medium risk with long-term stability. " : ""}
                                            {comparedSectors.includes("stocks") ? "Stocks have medium-high risk but offer diversification benefits. " : ""}
                                            {comparedSectors.includes("startups") ? "Startups present high risk but potential for outsized returns. " : ""}
                                            {comparedSectors.includes("crypto") ? "Cryptocurrencies carry very high risk due to market volatility. " : ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                )}
            </div>
        </section>
    )
}

export default SectorOverviewSection;

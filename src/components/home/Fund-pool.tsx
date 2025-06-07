
"use client"

"use client"

import { useEffect, useRef, useState, useLayoutEffect } from "react"
import Image from "next/image"
import {
    TrendingUp,
    TrendingDown,
    Shield,
    BarChart3,
    Star,
    AlertTriangle,
    CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/card"
import type { FundPool } from "@/data/fundPoolsData"
import { getExtendedFundData } from "@/data/extendedFundData"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface FundPoolCardProps {
    fund: FundPool
    index: number
}

const FundPoolCard = ({ fund, index }: FundPoolCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const extendedFund = getExtendedFundData(fund)

    // Keep existing card animation, but adjust start slightly if needed
    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 95%", // Adjusted for earlier trigger
                        toggleActions: "play reverse play reverse", // Added for reverse animation
                    },
                }
            )
        }
    }, [])

    const getRiskColor = (level: string) => {
        switch (level) {
            case "Low":
                return "text-green-600 bg-green-50"
            case "Medium":
                return "text-yellow-600 bg-yellow-50"
            case "High":
                return "text-red-600 bg-red-50"
            default:
                return "text-gray-600 bg-gray-50"
        }
    }

    const getRiskIcon = (level: string) => {
        switch (level) {
            case "Low":
                return <CheckCircle className="w-4 h-4" />
            case "Medium":
                return <AlertTriangle className="w-4 h-4" />
            case "High":
                return <Shield className="w-4 h-4" />
            default:
                return <Shield className="w-4 h-4" />
        }
    }

    return (
        <Card
            ref={cardRef}
            className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={fund.image.src || "/placeholder.svg?height=200&width=400"}
                    alt={fund.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                    <Badge className="text-white border-white/20" style={{ backgroundColor: fund.color }}>
                        {fund.category}
                    </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{fund.title}</h3>
                </div>
            </div>

            <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            {extendedFund.ytdReturn > 0 ? (
                                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                            )}
                            <span className={`font-semibold ${extendedFund.ytdReturn > 0 ? "text-green-600" : "text-red-600"}`}>
                                {extendedFund.ytdReturn > 0 ? "+" : ""}
                                {extendedFund.ytdReturn}%
                            </span>
                        </div>
                        <p className="text-xs text-gray-500">YTD Return</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="font-semibold text-gray-900">{extendedFund.oneYearReturn}%</span>
                        </div>
                        <p className="text-xs text-gray-500">1Y Return</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <BarChart3 className="w-4 h-4 text-blue-600 mr-1" />
                            <span className="font-semibold text-gray-900">{extendedFund.expenseRatio}%</span>
                        </div>
                        <p className="text-xs text-gray-500">Expense Ratio</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Min. Investment</span>
                        <span className="text-sm font-semibold text-gray-900">{extendedFund.minimumInvestment}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Investment Range</span>
                        <span className="text-sm font-semibold text-gray-900">{fund.investmentRange}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Risk Level</span>
                        <Badge className={`${getRiskColor(extendedFund.riskLevel)} border-0`}>
                            {getRiskIcon(extendedFund.riskLevel)}
                            <span className="ml-1">{extendedFund.riskLevel}</span>
                        </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i < extendedFund.riskScore ? "bg-red-500" : "bg-gray-200"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center mt-2">
                        Start investing with as little as {extendedFund.minimumInvestment}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

interface FundPoolComponentProps {
    funds: FundPool[]
    title?: string
    subtitle?: string
}

export default function FundPoolComponent({
    funds,
    title = "Investment Funds",
    subtitle = "Discover our curated selection of high-performance investment opportunities",
}: FundPoolComponentProps) {
    const initialDisplayCount = 6
    const loadMoreCount = 4
    const [visibleFundsCount, setVisibleFundsCount] = useState(initialDisplayCount)
    const sectionRef = useRef(null);
    const q = gsap.utils.selector(sectionRef);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 95%",
                end: "bottom 20%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
            }
        });

        tl.fromTo(q(".text-center > h2, .text-center > p"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
        );

        return () => {
            tl.kill();
        };
    }, []);

    const handleLoadMore = () => {
        setVisibleFundsCount(prev => Math.min(prev + loadMoreCount, funds.length))
    }

    const allFundsLoaded = visibleFundsCount >= funds.length
    const visibleFunds = funds.slice(0, visibleFundsCount)
    const centerLast = visibleFunds.length % 3 === 1

    return (
        <section ref={sectionRef} className="py-16 bg-gray-100 w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand_teal mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleFunds.map((fund, index) => (
                        <div
                            key={fund.number}
                            className={
                                centerLast && index === visibleFunds.length - 1
                                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                                    : ""
                            }
                        >
                            <FundPoolCard fund={fund} index={index} />
                        </div>
                    ))}
                </div>

                {!allFundsLoaded && (
                    <div className="text-center mt-12">
                        <Button
                            onClick={handleLoadMore}
                            className="bg-brand_teal hover:bg-brand_teal/90 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                        >
                            Load More Funds
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

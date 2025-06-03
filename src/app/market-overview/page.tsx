"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LucideIcon } from "lucide-react"
import {
    BrainCircuit,
    LineChart,
    PieChart,
    Star,
    Target,
    TrendingUp,
    Building2,
    Coins,
    Lightbulb,
    Store,
    Zap,
    Bitcoin,
    BarChart3,
    Shield,
    Users,
    CheckCircle,
    Sparkles,
    Activity,
    DollarSign,
    ChevronRight,
    ChevronLeft,
    Filter,
    BarChart2,
    Eye,
} from "lucide-react"

// Type Definitions
interface ProgressRingProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    animate?: boolean;
}

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

interface RadarChartProps {
    data: number[];
    labels: string[];
    color?: string;
    size?: number;
}

interface HorizontalScrollProps {
    children: React.ReactNode;
}

interface ComparisonChartProps {
    data: { label: string; value: number; displayValue: string; color: string }[];
    maxValue: number;
    height?: number;
}

interface LineChartProps {
    data: number[];
    labels: string[];
    height?: number;
    color?: string;
    showDots?: boolean;
    animate?: boolean;
}

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
}

interface Sector {
    id: string;
    name: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    marketSize: string;
    growth: number;
    risk: "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High" | "Very High";
    liquidity: "Low" | "Medium" | "Medium-High" | "High";
    volatility: "Low" | "Medium-Low" | "Medium" | "High" | "Very High";
    entryBarrier: "Low" | "Medium" | "Medium-High" | "High";
    timeHorizon: "Short-Medium" | "Medium" | "Medium-Long" | "Long";
    data: number[];
    yearlyData: { year: string; value: number }[];
    description: string;
    insights: string;
    opportunity: string;
    riskNote: string;
    radarData: number[];
    radarLabels: string[];
    keyMetrics: { label: string; value: string; trend: string }[];
    expertTips: string[];
}


// Custom Progress Ring Component
const ProgressRing = ({ percentage, size = 120, strokeWidth = 8, color = "#10b981", animate = true }: ProgressRingProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const [strokeDashoffset, setStrokeDashoffset] = useState(circumference)
    const strokeDasharray = `${circumference} ${circumference}`

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => {
                setStrokeDashoffset(circumference - (percentage / 100) * circumference)
            }, 100)
            return () => clearTimeout(timer)
        } else {
            setStrokeDashoffset(circumference - (percentage / 100) * circumference)
        }
    }, [percentage, circumference, animate])

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent" />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1500 ease-out"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">{percentage}%</span>
            </div>
        </div>
    )
}

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number | null = null
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [end, duration])

    return (
        <span className="font-bold">
            {prefix}
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

// Radar Chart Component
const RadarChart = ({ data, labels, color = "#10b981", size = 200 }: RadarChartProps) => {
    const maxValue = Math.max(...data)
    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.4
    const angleStep = (Math.PI * 2) / data.length

    const points = data.map((value, i) => {
        const angle = i * angleStep - Math.PI / 2
        const distance = (value / maxValue) * radius
        return {
            x: centerX + distance * Math.cos(angle),
            y: centerY + distance * Math.sin(angle),
        }
    })

    const pathData =
        points.reduce((path, point) => {
            return path + (path === "" ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
        }, "") + " Z"

    const gridLines = [0.2, 0.4, 0.6, 0.8, 1].map((percentage) => {
        const gridPoints = Array.from({ length: data.length }).map((_, i) => {
            const angle = i * angleStep - Math.PI / 2
            const distance = percentage * radius
            return {
                x: centerX + distance * Math.cos(angle),
                y: centerY + distance * Math.sin(angle),
            }
        })

        return (
            gridPoints.reduce((pathStr, point) => {
                return pathStr + (pathStr === "" ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
            }, "") + " Z"
        )
    })

    const axisLines = Array.from({ length: data.length }).map((_, i) => {
        const angle = i * angleStep - Math.PI / 2
        return `M ${centerX} ${centerY} L ${centerX + radius * Math.cos(angle)} ${centerY + radius * Math.sin(angle)}`
    })

    return (
        <div className="relative">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
                {gridLines.map((line, i) => (
                    <path key={`grid-${i}`} d={line} stroke="#e5e7eb" strokeWidth="1" fill="none" opacity={0.5} />
                ))}
                {axisLines.map((line, i) => (
                    <path key={`axis-${i}`} d={line} stroke="#e5e7eb" strokeWidth="1" fill="none" />
                ))}
                <path
                    d={pathData}
                    stroke={color}
                    strokeWidth="2"
                    fill={`${color}20`}
                    className="transition-all duration-1000"
                />
                {points.map((point, i) => (
                    <circle
                        key={`point-${i}`}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill={color}
                        className="transition-all duration-1000"
                    />
                ))}
            </svg>
            {labels.map((label, i) => {
                const angle = i * angleStep - Math.PI / 2
                const distance = radius + 20
                const x = centerX + distance * Math.cos(angle)
                const y = centerY + distance * Math.sin(angle)
                let textAnchor: "start" | "middle" | "end" = "middle"
                if (x < centerX - 10) textAnchor = "end"
                if (x > centerX + 10) textAnchor = "start"

                return (
                    <div
                        key={`label-${i}`}
                        className="absolute text-xs font-medium text-slate-600"
                        style={{
                            left: x,
                            top: y,
                            transform: "translate(-50%, -50%)",
                            textAlign: textAnchor === "middle" ? "center" : textAnchor === "start" ? "left" : "right",
                            width: "80px",
                        }}
                    >
                        {label}
                    </div>
                )
            })}
        </div>
    )
}

// Horizontal Scrolling Component
const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current
        if (container) {
            const scrollAmount = container.clientWidth * 0.8
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    const handleScroll = () => {
        const container = scrollRef.current
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0)
            setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
        }
    }

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener("scroll", handleScroll)
            handleScroll()
            return () => container.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="relative">
            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="h-6 w-6 text-slate-700" />
                </button>
            )}

            <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {children}
            </div>

            {showRightArrow && (
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight className="h-6 w-6 text-slate-700" />
                </button>
            )}
        </div>
    )
}

// Comparison Chart Component
const ComparisonChart = ({ data, maxValue, height = 300 }: ComparisonChartProps) => {
    const barWidth = 100 / data.length

    return (
        <div className="w-full" style={{ height: `${height}px` }}>
            <div className="relative h-full">
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500">
                    <div>100%</div>
                    <div>75%</div>
                    <div>50%</div>
                    <div>25%</div>
                    <div>0%</div>
                </div>
                <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-slate-200 w-full h-0"></div>
                    ))}
                </div>
                <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end">
                    {data.map((item, i) => {
                        const percentage = (item.value / maxValue) * 100
                        return (
                            <div key={i} className="flex flex-col items-center justify-end h-full" style={{ width: `${barWidth}%` }}>
                                <div className="relative w-full px-1">
                                    <div
                                        className="w-full rounded-t-md transition-all duration-1000 ease-out"
                                        style={{
                                            height: `${percentage}%`,
                                            backgroundColor: item.color,
                                            maxHeight: "100%",
                                        }}
                                    ></div>
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold">
                                        {item.displayValue}
                                    </div>
                                </div>
                                <div className="mt-2 text-xs font-medium text-slate-700 text-center">{item.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// Line Chart Component
const LineCharts = ({ data, labels, height = 200, color = "#10b981", showDots = true, animate = true }: LineChartProps) => {
    const [pathLength, setPathLength] = useState(0)
    const [pathOffset, setPathOffset] = useState(0)
    const svgRef = useRef<SVGSVGElement>(null)

    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const range = maxValue - minValue
    const padding = range * 0.2
    const adjustedMax = maxValue + padding
    const adjustedMin = Math.max(0, minValue - padding)

    const points = data.map((value, index) => ({
        x: (index / (data.length - 1)) * 100,
        y: 100 - ((value - adjustedMin) / (adjustedMax - adjustedMin)) * 100,
    }))

    const pathData = points.reduce((path, point, index) => {
        return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
    }, "")

    useEffect(() => {
        if (animate && svgRef.current) {
            const path = svgRef.current.querySelector("path")
            if (path) {
                const length = path.getTotalLength()
                setPathLength(length)
                setPathOffset(length)
                setTimeout(() => {
                    setPathOffset(0)
                }, 100)
            }
        }
    }, [animate])

    return (
        <div className="w-full" style={{ height: `${height}px` }}>
            <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="0" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="100" y2="100" stroke="#f1f5f9" strokeWidth="0.5" />
                <path
                    d={pathData}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={animate ? pathLength : "none"}
                    strokeDashoffset={animate ? pathOffset : "none"}
                    style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                />
                <path
                    d={`${pathData} L 100 100 L 0 100 Z`}
                    fill={`${color}15`}
                    stroke="none"
                    opacity={animate ? (pathOffset === 0 ? 1 : 0) : 1}
                    style={{ transition: "opacity 1s ease-out" }}
                />
                {showDots &&
                    points.map((point, index) => (
                        <circle
                            key={index}
                            cx={point.x}
                            cy={point.y}
                            r="2"
                            fill={color}
                            opacity={animate ? (pathOffset === 0 ? 1 : 0) : 1}
                            style={{ transition: "opacity 1s ease-out" }}
                        />
                    ))}
            </svg>
            <div className="flex justify-between mt-2">
                {labels.map((label, index) => (
                    <div key={index} className="text-xs text-slate-500">
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}

// Animated Section Component
const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 },
        )

        const currentRef = sectionRef.current; // Capture the ref value

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return (
        <div
            ref={sectionRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {children}
        </div>
    )
}

interface EmergingTrend {
    icon: LucideIcon
    title: string
    description: string
    impact: string
    color: "emerald" | "blue" | "amber" | "purple"
}


export default function MarketOverviewPage() {
    const [selectedSector, setSelectedSector] = useState<string | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [comparisonMode, setComparisonMode] = useState(false)
    const [comparedSectors, setComparedSectors] = useState<string[]>([])
    const [filterView, setFilterView] = useState<"all" | "low-risk" | "high-growth">("all")

    const handleSectorClick = (sector: Sector) => {
        setSelectedSector(sector.id)
        setIsDialogOpen(true)
    }

    const sectors: Sector[] = [
        {
            id: "stocks",
            name: "Stock Market",
            icon: TrendingUp,
            color: "#10b981",
            bgColor: "from-emerald-500 to-teal-600",
            marketSize: "$95T",
            growth: 14.8,
            risk: "Medium-High",
            liquidity: "High",
            volatility: "Medium",
            entryBarrier: "Low",
            timeHorizon: "Medium-Long",
            data: [65, 78, 82, 75, 88, 92, 85, 90],
            yearlyData: [
                { year: "2018", value: 65 },
                { year: "2019", value: 78 },
                { year: "2020", value: 82 },
                { year: "2021", value: 75 },
                { year: "2022", value: 88 },
                { year: "2023", value: 92 },
                { year: "2024", value: 85 },
            ],
            description: "Dynamic platform for trading shares of publicly held companies",
            insights: "The S&P 500 index averaged an annual return of 14.8% from 2012 to 2021. However, annual returns vary significantly due to market volatility, with only 2014 closely aligning with the average. In 2024, global stock markets are projected to grow steadily, supported by technological advancements and economic recovery, though geopolitical tensions and interest rate fluctuations pose risks.",
            opportunity: "Stocks offer significant growth potential for long-term investors. Diversification across industries and strategic timing can mitigate volatility and enhance returns. Emerging markets and technology sectors present particularly strong growth opportunities for investors with appropriate risk tolerance.",
            riskNote: "Market fluctuations, driven by economic cycles or unexpected events, can impact short-term returns. A long-term perspective and diversified portfolio are key to managing risk. Investors should consider their time horizon and financial goals when allocating to equities.",
            radarData: [90, 75, 60, 85, 70],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Avg. Annual Return", value: "14.8%", trend: "up" },
                { label: "Market Volatility", value: "Medium", trend: "neutral" },
                { label: "Dividend Yield", value: "1.8%", trend: "down" },
                { label: "P/E Ratio", value: "22.5", trend: "up" },
            ],
            expertTips: [
                "Diversify across sectors to reduce risk",
                "Consider dollar-cost averaging for long-term investments",
                "Balance growth stocks with dividend-paying companies",
                "Monitor economic indicators for market timing",
            ],
        },
        {
            id: "realestate",
            name: "Real Estate",
            icon: Building2,
            color: "#8b5cf6",
            bgColor: "from-purple-500 to-indigo-600",
            marketSize: "$437B",
            growth: 10.6,
            risk: "Medium",
            liquidity: "Low",
            volatility: "Low",
            entryBarrier: "High",
            timeHorizon: "Long",
            data: [70, 72, 75, 78, 80, 82, 85, 87],
            yearlyData: [
                { year: "2018", value: 70 },
                { year: "2019", value: 72 },
                { year: "2020", value: 75 },
                { year: "2021", value: 78 },
                { year: "2022", value: 80 },
                { year: "2023", value: 82 },
                { year: "2024", value: 85 },
            ],
            description: "Tangible assets providing intrinsic value and wealth-building",
            insights: "Nepal's real estate market is projected to reach NPR 437.20 billion in 2024, with the residential segment dominating at NPR 377.40 billion. Growth is driven by rising domestic and international demand, despite challenges like political instability and infrastructure limitations. Globally, real estate markets are benefiting from urbanization and increased demand for sustainable properties.",
            opportunity: "Residential properties yield an average annual return of 10.6%, while commercial properties average 9.5%. Emerging areas, particularly in developing regions, offer high ROI potential for investors seeking stable, long-term gains. Real estate investment trusts (REITs) provide an accessible entry point with strong dividend potential.",
            riskNote: "Illiquidity, regulatory changes, and economic downturns can affect real estate investments. Due diligence and market research are essential to identifying high-potential opportunities. Location remains the critical factor in determining long-term appreciation.",
            radarData: [40, 65, 85, 30, 60],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Avg. Annual Return", value: "10.6%", trend: "up" },
                { label: "Rental Yield", value: "5.2%", trend: "neutral" },
                { label: "Vacancy Rate", value: "4.8%", trend: "down" },
                { label: "Price-to-Rent Ratio", value: "19.3", trend: "up" },
            ],
            expertTips: [
                "Focus on location and growth potential",
                "Consider property management costs in ROI calculations",
                "Explore REITs for more liquid real estate exposure",
                "Research local market trends and development plans",
            ],
        },
        {
            id: "gold",
            name: "Gold Market",
            icon: Coins,
            color: "#f59e0b",
            bgColor: "from-amber-500 to-orange-600",
            marketSize: "4.42KT",
            growth: 7.38,
            risk: "Low-Medium",
            liquidity: "Medium-High",
            volatility: "Medium",
            entryBarrier: "Medium",
            timeHorizon: "Medium-Long",
            data: [60, 65, 68, 70, 72, 75, 78, 80],
            yearlyData: [
                { year: "2018", value: 60 },
                { year: "2019", value: 65 },
                { year: "2020", value: 68 },
                { year: "2021", value: 70 },
                { year: "2022", value: 72 },
                { year: "2023", value: 75 },
                { year: "2024", value: 78 },
            ],
            description: "Safe-haven asset valued during economic uncertainty",
            insights: "The global gold market is estimated at 4.42 kilotons in 2024, with a projected compound annual growth rate (CAGR) of 7.38%, reaching 6.32 kilotons by 2029. Post-COVID recovery, starting in 2021, has strengthened demand, fueled by cultural practices and hedging strategies. In 2025, gold prices are expected to remain robust due to persistent inflationary pressures.",
            opportunity: "Gold provides portfolio stability during volatile periods, making it ideal for risk-averse investors. Its long-term value preservation complements growth-oriented assets. Physical gold, ETFs, mining stocks, and futures contracts offer various entry points for different investor profiles.",
            riskNote: "Gold prices can be affected by currency fluctuations and changes in interest rates. Its lack of income generation requires balancing with other assets. Storage and insurance costs must be considered for physical gold investments.",
            radarData: [75, 50, 90, 65, 40],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Avg. Annual Return", value: "7.38%", trend: "up" },
                { label: "Inflation Hedge", value: "Strong", trend: "up" },
                { label: "Market Volatility", value: "Medium", trend: "neutral" },
                { label: "Storage Cost", value: "0.5-1%", trend: "neutral" },
            ],
            expertTips: [
                "Use gold as a portfolio diversifier (5-10% allocation)",
                "Consider gold ETFs for easier trading and storage",
                "Monitor real interest rates for price movement indicators",
                "Balance physical gold with paper gold investments",
            ],
        },
        {
            id: "startups",
            name: "Startups",
            icon: Lightbulb,
            color: "#ef4444",
            bgColor: "from-red-500 to-pink-600",
            marketSize: "$3.8T",
            growth: 25,
            risk: "High",
            liquidity: "Low",
            volatility: "Very High",
            entryBarrier: "Medium-High",
            timeHorizon: "Long",
            data: [30, 45, 60, 40, 75, 85, 70, 90],
            yearlyData: [
                { year: "2018", value: 30 },
                { year: "2019", value: 45 },
                { year: "2020", value: 60 },
                { year: "2021", value: 40 },
                { year: "2022", value: 75 },
                { year: "2023", value: 85 },
                { year: "2024", value: 70 },
            ],
            description: "Innovative, scalable businesses disrupting markets",
            insights: "In 2024, the global startup ecosystem is valued at over $3.8 trillion, driven by advancements in AI, fintech, and healthcare. Key trends include increased focus on sustainability and digital transformation. Success depends on factors like the founding team, market fit, and competitive dynamics.",
            opportunity: "Early-stage investments in startups can yield returns of 10x or more, particularly in high-growth sectors. However, only a small percentage of startups succeed, emphasizing the need for thorough due diligence. Angel investing, venture capital funds, and equity crowdfunding platforms provide various entry points.",
            riskNote: "High failure rates and market competition pose significant risks. Partnering with experienced investors like We Invest can help identify promising ventures. Diversification across multiple startups is essential to manage the inherent risks.",
            radarData: [20, 95, 30, 45, 60],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Potential Return", value: "10x+", trend: "up" },
                { label: "Success Rate", value: "10-20%", trend: "neutral" },
                { label: "Avg. Exit Timeline", value: "5-7 yrs", trend: "neutral" },
                { label: "Funding Growth", value: "25%", trend: "up" },
            ],
            expertTips: [
                "Diversify across multiple startups and sectors",
                "Focus on the quality of the founding team",
                "Understand the market problem and solution fit",
                "Consider the scalability of the business model",
            ],
        },
        {
            id: "microbusiness",
            name: "Microbusinesses",
            icon: Store,
            color: "#06b6d4",
            bgColor: "from-cyan-500 to-blue-600",
            marketSize: "Local",
            growth: 25,
            risk: "Low-Medium",
            liquidity: "Low",
            volatility: "Low",
            entryBarrier: "Medium",
            timeHorizon: "Medium",
            data: [55, 58, 62, 65, 68, 70, 72, 75],
            yearlyData: [
                { year: "2018", value: 55 },
                { year: "2019", value: 58 },
                { year: "2020", value: 62 },
                { year: "2021", value: 65 },
                { year: "2022", value: 68 },
                { year: "2023", value: 70 },
                { year: "2024", value: 72 },
            ],
            description: "Small-scale enterprises serving local communities",
            insights: "Microbusinesses contribute significantly to local economies, fostering entrepreneurship and addressing community needs. They target ROIs of 25% to 50%, with valuations typically based on two to four times seller discretionary earnings (SDE). In 2024, microbusinesses are gaining traction due to their resilience and adaptability in uncertain economic climates.",
            opportunity: "Microbusinesses offer stable, community-focused investments with moderate returns. They are ideal for investors seeking lower-risk opportunities with localized impact. Direct ownership, partnership models, and small business investment funds provide various entry points.",
            riskNote: "Limited scale and reliance on local markets can restrict growth. Strategic support and operational efficiency are critical to maximizing returns. Owner-operator expertise is often the key success factor in microbusiness investments.",
            radarData: [35, 60, 75, 70, 30],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Avg. Annual Return", value: "25-50%", trend: "up" },
                { label: "Valuation Multiple", value: "2-4x SDE", trend: "neutral" },
                { label: "Failure Rate", value: "20%", trend: "down" },
                { label: "Local Economic Impact", value: "High", trend: "up" },
            ],
            expertTips: [
                "Focus on businesses with established customer base",
                "Evaluate owner-dependency and transition plans",
                "Consider local economic factors and community needs",
                "Look for opportunities to improve operations and scale",
            ],
        },
        {
            id: "renewable",
            name: "Renewable Energy",
            icon: Zap,
            color: "#22c55e",
            bgColor: "from-green-500 to-emerald-600",
            marketSize: "$1.5T",
            growth: 6.1,
            risk: "Medium",
            liquidity: "Medium",
            volatility: "Medium-Low",
            entryBarrier: "High",
            timeHorizon: "Long",
            data: [45, 50, 55, 60, 65, 70, 75, 80],
            yearlyData: [
                { year: "2018", value: 45 },
                { year: "2019", value: 50 },
                { year: "2020", value: 55 },
                { year: "2021", value: 60 },
                { year: "2022", value: 65 },
                { year: "2023", value: 70 },
                { year: "2024", value: 75 },
            ],
            description: "Sustainable energy sources driving clean future",
            insights: "The global renewable energy market is projected to reach $1.5 trillion by 2025, with a CAGR of 6.1%. Government incentives, technological advancements, and increasing environmental awareness drive growth. In Nepal, hydropower dominates, with significant potential for solar and wind investments.",
            opportunity: "Renewable energy offers stable, long-term returns, often supported by government policies. Investments in infrastructure or innovative technologies can yield strong financial and societal impact. Green bonds, ETFs, direct project investments, and renewable energy stocks provide various entry points.",
            riskNote: "High initial costs and regulatory dependencies can pose challenges. Diversifying across renewable energy subsectors can mitigate risks. Technology evolution may impact long-term viability of specific renewable solutions.",
            radarData: [55, 70, 80, 40, 65],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Avg. Annual Return", value: "6.1%", trend: "up" },
                { label: "Govt. Incentives", value: "Strong", trend: "up" },
                { label: "Market Growth", value: "Steady", trend: "up" },
                { label: "Carbon Reduction", value: "High", trend: "up" },
            ],
            expertTips: [
                "Consider geographic diversification for energy projects",
                "Evaluate technology maturity and innovation potential",
                "Research regulatory frameworks and incentive programs",
                "Balance established technologies with emerging solutions",
            ],
        },
        {
            id: "crypto",
            name: "Cryptocurrencies",
            icon: Bitcoin,
            color: "#f97316",
            bgColor: "from-orange-500 to-red-600",
            marketSize: "$2.5T",
            growth: 12,
            risk: "Very High",
            liquidity: "High",
            volatility: "Very High",
            entryBarrier: "Low",
            timeHorizon: "Short-Medium",
            data: [20, 40, 80, 30, 90, 60, 85, 95],
            yearlyData: [
                { year: "2018", value: 20 },
                { year: "2019", value: 40 },
                { year: "2020", value: 80 },
                { year: "2021", value: 30 },
                { year: "2022", value: 90 },
                { year: "2023", value: 60 },
                { year: "2024", value: 85 },
            ],
            description: "Digital assets powered by blockchain technology",
            insights: "The global cryptocurrency market is valued at approximately $2.5 trillion in 2024, with a projected CAGR of 12% through 2030. Volatility remains high, but institutional adoption and regulatory clarity are stabilizing the sector. Emerging trends include decentralized finance (DeFi) and non-fungible tokens (NFTs).",
            opportunity: "Cryptocurrencies offer high-reward potential for risk-tolerant investors. Early investments in promising blockchain projects can yield significant returns. Direct token purchases, crypto ETFs, mining operations, and blockchain venture funds provide various entry points.",
            riskNote: "Extreme volatility, regulatory uncertainty, and cybersecurity risks require careful consideration. Limiting exposure and staying informed are critical. The nascent nature of the technology means fundamentals are still evolving.",
            radarData: [85, 90, 20, 80, 50],
            radarLabels: ["Liquidity", "Growth", "Stability", "Accessibility", "Diversification"],
            keyMetrics: [
                { label: "Market Volatility", value: "Very High", trend: "neutral" },
                { label: "Institutional Adoption", value: "Growing", trend: "up" },
                { label: "Regulatory Clarity", value: "Improving", trend: "up" },
                { label: "Technology Maturity", value: "Emerging", trend: "up" },
            ],
            expertTips: [
                "Limit crypto exposure to 5-10% of investment portfolio",
                "Focus on established cryptocurrencies with utility",
                "Stay informed about regulatory developments",
                "Understand the technology fundamentals before investing",
            ],
        },
    ]


    const toggleSectorComparison = (sectorId: string) => {
        if (comparedSectors.includes(sectorId)) {
            setComparedSectors(comparedSectors.filter(id => id !== sectorId))
        } else {
            if (comparedSectors.length < 3) {
                setComparedSectors([...comparedSectors, sectorId])
            }
        }
    }

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

    const currentSector = selectedSector ? sectors.find(s => s.id === selectedSector) : null;

    const emergingTrends: EmergingTrend[] = [
        {
            icon: Sparkles,
            title: "Sustainability Focus",
            description: "ESG criteria driving renewable energy and responsible startup investments",
            impact: "High",
            color: "emerald",
        },
        {
            icon: Activity,
            title: "Digital Transformation",
            description: "AI, blockchain, and fintech reshaping startup and crypto opportunities",
            impact: "Very High",
            color: "blue",
        },
        {
            icon: DollarSign,
            title: "Global Economic Shifts",
            description: "Interest rates and inflation influencing asset allocation strategies",
            impact: "High",
            color: "amber",
        },
        {
            icon: Users,
            title: "Localized Growth",
            description: "Microbusinesses and regional markets gaining investor traction",
            impact: "Medium",
            color: "purple",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
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
                                    Overview 2025
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
                                    const Icon = sector.icon
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
                                                <LineCharts
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

            {/* Sector Overview Section */}
            <section className="py-24 px-4 bg-slate-50">
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
                                <Button
                                    variant={comparisonMode ? "default" : "outline"}
                                    className={`flex items-center gap-2 ${comparisonMode ? "bg-emerald-500 hover:bg-emerald-600" : ""
                                        }`}
                                    onClick={() => setComparisonMode(!comparisonMode)}
                                >
                                    <BarChart2 className="h-4 w-4" />
                                    {comparisonMode ? "Exit Comparison" : "Compare Sectors"}
                                </Button>
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
                                    const isSelected = selectedSector === sector.id
                                    const isCompared = comparedSectors.includes(sector.id)
                                    return (
                                        <div
                                            key={sector.id}
                                            className={`snap-center flex-shrink-0 w-[300px] md:w-[350px] ${comparisonMode ? "cursor-pointer" : ""
                                                }`}
                                            onClick={() => comparisonMode ? toggleSectorComparison(sector.id) : handleSectorClick(sector)}
                                        >
                                            <Card
                                                className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isSelected && !comparisonMode ? "ring-2 ring-emerald-500" : ""
                                                    } ${isCompared ? "ring-2 ring-purple-500" : ""
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
                                                        <LineCharts
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

            {/* Detailed Sector View as Dialog */}
            {currentSector && (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="flex flex-col max-w-4xl p-8 overflow-y-auto max-h-[80vh]">
                        <AnimatedSection>
                            <div className="mb-12">
                                <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Sector Details</Badge>
                                <h2 className="text-4xl font-bold text-slate-900">{currentSector.name}</h2>
                                <p className="text-xl text-slate-600 mt-2">{currentSector.description}</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-lg text-slate-600 mb-8">{currentSector.insights}</p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Key Metrics</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {currentSector.keyMetrics.map((metric, index) => (
                                                    <div key={index} className="bg-slate-50 p-4 rounded-xl">
                                                        <div className="text-sm text-slate-500">{metric.label}</div>
                                                        <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert Tips</h3>
                                            <ul className="space-y-2">
                                                {currentSector.expertTips.map((tip, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-2" />
                                                        <span className="text-slate-700">{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Performance Overview</h3>
                                        <LineCharts
                                            data={currentSector.data}
                                            labels={currentSector.yearlyData.map(d => d.year)}
                                            height={300}
                                            color={currentSector.color}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Sector Characteristics</h3>
                                        <RadarChart
                                            data={currentSector.radarData}
                                            labels={currentSector.radarLabels}
                                            color={currentSector.color}
                                            size={300}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white"
                                onClick={() => setIsDialogOpen(false)} // Close dialog
                            >
                                Back to Overview
                            </Button>
                        </AnimatedSection>
                    </DialogContent>
                </Dialog>
            )}

            {/* Emerging Trends */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Market Intelligence</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Emerging Trends 2025</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Stay ahead of market shifts with our analysis of key trends shaping the investment landscape
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {emergingTrends.map((trend, index) => {
                            const Icon = trend.icon
                            type ColorClassKeys = EmergingTrend['color'];
                            const colorClasses: Record<ColorClassKeys, string> = {
                                emerald: "from-emerald-500 to-teal-600 border-emerald-200",
                                blue: "from-blue-500 to-indigo-600 border-blue-200",
                                amber: "from-amber-500 to-orange-600 border-amber-200",
                                purple: "from-purple-500 to-pink-600 border-purple-200",
                            }

                            return (
                                <Card
                                    key={index}
                                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div
                                            className={`bg-gradient-to-br ${colorClasses[trend.color].split(" ")[0]} ${colorClasses[trend.color].split(" ")[1]} rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{trend.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{trend.description}</p>
                                        <Badge
                                            variant="outline"
                                            className={`${colorClasses[trend.color].split(" ")[2]} text-${trend.color}-700`}
                                        >
                                            {trend.impact} Impact
                                        </Badge>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic Approach */}
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
                                    <LineChart className="h-8 w-8 text-white" />
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

            {/* Partnership Benefits */}
            <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Partnership Benefits</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Why Partner with
                                <span className="block text-emerald-600">We Invest?</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Combine deep market knowledge with client-centric approach for tailored investment solutions
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                        <Target className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Strategic Guidance</h4>
                                        <p className="text-slate-600">
                                            Expert advice aligned with your goals, risk tolerance, and investment horizon
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                        <Star className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Curated Opportunities</h4>
                                        <p className="text-slate-600">
                                            Access to high-growth sectors and innovative ventures for institutional-level returns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                        <Shield className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Risk Management</h4>
                                        <p className="text-slate-600">
                                            Rigorous due diligence and diversification strategies to optimize returns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                        <BrainCircuit className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Deep Researcb</h4>
                                        <p className="text-slate-600">
                                            Comprehensive market analysis and data-driven insights to identify high-potential opportunities
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-emerald-100 rounded-lg p-2 group-hover:bg-emerald-200 transition-colors">
                                        <Users className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Long-Term Partnership</h4>
                                        <p className="text-slate-600">
                                            Commitment to fostering sustainable growth and lasting financial success
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-600 mb-2">
                                            <AnimatedCounter end={10} suffix="+" />
                                        </div>
                                        <div className="text-sm text-slate-600">Active Investments</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 mb-2">
                                            <AnimatedCounter end={3} prefix="$" suffix="Cr+" />
                                        </div>
                                        <div className="text-sm text-slate-600">Capital Deployed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600 mb-2">
                                            <AnimatedCounter end={89} suffix="%" />
                                        </div>
                                        <div className="text-sm text-slate-600">Success Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-teal-600 mb-2">
                                            <AnimatedCounter end={5} suffix="+" />
                                        </div>
                                        <div className="text-sm text-slate-600">Market Sectors</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                                    <h4 className="font-semibold text-slate-900 mb-3 text-center">Client Satisfaction</h4>
                                    <div className="flex justify-center">
                                        <ProgressRing percentage={95} color="#10b981" size={120} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

"use client"

import type React from "react"
import Image from "next/image" // Import Image component
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Eye } from "lucide-react"
import type { FundPool } from "@/data/fundPoolsData"

interface FundPoolCardProps {
    pool: FundPool
    isMobileView?: boolean
    index?: number
    addToRefs?: (el: HTMLDivElement | null) => void
    isAnimating?: boolean
}

const FundPoolCard: React.FC<FundPoolCardProps> = ({
    pool,
    isMobileView = false,
    index = 0,
    addToRefs,
    isAnimating = false,
}) => {
    return (
        <div ref={addToRefs} className="w-full max-w-5xl mx-auto px-4">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm md:h-[65vh] lg:h-[60vh]">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Image Section - Fixed Structure */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                        {/* Image with transition */}
                        <div className="relative w-full h-full">
                            <Image
                                src={pool.image.src || "/placeholder.svg"}
                                alt={pool.title}
                                fill // Use fill to make the image cover the parent div
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add appropriate sizes
                                className={`w-full h-full object-cover transition-all 
                                    duration-500 ease-out ${isAnimating ? "scale-110 opacity-60" : "scale-100 opacity-100"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Fund Number Badge - Fixed Position */}
                        <div className="absolute top-4 left-4">
                            <span
                                className={`px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg transition-all duration-300 ${isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-100"
                                    }`}
                                style={{ backgroundColor: pool.color }}
                            >
                                Fund #{pool.number}
                            </span>
                        </div>

                        {/* Category Badge - Fixed Position */}
                        <div className="absolute top-4 right-4">
                            <span
                                className={`px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300 delay-75 ${isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-100"
                                    }`}
                            >
                                {pool.category}
                            </span>
                        </div>

                        {/* Investment Range - Fixed Position */}
                        <div className="absolute bottom-10 left-4 right-4">
                            <div
                                className={`bg-black/70 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 delay-100 ${isAnimating ? "translate-y-2 opacity-70" : "translate-y-0 opacity-100"
                                    }`}
                            >
                                <div className="flex items-center justify-between text-white">
                                    <span className="text-sm font-medium">Investment Range</span>
                                    <span className="text-lg font-bold" style={{ color: pool.color }}>
                                        {pool.investmentRange}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Fixed Structure */}
                    <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                        <div className="flex-1 text-justify">
                            {/* Title - Content Transition */}
                            <h3
                                className={`text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 leading-tight transition-all duration-300 ${isAnimating ? "translate-y-2 opacity-60" : "translate-y-0 opacity-100"
                                    }`}
                            >
                                {pool.title}
                            </h3>

                            {/* Problem Section - Fixed Structure */}
                            <div className="mb-6">
                                <div className="flex items-start space-x-3 mb-3">
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 delay-75 ${isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-100"
                                            }`}
                                        style={{ backgroundColor: `${pool.color}20` }}
                                    >
                                        <Target className="w-5 h-5" style={{ color: pool.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                                        <p
                                            className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 delay-100 ${isAnimating ? "translate-y-1 opacity-60" : "translate-y-0 opacity-100"
                                                }`}
                                        >
                                            {pool.problem}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Focus Section - Fixed Structure */}
                            <div className="mb-6">
                                <div className="flex items-start space-x-3 mb-3">
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 delay-100 ${isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-100"
                                            }`}
                                        style={{ backgroundColor: `${pool.color}20` }}
                                    >
                                        <Eye className="w-5 h-5" style={{ color: pool.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                                        <p
                                            className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 delay-125 ${isAnimating ? "translate-y-1 opacity-60" : "translate-y-0 opacity-100"
                                                }`}
                                            dangerouslySetInnerHTML={{ __html: pool.focus }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Goal Section - Fixed Structure */}
                            <div className="mb-6">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 delay-125 ${isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-100"
                                            }`}
                                        style={{ backgroundColor: `${pool.color}20` }}
                                    >
                                        <Lightbulb className="w-5 h-5" style={{ color: pool.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">Goal</h4>
                                        <p
                                            className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 delay-150 ${isAnimating ? "translate-y-1 opacity-60" : "translate-y-0 opacity-100"
                                                }`}
                                        >
                                            {pool.goal}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default FundPoolCard

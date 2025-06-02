"use client"

import type React from "react"
import { useEffect, useRef, useCallback, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/card"
import { fundPoolsData } from "@/data/fundPoolsData"

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}


const NumberedBadge: React.FC<{ number: number; color: string }> = ({ number, color }) => (
    <div
        className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
        style={{ backgroundColor: color }}
    >
        {number}
    </div>
)

const FundPools: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsWrapperRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])
    const [currentCard, setCurrentCard] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Reset cardsRef when data changes
    useEffect(() => {
        cardsRef.current = []
        setIsLoading(false)
    }, [])

    const addToRefs = useCallback((el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el)
        }
    }, [])

    useEffect(() => {
        if (isLoading || isMobile) return

        const cards = cardsRef.current
        const container = containerRef.current
        const cardsWrapper = cardsWrapperRef.current

        if (!cards.length || !container || !cardsWrapper) return

        const ctx = gsap.context(() => {
            // Clean up existing animations
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            gsap.killTweensOf(cards)

            const heightUnit = window.innerHeight * 0.8
            const totalScrollHeight = heightUnit * (cards.length - 1)

            // Set initial states with better performance
            gsap.set(cards, {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                scale: 0.95,
                opacity: 0,
                zIndex: 0,
                transformOrigin: "center center",
                willChange: "transform, opacity",
            })

            // First card active
            gsap.set(cards[0], {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                zIndex: cards.length,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${totalScrollHeight}`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    onUpdate: (self) => {
                        const progress = self.progress
                        const newCurrentCard = Math.min(Math.floor(progress * cards.length), cards.length - 1)
                        setCurrentCard(newCurrentCard)
                    },
                },
                defaults: {
                    duration: 1,
                    ease: "power2.inOut",
                },
            })

            cards.forEach((card, index) => {
                if (index === 0) return

                const startTime = (index - 1) * 0.8

                // Animate previous card out
                tl.to(
                    cards[index - 1],
                    {
                        scale: 0.9,
                        opacity: 0.3,
                        zIndex: cards.length - index,
                        rotationX: 5,
                    },
                    startTime,
                )

                // Animate current card in
                tl.to(
                    card,
                    {
                        scale: 1,
                        opacity: 1,
                        zIndex: cards.length,
                        rotationX: 0,
                    },
                    startTime,
                )

                // Hide older cards for performance
                if (index > 1) {
                    tl.set(
                        cards.slice(0, index - 1),
                        {
                            opacity: 0,
                            zIndex: 0,
                            display: "none",
                        },
                        startTime,
                    )
                }
            })

            return () => {
                tl.kill()
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            }
        }, containerRef)

        return () => ctx.revert()
    }, [isLoading, isMobile])

    // Mobile fallback component
    const MobileView = () => (
        <div className="space-y-6">
            {fundPoolsData.map((pool, index) => (
                <Card key={pool.title} className="overflow-hidden">
                    <div className="relative h-48">
                        <Image
                            src={pool.image || "/placeholder.svg"}
                            alt={pool.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                            <NumberedBadge number={pool.number} color={pool.color} />
                            <h3 className="ml-3 text-xl font-bold">{pool.title}</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Badge variant="outline" className="mb-2">
                                    {pool.category}
                                </Badge>
                                <p className="text-sm text-muted-foreground">{pool.investmentRange}</p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-sm mb-1">Problem:</h4>
                                    <p className="text-sm">{pool.problem}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1">Focus:</h4>
                                    <p className="text-sm">{pool.focus}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1">Goal:</h4>
                                    <p className="text-sm">{pool.goal}</p>
                                </div>
                            </div>
                            <Button className="w-full mt-4">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )

    if (isLoading) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </section>
        )
    }

    return (
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text mb-6">
                        Fund Pools at <span className="text-brand_teal">We Invest</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">Diverse Sectors, Endless Opportunities</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                        <span>Scroll to explore</span>
                        <ChevronDown className="h-4 w-4 animate-bounce" />
                    </div>
                </div>

                {/* Cards */}
                {isMobile ? (
                    <MobileView />
                ) : (
                    <div ref={containerRef} className="relative">
                        {/* Progress indicator */}
                        {!isMobile && (
                            <div className="absolute top-[30%] -right-10 transform z-50 pr-4">
                                <div className="flex flex-col space-y-2">
                                    {fundPoolsData.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-8 rounded-full transition-all duration-300
                                                 ${index === currentCard ? "bg-brand_teal" : "bg-slate-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div ref={cardsWrapperRef} className="relative mx-auto h-[70vh] max-w-6xl">
                            {fundPoolsData.map((pool, index) => (
                                <div
                                    key={pool.title}
                                    ref={addToRefs}
                                    className="card-item"
                                    style={{
                                        willChange: "transform, opacity",
                                        backfaceVisibility: "hidden",
                                        perspective: "1000px",
                                    }}
                                >
                                    <Card className="h-[70vh] overflow-hidden shadow-2xl border-0">
                                        <div className="flex h-full items-center bg-white">
                                            {/* Image Section */}
                                            <div className="relative w-1/2 h-full">
                                                <Image
                                                    src={pool.image || "/placeholder.svg"}
                                                    alt={pool.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="50vw"
                                                    priority={index <= 1}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                            </div>

                                            {/* Content Section */}
                                            <div className="w-1/2 p-8 flex flex-col justify-between bg-white">
                                                <div>
                                                    <div className="flex items-center mb-10">
                                                        <NumberedBadge number={pool.number} color={pool.color} />
                                                        <div className="ml-4">
                                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{pool.title}</h3>
                                                            <div className="flex items-center space-x-3">
                                                                <Badge style={{ backgroundColor: pool.color }} className="text-white">
                                                                    {pool.category}
                                                                </Badge>
                                                                <span className="text-sm text-slate-500 text-justify">{pool.investmentRange}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                                                                <div className="w-1 h-4 bg-red-500 rounded mr-2" />
                                                                Problem
                                                            </h4>
                                                            <p className="text-slate-600 leading-relaxed text-justify">{pool.problem}</p>
                                                        </div>

                                                        <div>
                                                            <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                                                                <div className="w-1 h-4 bg-blue-500 rounded mr-2" />
                                                                Focus
                                                            </h4>
                                                            <p className="text-slate-600 leading-relaxed text-justify">{pool.focus}</p>
                                                        </div>

                                                        <div>
                                                            <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                                                                <div className="w-1 h-4 bg-green-500 rounded mr-2" />
                                                                Goal
                                                            </h4>
                                                            <p className="text-slate-600 leading-relaxed text-justify">{pool.goal}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FundPools

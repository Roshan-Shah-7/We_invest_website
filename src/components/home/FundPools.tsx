"use client"

"use client"

import type React from "react"
import { useEffect, useRef, useCallback, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"
import { fundPoolsData } from "@/data/fundPoolsData"
import FundPoolCard from "./FundPoolCard" // Import the new component

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

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
                display: "none", // Initially hide all cards
                transformOrigin: "center center",
                willChange: "transform, opacity",
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "center center",
                    end: `+=${heightUnit * cards.length}`, // Adjusted total scroll height for smoother end
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

            // Animate the first card in
            tl.fromTo(
                cards[0],
                {
                    scale: 0.95,
                    opacity: 0,
                    rotationX: 5,
                    display: "none",
                    zIndex: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotationX: 0,
                    display: "block",
                    zIndex: cards.length,
                },
                0, // Start at the very beginning of the timeline
            )

            cards.forEach((card, index) => {
                if (index === 0) return

                const startTime = index * 0.8 // Adjusted start time for each card's transition

                // Animate previous card out and hide it
                tl.to(
                    cards[index - 1],
                    {
                        scale: 0.9,
                        opacity: 0,
                        zIndex: 0,
                        rotationX: 5,
                        display: "none",
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
                        display: "block",
                    },
                    startTime,
                )
            })

            // Ensure the last card animates out smoothly at the very end
            tl.to(
                cards[cards.length - 1],
                {
                    scale: 0.9,
                    opacity: 1,
                    rotationX: 5,
                    display: "none",
                    zIndex: 0,
                },
                `+=${0.8}`, // Start 0.8 seconds after the last card's entry animation finishes
            )

            return () => {
                tl.kill()
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            }
        }, containerRef)

        return () => ctx.revert()
    }, [isLoading, isMobile])

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
                    <div className="space-y-6">
                        {fundPoolsData.map((pool) => (
                            <FundPoolCard key={pool.title} pool={pool} isMobileView={true} />
                        ))}
                    </div>
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
                                <FundPoolCard
                                    key={pool.title}
                                    pool={pool}
                                    isMobileView={false}
                                    index={index}
                                    addToRefs={addToRefs}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FundPools

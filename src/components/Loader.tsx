"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"
import W_Logo from "../../public/w_logo.png"

// Register GSAP Text plugin
gsap.registerPlugin(TextPlugin)

interface CandleData {
    open: number
    high: number
    low: number
    close: number
    volume: number
    bullish: boolean
}

const Loading = () => {
    const textRef = useRef<HTMLDivElement>(null)
    const chartRef = useRef<HTMLDivElement>(null)

    // Generate realistic candle data
    const generateCandleData = (): CandleData[] => {
        const candles: CandleData[] = []
        let basePrice = 103.5

        for (let i = 0; i < 12; i++) {
            const volatility = 0.5 + Math.random() * 1.5
            const direction = Math.random() > 0.5 ? 1 : -1

            const open = basePrice
            const close = open + direction * volatility * (0.5 + Math.random())
            const high = Math.max(open, close) + Math.random() * 0.3
            const low = Math.min(open, close) - Math.random() * 0.3
            const volume = 1000 + Math.random() * 5000

            candles.push({
                open,
                high,
                low,
                close,
                volume,
                bullish: close > open,
            })

            basePrice = close
        }

        return candles
    }

    const [candleData] = useState(generateCandleData())

    useEffect(() => {
        const messages = [
            "Initializing secure investment environment...",
            "Loading market data and analytics...",
            "Diversification reduces risk. Spread your investments wisely.",
            "Long-term investing often outperforms short-term trading.",
            "Connecting to global financial networks...",
            "Review your portfolio regularly to stay aligned with goals.",
            "Market volatility is normal; focus on long-term objectives.",
            "Preparing personalized investment insights...",
            "Consider tax implications when making investment decisions.",
            "Building your investment dashboard...",
        ]

        const tl = gsap.timeline({ repeat: -1 })
        let currentMessage = 0

        const typeWriter = () => {
            const message = messages[currentMessage]

            // Clear previous text
            tl.to(textRef.current, {
                duration: 0.1,
                text: "",
                ease: "none",
            })

            // Typing animation
            tl.to(textRef.current, {
                duration: message.length * 0.03,
                text: message,
                ease: "none",
            })

            // Pause before next message
            tl.to({}, { duration: 2.5 })

            // Move to next message
            tl.call(() => {
                currentMessage = (currentMessage + 1) % messages.length
            })
        }

        typeWriter()

        return () => {
            tl.kill()
        }
    }, [])

    // Chart animations
    useEffect(() => {
        if (!chartRef.current) return

        const candles = chartRef.current.querySelectorAll(".candle")
        const volumes = chartRef.current.querySelectorAll(".volume-bar")
        const priceLine = chartRef.current.querySelector(".price-line")

        // Animate candles appearing
        gsap.fromTo(
            candles,
            {
                scaleY: 0,
                opacity: 0,
            },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
            },
        )

        // Animate volume bars
        gsap.fromTo(
            volumes,
            {
                scaleY: 0,
                opacity: 0,
            },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.05,
                delay: 0.5,
                ease: "power2.out",
            },
        )

        // Animate price line
        if (priceLine) {
            gsap.fromTo(
                priceLine,
                {
                    strokeDasharray: "1000",
                    strokeDashoffset: "1000",
                },
                {
                    strokeDashoffset: "0",
                    duration: 2,
                    delay: 1,
                    ease: "power2.inOut",
                },
            )
        }

        // Continuous candle animations
        const candleAnimation = gsap.timeline({ repeat: -1, repeatDelay: 1 })

        candles.forEach((candle, index) => {
            candleAnimation.to(
                candle,
                {
                    scaleY: 0.9 + Math.random() * 0.2,
                    duration: 0.5 + Math.random() * 0.5,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: 1,
                },
                index * 0.1,
            )
        })

        return () => {
            candleAnimation.kill()
        }
    }, [])


    const maxPrice = Math.max(...candleData.map((c) => c.high))
    const minPrice = Math.min(...candleData.map((c) => c.low))
    const priceRange = maxPrice - minPrice

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300/15 rounded-full blur-lg animate-bounce delay-500"></div>
            </div>

            <div className="max-w-2xl w-full relative z-10">
                {/* Company Logo and Name */}
                <div className="text-center flex flex-col items-center gap-4">
                    <Image src={W_Logo} alt="We Invest Gloabel" width={70} height={50} />
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-wider">Wee Invest Global Pvt. Ltd.</h1>
                </div>

                {/* Trading Chart Container */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700/50 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-white font-semibold">WEINVEST</div>
                            <div className="text-emerald-400 text-sm">+2.34%</div>
                        </div>
                        <div className="text-right">
                            <div className="text-white font-bold text-lg">$104.76</div>
                            <div className="text-emerald-400 text-xs">+$2.42</div>
                        </div>
                    </div>

                    <div ref={chartRef} className="relative h-64 border-b border-l border-slate-600/50">
                        {/* Grid Lines */}
                        <div className="absolute inset-0">
                            {/* Horizontal lines */}
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="absolute w-full border-t border-slate-600/30"
                                    style={{ top: `${(i + 1) * 20}%` }}
                                />
                            ))}
                            {/* Vertical lines */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={`v-${i}`}
                                    className="absolute h-full border-l border-slate-600/30"
                                    style={{ left: `${(i + 1) * 16.66}%` }}
                                />
                            ))}
                        </div>

                        {/* Price Labels */}
                        <div className="absolute right-2 top-0 h-full flex flex-col justify-between py-2 text-xs text-slate-400">
                            {[...Array(6)].map((_, i) => {
                                const price = maxPrice - (i * priceRange) / 5
                                return (
                                    <div key={i} className="text-right">
                                        ${price.toFixed(2)}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Candles */}
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-4">
                            {candleData.map((candle, index) => {
                                const bodyHeight = (Math.abs(candle.close - candle.open) / priceRange) * 200
                                const bodyBottom = ((Math.min(candle.open, candle.close) - minPrice) / priceRange) * 200
                                const wickTop = ((candle.high - minPrice) / priceRange) * 200
                                const wickBottom = ((candle.low - minPrice) / priceRange) * 200

                                return (
                                    <div key={index} className="candle relative flex flex-col items-center" style={{ height: "200px" }}>
                                        {/* Wick */}
                                        <div
                                            className="absolute w-0.5 bg-slate-400"
                                            style={{
                                                bottom: `${wickBottom}px`,
                                                height: `${wickTop - wickBottom}px`,
                                            }}
                                        />

                                        {/* Body */}
                                        <div
                                            className={`absolute w-3 ${candle.bullish ? "bg-emerald-500 border border-emerald-400" : "bg-red-500 border border-red-400"
                                                } rounded-sm shadow-sm`}
                                            style={{
                                                bottom: `${bodyBottom}px`,
                                                height: `${Math.max(bodyHeight, 2)}px`,
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>

                        {/* Price Line Overlay */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <defs>
                                <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            <path
                                className="price-line"
                                d={candleData
                                    .map((candle, index) => {
                                        const x = (index / (candleData.length - 1)) * 100
                                        const y = 100 - ((candle.close - minPrice) / priceRange) * 80
                                        return `${index === 0 ? "M" : "L"} ${x}% ${y}%`
                                    })
                                    .join(" ")}
                                stroke="url(#priceGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Time Labels */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-slate-400 px-2 -mb-6">
                            {["9:30", "10:00", "10:30", "11:00", "11:30", "12:00"].map((time, index) => (
                                <span key={index}>{time}</span>
                            ))}
                        </div>
                    </div>

                    {/* Volume Chart */}
                    <div className="mt-8 h-16 relative">
                        <div className="text-xs text-slate-400 mb-2">Volume</div>
                        <div className="flex items-end justify-around h-12 px-4">
                            {candleData.map((candle, index) => {
                                const volumeHeight = (candle.volume / Math.max(...candleData.map((c) => c.volume))) * 100
                                return (
                                    <div
                                        key={index}
                                        className={`volume-bar w-2 ${candle.bullish ? "bg-emerald-500/60" : "bg-red-500/60"} rounded-t`}
                                        style={{ height: `${volumeHeight}%` }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Terminal/Console Style Message Container */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
                        </div>
                        <div className="text-slate-400 text-xs font-mono">investment-terminal</div>
                        <div className="text-slate-500 text-xs">●</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="text-emerald-400 font-mono text-sm mr-2">$</span>
                            <span className="text-slate-300 font-mono text-sm">weinvest --initialize</span>
                        </div>

                        <div className="h-12 flex items-center">
                            <span className="text-emerald-400 font-mono text-sm mr-2">&gt;</span>
                            <div className="flex items-center">
                                <div ref={textRef} className="text-slate-200 font-mono text-sm" />
                                <div className="ml-1 w-0.5 h-5 bg-emerald-400 animate-pulse" />
                            </div>
                        </div>

                        {/* Status Indicators */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-slate-400 text-xs">Market Data</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-200" />
                                <span className="text-slate-400 text-xs">Analytics Engine</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-400" />
                                <span className="text-slate-400 text-xs">Portfolio Sync</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-slate-500 rounded-full" />
                                <span className="text-slate-500 text-xs">Risk Assessment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading

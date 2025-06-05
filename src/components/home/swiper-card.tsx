"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SwiperCardProps {
    data: any[]
    CardComponent: React.ComponentType<any>
    className?: string
}

export default function SwiperCard({ data, CardComponent, className = "" }: SwiperCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const updateContent = (newIndex: number) => {
        if (isAnimating || newIndex === currentIndex) return

        setIsAnimating(true)

        // Start content fade out
        setTimeout(() => {
            setCurrentIndex(newIndex)
        }, 150) // Half of animation duration

        // Complete animation
        setTimeout(() => {
            setIsAnimating(false)
        }, 500) // Total animation duration
    }

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % data.length
        updateContent(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + data.length) % data.length
        updateContent(newIndex)
    }

    const goToSlide = (index: number) => {
        updateContent(index)
    }

    // Touch handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextSlide()
        } else if (isRightSwipe) {
            prevSlide()
        }
    }

    // Mouse handlers for desktop
    const [mouseStart, setMouseStart] = useState<number | null>(null)
    const [isDragging, setIsDragging] = useState(false)

    const onMouseDown = (e: React.MouseEvent) => {
        setMouseStart(e.clientX)
        setIsDragging(true)
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !mouseStart) return
        e.preventDefault()
    }

    const onMouseUp = (e: React.MouseEvent) => {
        if (!isDragging || !mouseStart) return

        const distance = mouseStart - e.clientX
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextSlide()
        } else if (isRightSwipe) {
            prevSlide()
        }

        setIsDragging(false)
        setMouseStart(null)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                prevSlide()
            } else if (e.key === "ArrowRight") {
                nextSlide()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [currentIndex])

    const currentData = data[currentIndex]

    return (
        <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
            {/* Main Card Container - Fixed Position and Structure */}
            <div className="relative flex items-center justify-center">
                {/* Card Wrapper - Fixed Structure */}
                <div
                    ref={cardRef}
                    className="w-full"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={() => {
                        setIsDragging(false)
                        setMouseStart(null)
                    }}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                >
                    {/* Render the card component with animation state */}
                    <CardComponent pool={currentData} isMobileView={true} index={currentIndex} isAnimating={isAnimating} />
                </div>

                {/* Navigation Arrows - Fixed Position */}
                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Content Transition Indicator */}
            <div className="flex justify-center mt-4">
                <div
                    className={`px-4 py-2 bg-white/90 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${isAnimating ? "scale-105 bg-gray-100" : "scale-100"
                        }`}
                >
                    <span className="text-sm font-medium text-gray-700">
                        {isAnimating ? "Updating content..." : `${currentIndex + 1} of ${data.length}`}
                    </span>
                </div>
            </div>

            {/* Dots Indicator - Fixed Structure */}
            <div className="flex justify-center space-x-2 mt-4">
                {data.map((pool, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "scale-125" : "hover:scale-110"
                            } ${isAnimating ? "opacity-50" : "opacity-100"}`}
                        style={{
                            backgroundColor: index === currentIndex ? pool.color : "#e2e8f0",
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar - Fixed Structure */}
            <div className="w-full bg-slate-200 rounded-full h-1 mt-4">
                <div
                    className="h-1 rounded-full transition-all duration-500 ease-out"
                    style={{
                        width: `${((currentIndex + 1) / data.length) * 100}%`,
                        backgroundColor: currentData.color,
                    }}
                />
            </div>
        </div>
    )
}

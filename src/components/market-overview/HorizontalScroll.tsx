"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface HorizontalScrollProps {
    children: React.ReactNode;
}

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

export default HorizontalScroll;

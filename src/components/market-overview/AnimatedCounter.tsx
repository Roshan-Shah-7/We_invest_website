"use client"

import { useState, useEffect } from "react"

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimalPlaces?: number;
}

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "", decimalPlaces }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number | null = null
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(progress * end)
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [end, duration])

    return (
        <span className="font-bold">
            {prefix}
            {decimalPlaces !== undefined ? count.toFixed(decimalPlaces) : count.toLocaleString()}
            {suffix}
        </span>
    )
}

export default AnimatedCounter;

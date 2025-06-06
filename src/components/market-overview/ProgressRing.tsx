"use client"

import { useState, useEffect } from "react"

interface ProgressRingProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    animate?: boolean;
}

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

export default ProgressRing;

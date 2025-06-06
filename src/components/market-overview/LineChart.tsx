"use client"

import { useState, useEffect, useRef } from "react"

interface LineChartProps {
    data: number[];
    labels: string[];
    height?: number;
    color?: string;
    showDots?: boolean;
    animate?: boolean;
}

const LineChart = ({ data, labels, height = 200, color = "#10b981", showDots = true, animate = true }: LineChartProps) => {
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

export default LineChart;

"use client"

interface RadarChartProps {
    data: number[];
    labels: string[];
    color?: string;
    size?: number;
}

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

export default RadarChart;

"use client"

interface ComparisonChartProps {
    data: { label: string; value: number; displayValue: string; color: string }[];
    maxValue: number;
    height?: number;
}

const ComparisonChart = ({ data, maxValue, height = 300 }: ComparisonChartProps) => {
    const barWidth = 100 / data.length

    return (
        <div className="w-full" style={{ height: `${height}px` }}>
            <div className="relative h-full">
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500">
                    <div>100%</div>
                    <div>75%</div>
                    <div>50%</div>
                    <div>25%</div>
                    <div>0%</div>
                </div>
                <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-slate-200 w-full h-0"></div>
                    ))}
                </div>
                <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end">
                    {data.map((item, i) => {
                        const percentage = (item.value / maxValue) * 100
                        return (
                            <div key={i} className="flex flex-col items-center justify-end h-full" style={{ width: `${barWidth}%` }}>
                                <div className="relative w-full px-1">
                                    <div
                                        className="w-full rounded-t-md transition-all duration-1000 ease-out"
                                        style={{
                                            height: `${percentage}%`,
                                            backgroundColor: item.color,
                                            maxHeight: "100%",
                                        }}
                                    ></div>
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold">
                                        {item.displayValue}
                                    </div>
                                </div>
                                <div className="mt-2 text-xs font-medium text-slate-700 text-center">{item.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ComparisonChart;

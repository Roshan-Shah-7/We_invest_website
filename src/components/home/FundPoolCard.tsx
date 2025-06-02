import type React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/card"
import { FundPool } from "@/data/fundPoolsData"

const NumberedBadge: React.FC<{ number: number; color: string }> = ({ number, color }) => (
    <div
        className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
        style={{ backgroundColor: color }}
    >
        {number}
    </div>
)

interface FundPoolCardProps {
    pool: FundPool;
    isMobileView: boolean;
    index?: number; // Optional for desktop view's priority image loading
    addToRefs?: (el: HTMLDivElement | null) => void; // Optional for desktop view's ref
}

const FundPoolCard: React.FC<FundPoolCardProps> = ({ pool, isMobileView, index, addToRefs }) => {
    if (isMobileView) {
        return (
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
        )
    } else {
        return (
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
                                priority={index !== undefined && index <= 1}
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
        )
    }
}

export default FundPoolCard;

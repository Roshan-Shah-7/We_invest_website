"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import AnimatedSection from "@/components/market-overview/AnimatedSection"
import LineChart from "@/components/market-overview/LineChart"
import RadarChart from "@/components/market-overview/RadarChart"
import { Sector } from "@/data/marketOverviewData"

interface SectorDetailDialogProps {
    currentSector: Sector | null;
    isDialogOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
}

const SectorDetailDialog = ({ currentSector, isDialogOpen, setIsDialogOpen }: SectorDetailDialogProps) => {
    if (!currentSector) return null;

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="flex flex-col max-w-4xl p-8 overflow-y-auto max-h-[80vh]">
                <AnimatedSection>
                    <div className="mb-12">
                        <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Sector Details</Badge>
                        <h2 className="text-4xl font-bold text-slate-900">{currentSector.name}</h2>
                        <p className="text-xl text-slate-600 mt-2">{currentSector.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg text-slate-600 mb-8">{currentSector.insights}</p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">Key Metrics</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {currentSector.keyMetrics.map((metric, index) => (
                                            <div key={index} className="bg-slate-50 p-4 rounded-xl">
                                                <div className="text-sm text-slate-500">{metric.label}</div>
                                                <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert Tips</h3>
                                    <ul className="space-y-2">
                                        {currentSector.expertTips.map((tip, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 mr-2" />
                                                <span className="text-slate-700">{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Performance Overview</h3>
                                <LineChart
                                    data={currentSector.data}
                                    labels={currentSector.yearlyData.map(d => d.year)}
                                    height={300}
                                    color={currentSector.color}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Sector Characteristics</h3>
                                <RadarChart
                                    data={currentSector.radarData}
                                    labels={currentSector.radarLabels}
                                    color={currentSector.color}
                                    size={300}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white"
                        onClick={() => setIsDialogOpen(false)}
                    >
                        Back to Overview
                    </Button>
                </AnimatedSection>
            </DialogContent>
        </Dialog>
    )
}

export default SectorDetailDialog;

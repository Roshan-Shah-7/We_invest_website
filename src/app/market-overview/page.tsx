"use client"

import { useState } from "react"
import HeroSection from "@/components/market-overview/HeroSection"
import SectorOverviewSection from "@/components/market-overview/SectorOverviewSection"
import SectorDetailDialog from "@/components/market-overview/SectorDetailDialog"
import StrategicApproachSection from "@/components/market-overview/StrategicApproachSection"
import PartnershipBenefitsSection from "@/components/market-overview/PartnershipBenefitsSection"
import { sectors, Sector } from "@/data/marketOverviewData"

export default function MarketOverviewPage() {
    const [selectedSector, setSelectedSector] = useState<Sector | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [comparedSectors, setComparedSectors] = useState<string[]>([])

    const handleSectorClick = (sector: Sector) => {
        setSelectedSector(sector)
        setIsDialogOpen(true)
    }

    const toggleSectorComparison = (sectorId: string) => {
        if (comparedSectors.includes(sectorId)) {
            setComparedSectors(comparedSectors.filter(id => id !== sectorId))
        } else {
            if (comparedSectors.length < 3) {
                setComparedSectors([...comparedSectors, sectorId])
            }
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <HeroSection sectors={sectors} handleSectorClick={handleSectorClick} />
            <SectorOverviewSection
                sectors={sectors}
                handleSectorClick={handleSectorClick}
                comparedSectors={comparedSectors}
                toggleSectorComparison={toggleSectorComparison}
            />
            <SectorDetailDialog
                currentSector={selectedSector}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
            <StrategicApproachSection />
            <PartnershipBenefitsSection />
        </div>
    )
}

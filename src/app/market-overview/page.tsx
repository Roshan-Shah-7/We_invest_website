"use client"

import { useState, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/market-overview/HeroSection"
import SectorOverviewSection from "@/components/market-overview/SectorOverviewSection"
import SectorDetailDialog from "@/components/market-overview/SectorDetailDialog"
import StrategicApproachSection from "@/components/market-overview/StrategicApproachSection"
import PartnershipBenefitsSection from "@/components/market-overview/PartnershipBenefitsSection"
import { sectors, Sector } from "@/data/marketOverviewData"

gsap.registerPlugin(ScrollTrigger)

export default function MarketOverviewPage() {
    const [selectedSector, setSelectedSector] = useState<Sector | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [comparedSectors, setComparedSectors] = useState<string[]>([])

    const comp = useRef(null) // create a ref for the root div

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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate sections
            gsap.utils.toArray(".market-section").forEach((section: any) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom top",
                        toggleActions: "play none none none",
                        // markers: true, // For debugging
                    },
                })

                // Animate inner elements (e.g., direct children of sections)
                gsap.utils.toArray(section.children).forEach((child: any, index: number) => {
                    gsap.from(child, {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                        delay: index * 0.1, // Stagger effect
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: child,
                            start: "top 90%",
                            toggleActions: "play none none none",
                            // markers: true, // For debugging
                        },
                    })
                })
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={comp} className="min-h-screen bg-white">
            <HeroSection sectors={sectors} handleSectorClick={handleSectorClick} className="market-section" />
            <SectorOverviewSection
                sectors={sectors}
                handleSectorClick={handleSectorClick}
                comparedSectors={comparedSectors}
                toggleSectorComparison={toggleSectorComparison}
                className="market-section"
            />
            <SectorDetailDialog
                currentSector={selectedSector}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
            <StrategicApproachSection className="market-section" />
            <PartnershipBenefitsSection className="market-section" />
        </div>
    )
}

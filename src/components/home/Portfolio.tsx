"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function Portfolio() {
    const headerRef = useRef<HTMLDivElement>(null)

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="floating-element absolute top-20 left-[10%] w-4 h-4 bg-[#00695C]/20 rounded-full" />
                <div className="floating-element absolute top-40 right-[15%] w-6 h-6 bg-[#00695C]/15 rounded-full" />
                <div className="floating-element absolute bottom-32 left-[20%] w-3 h-3 bg-[#00695C]/25 rounded-full" />
                <div className="floating-element absolute bottom-20 right-[25%] w-5 h-5 bg-[#00695C]/20 rounded-full" />
                <div className="floating-element absolute top-60 left-[70%] w-2 h-2 bg-[#00695C]/30 rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#00695C]/10 rounded-full">
                        <Zap className="w-4 h-4 text-[#00695C]" />
                        <span className="text-[#00695C] font-semibold text-sm uppercase tracking-wide">Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Creative | Digital | Innovative <span className="text-[#00695C]">Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our projects are currently under construction. Please check back later for updates on our innovative solutions!
                    </p>
                </div>

                {/* Polite message instead of cards */}
                <div className="text-center text-gray-700 text-lg">
                    <p>We are currently working on exciting new projects to showcase our creative solutions.</p>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </section>
    )
}

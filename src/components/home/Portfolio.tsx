"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import { Project, projects } from "@/data/portfolioProjects"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"

function ProjectCard({ project, index, className = "" }: { project: Project; index: number; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // Removed useEffect with GSAP animations

    const cardHeights = {
        large: "h-[500px]",
        medium: "h-[400px]",
        small: "h-[320px]",
        default: "h-[400px]",
    }

    const imageHeights = {
        large: "h-80",
        medium: "h-56",
        small: "h-40",
        default: "h-56",
    }

    const getCardHeight = () => cardHeights[project.size || "default"]
    const getImageHeight = () => imageHeights[project.size || "default"]

    return (
        <div ref={cardRef} className={`group ${className}`}>
            <Card
                className={`overflow-hidden ${getCardHeight()} bg-white border shadow-lg hover:shadow-2xl transition-shadow duration-500 relative`}
            >
                {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                        <div className="bg-[#00695C] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                        </div>
                    </div>
                )}

                <div ref={imageRef} className="relative overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={700}
                        height={500}
                        className={`w-full ${getImageHeight()} object-cover`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00695C]/90 via-[#00695C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-[#00695C] px-3 py-1 rounded-full text-sm font-semibold">
                            {project.category}
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 transition-opacity duration-500">
                        <div className="flex gap-3">
                            <Button size="sm" className="bg-white text-[#00695C] hover:bg-gray-100 flex-1" asChild>
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <CardContent ref={contentRef} className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                        <h3
                            className={`font-bold text-gray-900 group-hover:text-[#00695C] transition-colors duration-300 ${project.size === "large" ? "text-2xl" : project.size === "medium" ? "text-xl" : "text-lg"
                                }`}
                        >
                            {project.title}
                        </h3>
                        <span className="text-[#00695C] text-sm font-semibold">{project.year}</span>
                    </div>

                    <p
                        className={`text-gray-600 leading-relaxed flex-1 ${project.size === "small" ? "text-sm line-clamp-2" : "line-clamp-3"
                            }`}
                    >
                        {project.description}
                    </p>

                    <div className="mt-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.slice(0, project.size === "small" ? 2 : 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-[#00695C]/10 hover:text-[#00695C] transition-colors duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > (project.size === "small" ? 2 : 4) && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                                    +{project.technologies.length - (project.size === "small" ? 2 : 4)}
                                </span>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default function Portfolio() {
    const headerRef = useRef<HTMLDivElement>(null)
    const masonryRef = useRef<HTMLDivElement>(null)

    // Removed useEffect with GSAP animations

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
                        Creative <span className="text-[#00695C]">Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Innovative projects that push boundaries and deliver exceptional user experiences across diverse industries.
                    </p>
                </div>

                {/* Unique Masonry-style Layout */}
                <div ref={masonryRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
                    {/* Large featured project - spans full width on mobile, 8 cols on desktop */}
                    <ProjectCard project={projects[0]} index={0} className="md:col-span-8" />

                    {/* Two small projects stacked - spans 4 cols on desktop */}
                    <div className="md:col-span-4 space-y-6">
                        <ProjectCard project={projects[1]} index={1} />
                        <ProjectCard project={projects[3]} index={3} />
                    </div>

                    {/* Medium project - spans 5 cols */}
                    <ProjectCard project={projects[2]} index={2} className="md:col-span-5" />

                    {/* Medium project - spans 7 cols */}
                    <ProjectCard project={projects[4]} index={4} className="md:col-span-7" />

                    {/* Small project - spans 6 cols, offset */}
                    <ProjectCard project={projects[5]} index={5} className="md:col-span-6 md:col-start-4" />
                </div>
            </div>
        </section>
    )
}

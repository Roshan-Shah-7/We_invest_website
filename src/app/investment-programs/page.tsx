'use client'

import type { NextPage } from "next"
import { useState } from "react"
import { investmentPrograms, whyChooseUsPoints, Program } from "@/data/investmentProgramsData"
import { CheckCircle, TrendingUp, Shield, Target, Zap, ArrowRight, X } from "lucide-react"
import MoneyGrow from "@/assets/investment/bg.jpg"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

const Programs: NextPage = () => {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleCardClick = (program: Program) => {
        setSelectedProgram(program)
        setIsDialogOpen(true)
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="relative bg-white border-b border-gray-200 py-20 sm:py-28 mt-10 h-[50vh]"
                style={{
                    backgroundImage: `url(${MoneyGrow.src})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
                }}>
                <div className="container mx-auto p-6 text-center relative drop-shadow-md bg-white/80 w-fit rounded-xl">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-dark-green rounded-2xl mb-8">
                        <TrendingUp className="w-8 h-8 text-brand_green" />
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-brand_teal leading-tight mb-6">Investment Programmes</h1>
                    <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                        Empowering Your Financial Future with Strategic Investment Solutions
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container mx-auto px-6 py-16">
                {/* Introductory Text */}
                <section className="mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-12 h-12 bg-brand_teal rounded-xl flex items-center justify-center">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                At We Invest, we offer a suite of innovative investment programmes designed to empower entrepreneurs and
                                investors to achieve their financial goals. Our programmes provide flexible, high-potential
                                opportunities tailored to diverse needs, from early-stage startup funding to stable, long-term
                                wealth-building strategies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Investment Programmes Section */}
                <section className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Investment Programmes</h2>
                        <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our comprehensive range of investment opportunities designed for every stage of your financial
                            journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {investmentPrograms.map((program, index) => (
                            <div
                                key={program.id}
                                onClick={() => handleCardClick(program)}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                {/* Image Section */}
                                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
                                    <Image
                                        src={program.imageUrl}
                                        alt={`Image for ${program.title}`}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="top"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Program Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-brand-dark-green rounded-xl flex items-center justify-center mr-4 group-hover:bg-brand-green transition-colors duration-300">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-brand_teal uppercase tracking-wide">
                                                Programme {index + 1}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1">{program.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Short Description */}
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-gray-700 leading-relaxed line-clamp-3">{program.overview}</p>
                                    </div>
                                </div>

                                {/* Learn More Indicator */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <span className="inline-flex items-center text-brand-dark-green font-semibold">
                                        Click to Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investment Program Detail Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[800px] p-6 max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold text-gray-900">
                                {selectedProgram?.title}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600 mt-2">
                                Detailed information about this investment program.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 space-y-6">
                            {selectedProgram && (
                                <>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            <div className="w-3 h-3 bg-brand_teal rounded-full mr-2"></div>
                                            Overview
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">{selectedProgram.overview}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            <div className="w-3 h-3 bg-brand-green rounded-full mr-2"></div>
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedProgram.keyFeatures.map((feature, i) => (
                                                <li key={`detail-feature-${i}`} className="flex items-start text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-base leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            <div className="w-3 h-3 bg-brand-dark-green rounded-full mr-2"></div>
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedProgram.benefits.map((benefit, i) => (
                                                <li key={`detail-benefit-${i}`} className="flex items-start text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-base leading-relaxed">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Why Choose Us Section */}
                <section className="bg-brand_teal/100 rounded-2xl p-12 text-white">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-brand_teal" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Investment Programmes?</h2>
                        <div className="w-20 h-1 bg-brand_teal mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Our commitment to excellence and proven track record make us the ideal partner for your investment
                            journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyChooseUsPoints.map((point, index) => (
                            <div
                                key={`why-${index}`}
                                className="flex items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-8 h-8 bg-brand_teal rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <p className="text-gray-200 leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-12 pt-8 border-t border-white/10">
                        <h3 className="text-xl font-semibold mb-4">Ready to Start Your Investment Journey?</h3>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                            Contact our investment specialists to discuss which programme aligns best with your financial goals.
                        </p>
                        <button className="inline-flex items-center bg-brand_teal hover:bg-brand-green text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300">
                            Get Started Today
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Programs

'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { investmentPrograms, Program } from "@/data/investmentProgramsData";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const OurInvestmentProgramsSection = () => {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (isDialogOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isDialogOpen]);

    const handleCardClick = (program: Program) => {
        setSelectedProgram(program);
        setIsDialogOpen(true);
    };

    return (
        <section className="mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Investment Programmes</h2>
                <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our comprehensive range of investment opportunities designed for every stage of your financial
                    journey.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                {investmentPrograms.map((program, index) => (
                    <div
                        key={program.id}
                        onClick={() => handleCardClick(program)}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200
                        hover:shadow-lg transition-all duration-300 group cursor-pointer w-full"
                    >
                        {/* Image Section */}
                        <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
                            <Image
                                src={program.imageUrl}
                                alt={`Image for ${program.title}`}
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Program Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-brand-dark-green rounded-xl flex items-center justify-center
                                mr-4 group-hover:bg-brand-green transition-colors duration-300">
                                    <Zap className="w-5 h-5 text-brand_teal" />
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-brand_teal uppercase tracking-wide">
                                        Programme {index + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">{program.title}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Indicator */}
                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <span className="inline-flex items-center text-brand-dark-green font-semibold">
                                Click to Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

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
                                                <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5 text-brand_teal" />
                                                <span className="text-base leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                        <div className="w-3 h-3 bg-brand-dark-green rounded-full mr-2"></div>
                                        Roadmap
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProgram.benefits.map((benefit, i) => (
                                            <li key={`detail-benefit-${i}`} className="flex items-start text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5 text-brand_teal" />
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
        </section>
    );
};

export default OurInvestmentProgramsSection;

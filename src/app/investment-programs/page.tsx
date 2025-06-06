'use client'

import type { NextPage } from "next";
import InvestmentProgramsHeroSection from "@/components/investment-program/InvestmentProgramsHeroSection";
import InvestmentProgramsIntroSection from "@/components/investment-program/InvestmentProgramsIntroSection";
import OurInvestmentProgramsSection from "@/components/investment-program/OurInvestmentProgramsSection";
import WhyChooseUsSection from "@/components/investment-program/WhyChooseUsSection";

const Programs: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <InvestmentProgramsHeroSection />
            <main className="container mx-auto px-6 py-16">
                <InvestmentProgramsIntroSection />
                <OurInvestmentProgramsSection />
                <WhyChooseUsSection />
            </main>
        </div>
    );
};

export default Programs;

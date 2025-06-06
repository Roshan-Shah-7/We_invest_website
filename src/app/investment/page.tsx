"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import InvestmentHeroSection from "@/components/investment/InvestmentHeroSection";
import WhatIsInvestmentSection from "@/components/investment/WhatIsInvestmentSection";
import CompoundingExampleSection from "@/components/investment/CompoundingExampleSection";
import WhyInvestSection from "@/components/investment/WhyInvestSection";
import RiskInvestmentTypesSection from "@/components/investment/RiskInvestmentTypesSection";
import InvestmentServicesSection from "@/components/investment/InvestmentServicesSection";
import DueDiligenceProcessSection from "@/components/investment/DueDiligenceProcessSection";
import InvestmentCriteriaSection from "@/components/investment/InvestmentCriteriaSection";
import InvestmentCtaSection from "@/components/investment/InvestmentCtaSection";

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentPage() {
    const main = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

        }, main);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={main} className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <InvestmentHeroSection className="investment-hero-section" />
            <WhatIsInvestmentSection className="what-is-investment-section" />
            <CompoundingExampleSection className="compounding-example-section" />
            <WhyInvestSection className="why-invest-section" />
            <RiskInvestmentTypesSection className="risk-investment-types-section" />
            <InvestmentServicesSection className="investment-services-section" />
            <DueDiligenceProcessSection className="due-diligence-process-section" />
            <InvestmentCriteriaSection className="investment-criteria-section" />
            <InvestmentCtaSection className="investment-cta-section" />
        </div>
    );
}

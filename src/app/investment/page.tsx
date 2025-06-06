import InvestmentHeroSection from "@/components/investment/InvestmentHeroSection";
import WhatIsInvestmentSection from "@/components/investment/WhatIsInvestmentSection";
import CompoundingExampleSection from "@/components/investment/CompoundingExampleSection";
import WhyInvestSection from "@/components/investment/WhyInvestSection";
import RiskInvestmentTypesSection from "@/components/investment/RiskInvestmentTypesSection";
import InvestmentServicesSection from "@/components/investment/InvestmentServicesSection";
import DueDiligenceProcessSection from "@/components/investment/DueDiligenceProcessSection";
import InvestmentCriteriaSection from "@/components/investment/InvestmentCriteriaSection";
import InvestmentCtaSection from "@/components/investment/InvestmentCtaSection";

export default function InvestmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <InvestmentHeroSection />
            <WhatIsInvestmentSection />
            <CompoundingExampleSection />
            <WhyInvestSection />
            <RiskInvestmentTypesSection />
            <InvestmentServicesSection />
            <DueDiligenceProcessSection />
            <InvestmentCriteriaSection />
            <InvestmentCtaSection />
        </div>
    );
}

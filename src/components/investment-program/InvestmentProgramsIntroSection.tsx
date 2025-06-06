import { Target } from "lucide-react";

interface InvestmentProgramsIntroSectionProps {
    className?: string;
}

const InvestmentProgramsIntroSection = ({ className }: InvestmentProgramsIntroSectionProps) => {
    return (
        <section className={`mb-20 ${className}`}>
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
    );
};

export default InvestmentProgramsIntroSection;

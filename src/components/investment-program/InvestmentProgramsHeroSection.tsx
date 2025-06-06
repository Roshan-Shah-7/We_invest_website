import Image from "next/image";
import MoneyGrow from "@/assets/investment/bg.jpg";
import { TrendingUp } from "lucide-react";

interface InvestmentProgramsHeroSectionProps {
    className?: string;
}

const InvestmentProgramsHeroSection = ({ className }: InvestmentProgramsHeroSectionProps) => {
    return (
        <header className={`relative bg-white border-b border-gray-200 py-20 sm:py-28 mt-10 h-[60vh] overflow-hidden ${className}`}>
            <Image
                src={MoneyGrow}
                alt="Money growing"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center'}}
                priority
                className="bg-fixed"
            />
            <div className="container mx-auto p-6 text-center relative z-10 drop-shadow-md bg-white/80 w-fit rounded-xl">
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
    );
};

export default InvestmentProgramsHeroSection;

import { Badge } from "@/components/ui/Badge"
import Image from "next/image"
import InvestmentHero from "@/assets/investment/investment.svg"

const InvestmentHeroSection = () => {
    return (
        <section className="mt-[4rem] py-10 flex items-end justify-center">
            <div className="container text-center max-w-4xl">
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Understanding Investment</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                    We Invest: Your Gateway to <span className="text-emerald-600">Financial Growth</span>
                </h1>
                <blockquote className="text-xl md:text-2xl text-slate-600 italic mb-8 border-l-4 border-emerald-600 pl-6">
                    "Investing puts money to work. The only reason to save money is to invest it."
                    <footer className="text-lg mt-2 not-italic">— Grant Cardone</footer>
                </blockquote>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Smart investing is the key to unlocking financial potential. Whether you're an entrepreneur seeking capital
                    or an individual building wealth, we're here to guide your journey.
                </p>
            </div>
            <Image src={InvestmentHero} alt="We Invest Global | What is Investment?" className="hidden lg:block lg:w-[30rem]" />
        </section>
    )
}

export default InvestmentHeroSection;

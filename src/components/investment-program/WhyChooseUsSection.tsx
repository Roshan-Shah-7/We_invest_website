import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { whyChooseUsPoints } from "@/data/investmentProgramsData";

const WhyChooseUsSection = () => {
    return (
        <section className="bg-brand_teal/100 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                    <Shield className="w-8 h-8 text-white" />
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
                <Link href={"/contact"}>
                    <button className="inline-flex items-center bg-white hover:bg-transparent text-black hover:text-white hover:border hover:border-white font-semibold px-8 py-3
                         rounded-xl transition-colors duration-500">
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;

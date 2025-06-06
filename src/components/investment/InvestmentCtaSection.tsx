import { Button } from "@/components/ui/button";
import Link from 'next/link';

const InvestmentCtaSection = () => {
    return (
        <section className="py-20 px-4 bg-brand_teal">
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Investment Journey?</h2>
                <p className="text-xl text-emerald-100 mb-8">
                    Join thousands of investors who trust We Invest to grow their wealth and achieve their financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href='/contact'>
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                            Schedule Consultation
                        </Button>
                    </Link>
                    {/* <Button
                        size="lg"
                        variant="outline"
                        className="border-white hover:bg-white hover:text-emerald-600"
                    >
                        Download Investment Guide
                    </Button> */}
                </div>
            </div>
        </section>
    );
};

export default InvestmentCtaSection;

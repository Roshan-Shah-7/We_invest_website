import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { colors } from "@/data/aboutData"

const ContactCtaSection = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: colors.brand_teal }}>
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C853]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00695C]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Vision?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Connect with us to explore how We Invest can support your entrepreneurial journey. Let's build the future
                        together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Email</div>
                                    <div className="text-white font-medium">investwe3@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Phone</div>
                                    <div className="text-white font-medium">+977-9828240210</div>
                                    <div className="text-white font-medium">+977-9851408600</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Address</div>
                                    <div className="text-white font-medium">Bishalnagar, Kathmandu 44600, Nepal</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Card className="border-0 shadow-2xl bg-white">
                            <CardContent className="p-8">
                                <h4 className="text-2xl font-bold text-[#333333] mb-6 text-center">Start Your Journey</h4>
                                <p className="text-[#666666] mb-8 text-center">
                                    Ready to take your venture to the next level? We'd love to hear from you.
                                </p>
                                <div className="space-y-4">
                                    <Link href={'/contact'}>
                                        <Button
                                            size="lg"
                                            className="w-full bg-[#00C853] hover:bg-[#00B248] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-white/90 text-lg font-medium">
                        Join us at We Invest, where your vision meets our expertise.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactCtaSection;

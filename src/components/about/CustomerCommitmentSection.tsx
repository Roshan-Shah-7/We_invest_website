import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Shield, Headphones, Award, CheckCircle, Clock, Target, Users } from "lucide-react"
import { colors } from "@/data/aboutData"

const CustomerCommitmentSection = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Our Promise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Our Commitment to Excellence</h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Your success is our success. We're committed to providing exceptional service and support throughout your
                        entrepreneurial journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#00695C] rounded-xl p-3">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Trust & Transparency</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#666666] mb-6 leading-relaxed text-sm">
                                    Complete transparency in all dealings, ensuring full visibility into our investment process and
                                    decision-making framework.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#00C853]" />
                                        <span className="text-[#666666]">Regular progress updates</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#00C853]" />
                                        <span className="text-[#666666]">Open communication channels</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="group">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#00BCD4] rounded-xl p-3">
                                        <Headphones className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Dedicated Support</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#666666] mb-6 leading-relaxed text-sm">
                                    Our expert team is always available to provide guidance, mentorship, and strategic advice when you need it most.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="h-5 w-5 text-[#00695C]" />
                                        <span className="text-[#666666]">Responsive support</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="h-5 w-5 text-[#00695C]" />
                                        <span className="text-[#666666]">Expert mentorship program</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="group">
                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#00C853] rounded-xl p-3">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">Commitment to Progress</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#666666] mb-6 leading-relaxed text-sm">
                                    Confident in our approach, we're committed to helping you achieve measurable progress within the first 12 months of our partnership.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Target className="h-5 w-5 text-[#00695C]" />
                                        <span className="text-[#666666]">Performance milestones</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#00C853]" />
                                        <span className="text-[#666666]">Regular progress reviews</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerCommitmentSection;

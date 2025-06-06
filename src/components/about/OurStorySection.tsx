import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { colors, aboutImages } from "@/data/aboutData"

const OurStorySection = () => {
    return (
        <section className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Our Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">The Story Behind We Invest</h2>
                    <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Founded on a bold vision to create an investment ecosystem that empowers founders to build meaningful,
                        enduring businesses.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/20 to-[#00BCD4]/20 rounded-3xl transform -rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                                <Image
                                    src={aboutImages.ourStory}
                                    alt="Company founding story"
                                    className="w-full h-80 object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-[#333333] mb-6">The Beginning</h3>
                        <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                            We Invest was founded on a bold vision: to create an investment ecosystem that empowers founders to
                            build meaningful, enduring businesses. This vision came to life through the leadership of{" "}
                            <span className="font-semibold text-[#00695C]">Laxmi Dangol</span>, whose expertise in forging strong
                            relationships and driving operational excellence laid the foundation for our success.
                        </p>
                        <p className="text-lg text-[#666666] leading-relaxed">
                            She assembled a team of passionate professionals, each contributing unique strengths to create a
                            powerhouse dedicated to transforming ideas into industry leaders.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-brand_teal rounded-3xl"></div>
                    <div className="relative bg-brand_teal rounded-3xl p-12 text-white text-center">
                        <h3 className="text-3xl font-bold mb-6">Today & Tomorrow</h3>
                        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Today, We Invest stands as a platform for founders who are ready to dream big and make it happen. Guided
                            by innovation, collaboration, and a commitment to excellence, we are shaping the future of investment
                            and creating lasting value for all stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStorySection;

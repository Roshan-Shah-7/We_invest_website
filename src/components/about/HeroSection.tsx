import Image from "next/image"
import { colors, aboutImages } from "@/data/aboutData"

const HeroSection = () => {
    return (
        <section className="relative py-32 px-4 overflow-hidden"
            style={{
                backgroundImage: `url(${aboutImages.building.src})`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#004D40]/60 via-[#00695C]/30 to-[#00897B]/20"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-brand_teal/10 backdrop-blur-sm border border-white/30 rounded-full mb-8">
                        <span className="text-white text-sm font-medium">About We Invest</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-3">
                        Where Innovation
                        <span className="block text-white mt-2">
                            Fuels Growth
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 bg-brand_teal/10 backdrop-blur-sm border border-white/30 rounded-full p-4 py-6">
                        We are more than an investment firm; we are a dynamic team of visionaries committed to empowering the next
                        generation of entrepreneurs through strategic partnerships and innovative solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;

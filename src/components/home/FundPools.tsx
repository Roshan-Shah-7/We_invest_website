import SwiperCard from "@/components/home/swiper-card"
import FundPoolCard from "@/components/home/FundPoolCard"
import { fundPoolsData } from "@/data/fundPoolsData"

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 w-full">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Fund Pools at <span className="text-teal-600">We Invest</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Diverse Sectors, Endless Opportunities</p>
                </div>

                <SwiperCard data={fundPoolsData} CardComponent={FundPoolCard} className="mt-8" />
            </div>
        </main>
    )
}

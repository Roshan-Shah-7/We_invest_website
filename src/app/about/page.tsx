import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Users,
    Heart,
    Lightbulb,
    Shield,
    Globe,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    CheckCircle,
    Award,
    TrendingUp,
    BarChart3,
    Building2,
    Target,
    Zap,
    PieChart,
    LineChart,
    DollarSign,
    UserCheck,
    Clock,
    Headphones,
} from "lucide-react"
import Mission from "@/assets/about/mission.jpg"
import OurStory from "@/assets/about/our story.jpg"

// Color definitions
const colors = {
    brand_green: '#00C853',
    brand_teal: '#00695C',
    soft_white: '#F5F7FA',
    dark_gray: '#333333',
    warm_gray: '#E0E0E0',
    bright_cyan: '#00BCD4',
    golden_yellow: '#FFD54F',
}

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden" style={{ backgroundColor: colors.brand_teal }}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#004D40] via-[#00695C] to-[#00897B]"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-[#00C853]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#00695C]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8">
                            <span className="text-white text-sm font-medium">About We Invest</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Where Innovation
                            <span className="block text-white mt-2">
                                Fuels Growth
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
                            We are more than an investment firm; we are a dynamic team of visionaries committed to empowering the next
                            generation of entrepreneurs through strategic partnerships and innovative solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-[#00695C] hover:bg-[#F5F7FA] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Explore Partnership <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/30 hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                            >
                                Watch Our Story
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-[#00695C] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <UserCheck className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Strategic Partnership</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        We don&apos;t just fund businesses—we partner with founders, working side by side to build resilient
                                        enterprises that deliver lasting impact.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-[#00C853] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Target className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Innovation Focus</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        Our client-centric approach combines deep market expertise with a passion for innovation and
                                        long-term success across diverse industries.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-[#00BCD4] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <PieChart className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">Diverse Portfolio</h3>
                                    <p className="text-[#666666] leading-relaxed">
                                        Investment funds spanning technology, healthcare, renewable energy, and the arts to fuel your
                                        entrepreneurial journey.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                                <span className="text-[#00C853] text-sm font-medium">Our Mission</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-8 leading-tight">
                                Transforming Ideas Into
                                <span className="block text-[#00695C]">Industry Leaders</span>
                            </h2>

                            <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                                We are dedicated to transforming financial assets into opportunities for growth. Our experienced team
                                leverages extensive market knowledge to guide entrepreneurs through the complexities of the financial
                                landscape.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                        <DollarSign className="h-6 w-6 text-[#00C853]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#333333] mb-2">Capital & Mentorship</h4>
                                        <p className="text-[#666666]">
                                            Providing startups with comprehensive resources and expert guidance to thrive in competitive
                                            markets
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                        <LineChart className="h-6 w-6 text-[#00C853]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#333333] mb-2">Strategic Growth</h4>
                                        <p className="text-[#666666]">
                                            Building resilient enterprises that deliver lasting impact and sustainable value creation
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-[#E8F5E9] rounded-lg p-2 group-hover:bg-[#C8E6C9] transition-colors">
                                        <Lightbulb className="h-6 w-6 text-[#00C853]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#333333] mb-2">Visionary Leadership</h4>
                                        <p className="text-[#666666]">
                                            Turning innovative ideas into industry-leading realities through expert guidance and strategic
                                            vision
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/20 to-[#00C853]/20 rounded-3xl transform rotate-3"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <Image
                                        src={Mission}
                                        alt="Mission illustration"
                                        className="w-full h-96 object-cover rounded-2xl"
                                    />

                                    {/* Floating Stats */}
                                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#00695C]">150+</div>
                                            <div className="text-xs text-[#666666]">Startups Funded</div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#00C853]">$50M+</div>
                                            <div className="text-xs text-[#666666]">Capital Deployed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
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
                                        src={OurStory}
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

            {/* Team Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                            <span className="text-[#00C853] text-sm font-medium">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Meet Our Visionaries</h2>
                        <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                            A diverse group of innovators, strategists, and industry experts united by a shared mission to reshape the
                            entrepreneurial landscape.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Laxmi Dangol */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00695C] to-[#00C853] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00695C] to-[#00C853] text-white text-xl font-bold">
                                                    LD
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00695C] text-white border-0 px-3 py-1">
                                                    Founding Leader
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Laxmi Dangol</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            A master of operational efficiency who specializes in optimizing processes and driving financial
                                            performance. As a key leader, she ensures sustainable growth while steering strategic direction.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        {/* Keshab Jaisi */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00BCD4] to-[#00695C] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00BCD4] to-[#00695C] text-white text-xl font-bold">
                                                    KJ
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00BCD4] text-white border-0 px-3 py-1">
                                                    Talent Scout
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Keshab Jaisi</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            Our talent scout with exceptional ability to identify promising ventures and forge strategic
                                            partnerships. His vision and expertise help turn bold ideas into reality.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        {/* Bipendra Chudal */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C853] to-[#00BCD4] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00C853] to-[#00BCD4] text-white text-xl font-bold">
                                                    BC
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00C853] text-white border-0 px-3 py-1">
                                                    Analytics Expert
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Bipendra Chudal</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            Our analytical expert who uncovers critical insights from data to guide investment strategies. His
                                            sharp mind keeps us ahead in an ever-changing market.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        {/* Alish Dongol */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00695C] to-[#00BCD4] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00695C] to-[#00BCD4] text-white text-xl font-bold">
                                                    AD
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00695C] text-white border-0 px-3 py-1">
                                                    Social Media Manager
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Alish Dongol</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            Our social media manager, Alish, brings creativity and digital expertise to amplify our brand and connect with our community.
                                            His innovative campaigns enhance visibility and engagement for our partners.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        {/* Vijay Chhetri */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C853] to-[#00695C] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00C853] to-[#00695C] text-white text-xl font-bold">
                                                    YS
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00C853] text-white border-0 px-3 py-1">
                                                    NEPSE Analyst
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Yubraj Sharma</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            Our NEPSE analyst, Yubraj, specialises in analysing Nepal’s stock market trends to inform investment decisions.
                                            His keen insights help optimise portfolio performance in local markets.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        {/* Sushil Silwa */}
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand_teal to-[#075661] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                                <AvatarFallback className="bg-gradient-to-br from-[#00C853] to-[#00BCD4] text-white text-xl font-bold">
                                                    SS
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className="bg-[#00C853] text-white border-0 px-3 py-1">
                                                    Financial & Project Advisor
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">Sushil Silwa</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            Our financial and project advisor, Sushil, provides strategic guidance on funding and project execution.
                                            His expertise ensures our ventures are financially sound and operationally successful.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Overview with Data Visualization */}
            <section className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                            <span className="text-[#00C853] text-sm font-medium">Market Focus</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Investment Sectors</h2>
                        <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                            We operate at the intersection of innovation and opportunity, with specialized funds across high-growth
                            industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00695C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 relative">
                                        <div className="bg-[#00695C] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Building2 className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-4">Technology</h3>
                                        <p className="text-[#666666] mb-4">Cutting-edge tech startups and digital innovation platforms</p>
                                        <div className="text-2xl font-bold text-[#00695C]">35%</div>
                                        <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00C853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 relative">
                                        <div className="bg-[#00C853] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-4">Healthcare</h3>
                                        <p className="text-[#666666] mb-4">Medical innovations and healthcare solutions for better lives</p>
                                        <div className="text-2xl font-bold text-[#00C853]">28%</div>
                                        <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00BCD4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 relative">
                                        <div className="bg-[#00BCD4] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Zap className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-4">Renewable Energy</h3>
                                        <p className="text-[#666666] mb-4">Sustainable energy solutions for a greener future</p>
                                        <div className="text-2xl font-bold text-[#00BCD4]">22%</div>
                                        <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>

                        <div className="group">
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-center overflow-hidden">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FFD54F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardContent className="p-8 relative">
                                        <div className="bg-[#FFD54F] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Globe className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-4">Arts & Culture</h3>
                                        <p className="text-[#666666] mb-4">Creative industries and cultural innovation projects</p>
                                        <div className="text-2xl font-bold text-[#FFD54F]">15%</div>
                                        <div className="text-sm text-[#666666]">Portfolio Allocation</div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg bg-white text-center">
                            <CardContent className="p-8">
                                <div className="bg-[#E8F5E9] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <TrendingUp className="h-8 w-8 text-[#00C853]" />
                                </div>
                                <div className="text-3xl font-bold text-[#333333] mb-2">150+</div>
                                <div className="text-[#666666]">Startups Funded</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white text-center">
                            <CardContent className="p-8">
                                <div className="bg-[#E0F7FA] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <BarChart3 className="h-8 w-8 text-[#00BCD4]" />
                                </div>
                                <div className="text-3xl font-bold text-[#333333] mb-2">$50M+</div>
                                <div className="text-[#666666]">Capital Deployed</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white text-center">
                            <CardContent className="p-8">
                                <div className="bg-[#FFF8E1] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <Award className="h-8 w-8 text-[#FFD54F]" />
                                </div>
                                <div className="text-3xl font-bold text-[#333333] mb-2">85%</div>
                                <div className="text-[#666666]">Success Rate</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Customer Commitment */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                            <span className="text-[#00C853] text-sm font-medium">Our Promise</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Our Commitment to Excellence</h2>
                        <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                            Your success is our success. We&apos;re committed to providing exceptional service and support throughout your
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
                                    <p className="text-[#666666] mb-6 leading-relaxed">
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
                                    <p className="text-[#666666] mb-6 leading-relaxed">
                                        Expert team always available to provide guidance, mentorship, and strategic advice when you need it
                                        most.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-[#00695C]" />
                                            <span className="text-[#666666]">24/7 support availability</span>
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
                                        <CardTitle className="text-xl">Success Guarantee</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#666666] mb-6 leading-relaxed">
                                        Confident in our approach with guaranteed measurable progress within the first 12 months of
                                        partnership.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Target className="h-5 w-5 text-[#00695C]" />
                                            <span className="text-[#666666]">Performance milestones</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-[#00C853]" />
                                            <span className="text-[#666666]">Satisfaction guarantee</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & CTA Section */}
            <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: colors.brand_teal }}>
                {/* Background Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C853]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00695C]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Vision?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Connect with us to explore how We Invest can support your entrepreneurial journey. Let&apos;s build the future
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
                                        <div className="text-white font-medium">info@weinvest.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 group">
                                    <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm">Phone</div>
                                        <div className="text-white font-medium">+1 (555) 123-4567</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 group">
                                    <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm">Address</div>
                                        <div className="text-white font-medium">123 Innovation Drive, Suite 100, Global City, GC 12345</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Card className="border-0 shadow-2xl bg-white">
                                <CardContent className="p-8">
                                    <h4 className="text-2xl font-bold text-[#333333] mb-6 text-center">Start Your Journey</h4>
                                    <p className="text-[#666666] mb-8 text-center">
                                        Ready to take your venture to the next level? We&apos;d love to hear from you.
                                    </p>
                                    <div className="space-y-4">
                                        <Button
                                            size="lg"
                                            className="w-full bg-[#00C853] hover:bg-[#00B248] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="w-full border-2 border-[#E0E0E0] text-[#333333] hover:bg-[#F5F7FA] font-semibold py-4 rounded-xl"
                                        >
                                            Download Investment Guide
                                        </Button>
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
        </div>
    )
}


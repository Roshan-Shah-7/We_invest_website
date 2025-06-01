// import React from 'react';
// import type { NextPage } from 'next';
// import { investmentPrograms, whyChooseUsPoints } from '@/data/investmentProgramsData';
// import { CheckCircle } from 'lucide-react';

// const Programs: NextPage = () => {
//     return (
//         <>
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-soft_white text-gray-800">
//                 {/* Header Section */}
//                 <header className="bg-gradient-to-r from-brand-dark-green to-brand-green text-brand_teal py-20 sm:py-24 mt-10 shadow-lg">
//                     <div className="container mx-auto px-6 text-center">
//                         <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in-down">
//                             We Invest: Investment Programmes
//                         </h1>
//                         <p className="mt-6 text-xl sm:text-2xl font-light opacity-90 animate-fade-in-up">
//                             Empowering Your Financial Future
//                         </p>
//                     </div>
//                 </header>

//                 {/* Main Content Area */}
//                 <main className="container mx-auto px-6 py-16">
//                     {/* Introductory Text */}
//                     <section className="mb-20 text-center max-w-3xl mx-auto">
//                         <p className="text-xl leading-relaxed text-gray-700 font-light">
//                             At We Invest, we offer a suite of innovative investment programmes
//                             designed to empower entrepreneurs and investors to achieve their
//                             financial goals. Our programmes provide flexible, high-potential
//                             opportunities tailored to diverse needs, from early-stage startup
//                             funding to stable, long-term wealth-building strategies. Each
//                             programme is crafted to align with our mission of fostering
//                             visionary growth while delivering sustainable returns. Explore our
//                             offerings below to find the perfect fit for your investment
//                             journey.
//                         </p>
//                     </section>

//                     {/* Our Investment Programmes Section */}
//                     <section className="mb-20">
//                         <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-green mb-12 text-center animate-fade-in">
//                             Our Investment Programmes
//                         </h2>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                             {investmentPrograms.map((program, index) => (
//                                 <div
//                                     key={program.id}
//                                     className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
//                                     style={{ animationDelay: `${index * 0.1}s` }}
//                                 >
//                                     <h3 className="text-2xl font-bold text-brand-green mb-4 leading-snug">
//                                         {`${index + 1}. ${program.title}`}
//                                     </h3>

//                                     <div className="space-y-6 text-gray-700">
//                                         <div>
//                                             <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Overview:</h4>
//                                             <p className="text-base leading-relaxed">{program.overview}</p>
//                                         </div>

//                                         <div>
//                                             <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Key Features:</h4>
//                                             <ul className="list-none space-y-2 text-base">
//                                                 {program.keyFeatures.map((feature, i) => (
//                                                     <li key={`${program.id}-feature-${i}`} className="flex items-start">
//                                                         <CheckCircle className="w-5 h-5 text-brand_green mr-3 flex-shrink-0 mt-1" />
//                                                         <span>{feature}</span>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>

//                                         <div>
//                                             <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Benefits:</h4>
//                                             <ul className="list-none space-y-2 text-base">
//                                                 {program.benefits.map((benefit, i) => (
//                                                     <li key={`${program.id}-benefit-${i}`} className="flex items-start">
//                                                         <CheckCircle className="w-5 h-5 text-brand_green mr-3 flex-shrink-0 mt-1" />
//                                                         <span>{benefit}</span>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>

//                     {/* Why Choose Us Section */}
//                     <section className="py-16 bg-brand-dark-green rounded-3xl shadow-2xl text-black">
//                         <div className="container mx-auto px-6">
//                             <h2 className="text-4xl text-brand_teal font-bold text-center mb-12 animate-fade-in">
//                                 Why Choose Our Investment Programmes?
//                             </h2>
//                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
//                                 {whyChooseUsPoints.map((point, index) => (
//                                     <li key={`why-${index}`} className="flex items-start bg-white/10 p-6  rounded-xl shadow-inner animate-fade-in-up"
//                                         style={{ animationDelay: `${index * 0.15}s` }}>
//                                         <CheckCircle
//                                             className="w-7 h-7 text-brand_green mr-4 flex-shrink-0 mt-1"
//                                         />
//                                         <span>{point}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </>
//     );
// };

// export default Programs;





import type { NextPage } from "next"
import { investmentPrograms, whyChooseUsPoints } from "@/data/investmentProgramsData"
import { CheckCircle, TrendingUp, Shield, Target, Zap, ArrowRight } from "lucide-react"

const Programs: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="relative bg-white border-b border-gray-200 py-20 sm:py-28 mt-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-green/5 to-brand_teal/5"></div>
                <div className="container mx-auto px-6 text-center relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-dark-green rounded-2xl mb-8">
                        <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">Investment Programmes</h1>
                    <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Empowering Your Financial Future with Strategic Investment Solutions
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container mx-auto px-6 py-16">
                {/* Introductory Text */}
                <section className="mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-12 h-12 bg-brand_teal rounded-xl flex items-center justify-center">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                At We Invest, we offer a suite of innovative investment programmes designed to empower entrepreneurs and
                                investors to achieve their financial goals. Our programmes provide flexible, high-potential
                                opportunities tailored to diverse needs, from early-stage startup funding to stable, long-term
                                wealth-building strategies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Investment Programmes Section */}
                <section className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Investment Programmes</h2>
                        <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our comprehensive range of investment opportunities designed for every stage of your financial
                            journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {investmentPrograms.map((program, index) => (
                            <div
                                key={program.id}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                {/* Program Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-brand-dark-green rounded-xl flex items-center justify-center mr-4 group-hover:bg-brand-green transition-colors duration-300">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-brand_teal uppercase tracking-wide">
                                                Programme {index + 1}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1">{program.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Content */}
                                <div className="space-y-6">
                                    {/* Overview */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 flex items-center">
                                            <div className="w-2 h-2 bg-brand_teal rounded-full mr-2"></div>
                                            Overview
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">{program.overview}</p>
                                    </div>

                                    {/* Key Features */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 flex items-center">
                                            <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {program.keyFeatures.map((feature, i) => (
                                                <li key={`${program.id}-feature-${i}`} className="flex items-start text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 flex items-center">
                                            <div className="w-2 h-2 bg-brand-dark-green rounded-full mr-2"></div>
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {program.benefits.map((benefit, i) => (
                                                <li key={`${program.id}-benefit-${i}`} className="flex items-start text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm leading-relaxed">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <button className="inline-flex items-center text-brand-dark-green font-semibold hover:text-brand-green transition-colors duration-200 group/btn">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-brand_teal/100 rounded-2xl p-12 text-white">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-brand_teal" />
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
                        <button className="inline-flex items-center bg-brand_teal hover:bg-brand-green text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300">
                            Get Started Today
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Programs

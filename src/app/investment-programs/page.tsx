import React from 'react';
import type { NextPage } from 'next';
import { investmentPrograms, whyChooseUsPoints } from '@/data/investmentProgramsData';
import { CheckCircle } from 'lucide-react';

const Programs: NextPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-soft_white text-gray-800">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-brand-dark-green to-brand-green text-brand_teal py-20 sm:py-24 mt-10 shadow-lg">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in-down">
                            We Invest: Investment Programmes
                        </h1>
                        <p className="mt-6 text-xl sm:text-2xl font-light opacity-90 animate-fade-in-up">
                            Empowering Your Financial Future
                        </p>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="container mx-auto px-6 py-16">
                    {/* Introductory Text */}
                    <section className="mb-20 text-center max-w-3xl mx-auto">
                        <p className="text-xl leading-relaxed text-gray-700 font-light">
                            At We Invest, we offer a suite of innovative investment programmes
                            designed to empower entrepreneurs and investors to achieve their
                            financial goals. Our programmes provide flexible, high-potential
                            opportunities tailored to diverse needs, from early-stage startup
                            funding to stable, long-term wealth-building strategies. Each
                            programme is crafted to align with our mission of fostering
                            visionary growth while delivering sustainable returns. Explore our
                            offerings below to find the perfect fit for your investment
                            journey.
                        </p>
                    </section>

                    {/* Our Investment Programmes Section */}
                    <section className="mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-green mb-12 text-center animate-fade-in">
                            Our Investment Programmes
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {investmentPrograms.map((program, index) => (
                                <div
                                    key={program.id}
                                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h3 className="text-2xl font-bold text-brand-green mb-4 leading-snug">
                                        {`${index + 1}. ${program.title}`}
                                    </h3>

                                    <div className="space-y-6 text-gray-700">
                                        <div>
                                            <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Overview:</h4>
                                            <p className="text-base leading-relaxed">{program.overview}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Key Features:</h4>
                                            <ul className="list-none space-y-2 text-base">
                                                {program.keyFeatures.map((feature, i) => (
                                                    <li key={`${program.id}-feature-${i}`} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-brand_green mr-3 flex-shrink-0 mt-1" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-brand_teal text-lg mb-2 border-b border-brand_teal/20 pb-1">Benefits:</h4>
                                            <ul className="list-none space-y-2 text-base">
                                                {program.benefits.map((benefit, i) => (
                                                    <li key={`${program.id}-benefit-${i}`} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-brand_green mr-3 flex-shrink-0 mt-1" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="py-16 bg-brand-dark-green rounded-3xl shadow-2xl text-black">
                        <div className="container mx-auto px-6">
                            <h2 className="text-4xl text-brand_teal font-bold text-center mb-12 animate-fade-in">
                                Why Choose Our Investment Programmes?
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                                {whyChooseUsPoints.map((point, index) => (
                                    <li key={`why-${index}`} className="flex items-start bg-white/10 p-6  rounded-xl shadow-inner animate-fade-in-up"
                                        style={{ animationDelay: `${index * 0.15}s` }}>
                                        <CheckCircle
                                            className="w-7 h-7 text-brand_green mr-4 flex-shrink-0 mt-1"
                                        />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Programs;

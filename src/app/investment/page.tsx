'use client';

import React from "react";
import Image from "next/image";

import InvestImage from "@/assets/investment/bg2.jpg";
import ObjectiveCard from "@/components/ObjectiveCard";


interface RiskBarProps {
    label: string;
    color: string;
    percentage: number;
}

const RiskBar: React.FC<RiskBarProps> = ({ label, color, percentage }) => {
    return (
        <div className="flex items-center mb-4 last:mb-0">
            <div className="w-1/3 mr-4 text-right">{label}</div>
            <div className="relative w-2/3 h-4">
                <div
                    className={`absolute top-0 left-0 h-full ${color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};


interface DueDiligenceStep {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface InvestmentCriteriaProps {
    title: string;
    icon: React.ReactNode;
    description: string;
}

const InvestmentCard: React.FC<InvestmentCriteriaProps> = ({ title, icon, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <div className="bg-gray-100 shadow-lg text-brand_teal p-3 rounded-full mr-4">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};


export default function InvestmentPage() {
    const keyPoints = [
        {
            // icon: "",
            title: 'Wealth Creation',
            description: 'Generate income or capital gains to increase your net worth.',
        },
        {
            // icon: "",
            title: 'Financial Security',
            description: 'Build a safety net for future needs, such as retirement or emergencies.',
        },
        {
            // icon: "",
            title: 'Beating Inflation',
            description: 'Ensure your money retains its purchasing power as the cost of goods and services rises.',
        },
        {
            // icon: "",
            title: 'Achieving Goals',
            description: 'Fund major milestones, such as buying a home, starting a business, or supporting education.',
        },
    ];

    const wealthCard = [
        {
            // icon: "",
            title: 'Diversification Investment',
            description: 'Access a wide range of investment options to spread risk and enhance returns.',
        },
        {
            // icon: "",
            title: 'Secure and Reliable',
            description: 'Your investments are protected with top-notch security measures, ensuring peace of mind.',
        },
        {
            // icon: "",
            title: 'Low Fees',
            description: 'Enjoy competitive fees that maximize your returns without unnecessary costs.',
        },
    ];

    const riskSpectrum = [
        { label: "Low Risk / Low Return", color: "bg-blue-500", percentage: 40 },
        { label: "Bonds", color: "bg-blue-400", percentage: 60 },
        { label: "Real Estate", color: "bg-yellow-500", percentage: 80 },
        { label: "Equities", color: "bg-red-500", percentage: 95 },
        { label: "High Risk / High Return", color: "bg-red-600", percentage: 100 },
    ];

    const steps: DueDiligenceStep[] = [
        {
            title: "Company Analysis",
            description: "We conduct a comprehensive analysis of the company's financials, market position, and growth potential.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Founder Evaluation",
            description: "We assess the founder's experience, vision, and commitment to the venture's success.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Risk Assessment",
            description: "We identify and evaluate potential risks, developing mitigation strategies to protect your investment.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Goal Alignment",
            description: "We ensure the investment aligns with your financial objectives, risk tolerance, and desired outcomes.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    const companyCriteria = [
        {
            title: "Proven Experience",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            description: "Companies with a track record of success and a clear understanding of their industry."
        },
        {
            title: "Passionate Leadership",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            description: "Founders who are deeply committed to their vision and have the drive to overcome challenges."
        },
        {
            title: "Competitive Advantage",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            description: "Businesses that stand out from the competition with unique offerings and a strong market position."
        },
        {
            title: "Sustainable Business Model",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            description: "Ventures with a clear path to profitability and long-term sustainability."
        }
    ];

    const individualCriteria = [
        {
            title: "Investment Size",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            description: "We work with investors at various levels, tailoring our approach to your financial capacity."
        },
        {
            title: "Risk Tolerance",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            description: "We assess your comfort level with risk to ensure investments align with your preferences."
        },
        {
            title: "Time Horizon",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            description: "We consider your investment timeline, whether you're looking for short-term gains or long-term growth."
        },
        {
            title: "Preferred Sectors",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
            description: "We help you identify sectors that align with your interests and investment strategy."
        }
    ];

    return (
        <div className="pt-10">
            {/* Hero section */}
            <section className="w-full max-w-[85%] m-auto mt-10 relative h-[80vh] flex items-center text-white justify-center">
                <Image src={InvestImage} alt='Investment'
                    className='hero_image h-full object-cover w-full rounded-[2rem] absolute inset-0' />

                <div className="absolute inset-0 bg-[#0c0f0a]/50 rounded-[2rem] z-0" /> {/* Increased overlay opacity */}

                <div className="content relative z-10 text-center max-w-4xl mx-auto p-4"> {/* Centered content */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"> {/* Larger text, more spacing */}
                        We Invest: Understanding Investment
                    </h1>
                    <blockquote className="text-lg md:text-xl italic max-w-3xl mx-auto text-gray-200 mb-10 leading-relaxed"> {/* Larger text, more spacing */}
                        “Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn’t, pays it.” — Albert Einstein
                    </blockquote>
                </div>
            </section>

            {/* What is investment */}
            <section className="investmetn mt-20">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 text-brand_teal">Understanding Investment</h1>
                <p className="text-lg text-center max-w-7xl mx-auto text-gray-600 leading-relaxed">
                    Investment is the act of allocating resources—typically money, time, or effort—into assets
                    or ventures with the expectation of generating income or achieving appreciation over time.
                    Appreciation refers to the increase in an asset’s value, which can result in profit when sold or
                    provide ongoing returns. Investments come in various forms, including stocks, bonds, real estate,
                    fixed deposits, and startups, each offering unique opportunities and risks.
                    <br />
                    <br />
                    At its core, investing is about putting your money to work to create wealth. Whether you’re saving
                    for retirement, funding a major life goal, or building a business, the primary objective remains the
                    same: to grow your financial resources strategically over time.
                </p>
                <div className="keys mt-10 w-[80%] mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-auto'>
                        {keyPoints.map((keydata, index) => (
                            <ObjectiveCard
                                key={index}
                                title={keydata.title}
                                description={keydata.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Wealth Path */}
            <section className="investmetn text-white mt-20 bg-brand_teal py-20 px-6">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-6">Why Choose Wealth Path ?</h1>
                <p className="text-lg text-center max-w-7xl mx-auto text-gray-300 leading-relaxed">
                    Wealth Path is your trusted partner in navigating the world of investments. We offer a comprehensive
                    platform designed to empower you with the tools and knowledge needed to make informed investment decisions.
                    Our mission is to help you achieve your financial goals through a combination of expert guidance, cutting-edge
                    technology, and a commitment to transparency.
                    <br />
                    <br />
                    With Wealth Path, you can access a diverse range of investment options, from traditional assets like stocks and bonds
                    to innovative opportunities in real estate and startups. Our user-friendly interface makes it easy to track your portfolio,
                    analyze market trends, and stay informed about your investments.
                </p>
                <div className="keys mt-10 w-[80%] mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {wealthCard.map((keydata, index) => (
                            <ObjectiveCard
                                key={index}
                                title={keydata.title}
                                description={keydata.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Investments Works */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 text-brand_teal">How Investments Work ?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        Understanding the core principles of investing can empower you to make informed decisions and grow your wealth effectively.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* <!-- Capital Gains --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-gray-700 text-start">
                            <div className="flex items-center text-start mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Capital Gains</h3>
                            </div>
                            <p className="text-gray-600">
                                Capital gains occur when you sell an asset for more than you paid for it. For example, if you buy a stock for $100
                                and sell it for $150, your capital gain is $50. This is a primary way investments generate profit, reflecting the
                                growth in value of the asset over time.
                            </p>
                        </div>

                        {/* <!-- Income Generation --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-gray-700 lg:col-start-1 lg:row-start-2 text-start">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Income Generation</h3>
                            </div>
                            <p className="text-gray-600">
                                Some investments provide regular income. Stocks can pay dividends (a share of the company’s profits), bonds pay interest,
                                and real estate can generate rental income. This income can be reinvested or used to cover living expenses,
                                providing a steady cash flow.
                            </p>
                        </div>

                        {/* <!-- Power of Compounding --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-gray-700 lg:row-span-2 lg:col-start-2 lg:row-start-1 text-start">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">The Power of Compounding</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Compounding is when your investment earnings start earning their own returns. It’s like a snowball effect for your money.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 text-sm">
                                <li>You invest $1,000 with an annual return of 10%.</li>
                                <li>After 1 year, you earn $100, so you have $1,100.</li>
                                <li>In year 2, you earn 10% on $1,100, which is $110. Now you have $1,210.</li>
                                <li>In year 3, you earn 10% on $1,210, which is $121. Now you have $1,331.</li>
                            </ul>
                            <p className="text-gray-600">
                                Over time, even small amounts can grow significantly due to compounding, especially when reinvested.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Considerations Before Investing */}
            <section className="text-white bg-brand_teal py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Key Considerations Before Investing</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
                        Investing can  be a powerful tool for building wealth, but it’s essential to approach it with a clear understanding of your goals and the risks involved.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Conduct Through Research --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-brand_green/30 text-start">
                            <div className="flex items-center text-start mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Conduct Through Research</h3>
                            </div>
                            <p className="text-gray-300">
                                Understand what you’re investing in. Research the company, industry, market trends, and potential risks.
                                Don't invest based on hype or tips alone. Knowledge is your best defense against losses.
                            </p>
                        </div>

                        {/* <!-- Final Planning --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-brand_green/30 text-start lg:col-span-2">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Final Planning</h3>
                            </div>
                            <p className="text-gray-300">
                                Assess your current financial situation, set clear investment goals (e.g., retirement, buying a home),
                                and determine how much you can comfortably invest without jeopardizing your daily needs or emergency funds.
                            </p>
                        </div>

                        {/* <!-- Understood Liquidity --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-brand_green/30 text-start lg:col-span-2 lg:row-start-2">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Understood Liquidity</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Liquidity refers to how quickly you can convert your investments into cash without significantly affecting their value.
                                Some assets, like stocks, are highly liquid, while others, like real estate, are less so. Ensure you have enough liquidity
                                to meet your short-term needs while still pursuing long-term growth.
                            </p>
                        </div>

                        {/* <!-- Assess Your Risk Tolerance --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-brand_green/30 text-start lg:col-start-3 lg:row-start-2">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">Assess Your Risk Tolerance</h3>
                            </div>
                            <p className="text-gray-300">
                                Every investment carries some level of risk. Assess your comfort with potential losses and volatility.
                                Younger investors may take on more risk for higher returns, while those closer to retirement may prefer safer investments.
                                Understanding your risk tolerance helps you build a portfolio that aligns with your financial goals and peace of mind.
                            </p>
                        </div>

                        {/* <!-- Seek Professional Guidance --> */}
                        <div className="bg-white/10 p-6 rounded-lg border border-brand_green/30 text-start lg:col-span-3 lg:row-start-3">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <h3 className="text-xl font-semibold">The Seek Professional Guidance</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                If you’re new to investing or feel overwhelmed, consider seeking advice from a financial advisor.
                                They can help you create a personalized investment strategy, diversify your portfolio, and navigate complex financial markets.
                                Professional guidance can provide valuable insights and help you avoid common pitfalls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mastering Risk and Reward Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full mb-4">
                            NAVIGATING INVESTMENTS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mastering Risk & Reward</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Unlock the secrets to building a resilient portfolio. Understand how different investments perform and tailor a strategy that aligns with your financial journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Text Column */}
                        <div>
                            <p className="text-gray-600 text-lg mb-4">
                                Every investment carries a unique balance of potential gains and inherent risks. Equities (stocks), for example, offer the prospect of significant growth over time, but their value can be volatile in the short term.
                            </p>
                            <p className="text-gray-600 text-lg mb-4">
                                On the other hand, bonds are generally considered more stable, providing predictable returns, though typically at a lower rate. They represent loans to entities like governments or corporations.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Understanding this risk-reward spectrum is foundational to making informed investment decisions.
                            </p>
                        </div>

                        {/* Chart Column */}
                        <div className="bg-brand_teal p-6 rounded-xl shadow-lg border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-4">Illustrative Risk Spectrum</h3>
                            <div className="space-y-2 text-gray-200">
                                {riskSpectrum.map((item, index) => (
                                    <RiskBar
                                        key={index}
                                        label={item.label}
                                        color={item.color}
                                        percentage={item.percentage}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-300 mt-4 text-right">
                                Note: This is a simplified illustration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailored Support Section */}
            <section className="py-16 px-4 text-white bg-brand_teal">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Tailored Support for Every Investor</h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            At We Invest, we understand that every investor has unique needs and goals. That's why we offer tailored support to entrepreneurs, individual investors, and institutional investors, ensuring that each receives the resources and guidance necessary to thrive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Entrepreneurs Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-brand_green rounded-full text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Entrepreneurs</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We provide entrepreneurs with the capital, strategic guidance, and network access they need to scale their businesses and achieve their vision.
                            </p>
                        </div>

                        {/* Individual Investors Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-brand_green rounded-full text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Individual Investors</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We empower individual investors with personalized roadmaps, access to exclusive opportunities, and educational resources to build and manage their portfolios effectively.
                            </p>
                        </div>

                        {/* Institutional Investors Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-brand_green rounded-full text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Institutional Investors</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We collaborate with institutional investors on large-scale projects, offering access to unique investment opportunities and leveraging our expertise to maximize returns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Due Diligence Steps Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Due Diligence Steps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-brand_teal text-white rounded-full p-3 mr-4">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Criteria */}
            <section className="py-16 px-4 text-white bg-brand_teal">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Investment Criteria</h2>

                    {/* Companies Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8">For Companies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {companyCriteria.map((criteria, index) => (
                                <InvestmentCard
                                    key={index}
                                    title={criteria.title}
                                    icon={criteria.icon}
                                    description={criteria.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Individuals Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">For Individuals</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {individualCriteria.map((criteria, index) => (
                                <InvestmentCard
                                    key={index}
                                    title={criteria.title}
                                    icon={criteria.icon}
                                    description={criteria.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

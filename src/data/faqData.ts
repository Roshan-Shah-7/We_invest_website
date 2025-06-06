import type React from "react";
import { MessageCircle, HelpCircle, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
    keywords: string[];
}

export interface FAQCategory {
    id: string;
    name: string;
    icon: React.ElementType;
    description: string;
}

export const faqCategories: FAQCategory[] = [
    {
        id: "general",
        name: "General Questions",
        icon: HelpCircle,
        description: "Common questions about We Invest and our services",
    },
    {
        id: "portfolio-management",
        name: "Portfolio Management",
        icon: Briefcase,
        description: "Questions about our Portfolio Management Services (PMS)",
    },
    {
        id: "startup-funding",
        name: "Startup Funding",
        icon: MessageCircle,
        description: "Questions related to venture capital and startup investments",
    },
    {
        id: "education-support",
        name: "Education & Support",
        icon: GraduationCap,
        description: "Information on educational initiatives and client support",
    },
    {
        id: "security-fees",
        name: "Security & Fees",
        icon: ShieldCheck,
        description: "Questions about data security, regulation, and fees",
    },
];

export const faqData: FAQItem[] = [
    {
        id: "core-mission",
        question: "What's the core mission of We Invest Global Pvt. Ltd.?",
        answer: "We Invest Global Pvt. Ltd. is dedicated to fostering financial prosperity and economic expansion. We accomplish this by offering personalized investment strategies and active portfolio management for individuals, alongside vital funding, mentorship, and strategic guidance for entrepreneurs and innovative businesses. We also make significant institutional investments aimed at creating a broader economic impact.",
        category: "general",
        keywords: ["mission", "we invest", "financial prosperity", "economic expansion", "investment strategies", "portfolio management", "funding", "mentorship", "strategic guidance", "entrepreneurs", "innovative businesses", "institutional investments"],
    },
    {
        id: "what-is-investment",
        question: "Can you explain what an investment is and why it's beneficial for me?",
        answer: "An investment is essentially committing your resources, usually money, to an asset or venture with the expectation of generating income or increasing its value over time. Investing is crucial for growing your financial resources, building wealth, securing your future, protecting your purchasing power from inflation, and achieving major financial goals.",
        category: "general",
        keywords: ["investment", "beneficial", "money growth", "wealth", "future", "inflation", "financial goals"],
    },
    {
        id: "how-compounding-works",
        question: "I've heard about \"compounding\" – how does it make my money grow?",
        answer: "Compounding is a powerful financial principle where the returns you earn on an investment are reinvested, allowing those accumulated returns to generate even more returns. This creates an accelerating growth effect, meaning your money can grow exponentially over time, far more than with simple interest. It's like earning interest on your interest.",
        category: "general",
        keywords: ["compounding", "money growth", "returns", "reinvested", "exponential growth", "interest"],
    },
    {
        id: "what-sets-we-invest-apart",
        question: "What sets We Invest Global Pvt. Ltd. apart as a reliable choice for managing my investments?",
        answer: "Our commitment to client success is built on providing highly tailored solutions that precisely match your financial goals and risk tolerance. Our approach combines expert professional oversight of investments, privileged access to high-potential opportunities, and a strong emphasis on transparency in all our dealings. We work closely with clients to build trust and ensure satisfaction.",
        category: "general",
        keywords: ["we invest", "reliable", "client success", "tailored solutions", "financial goals", "risk tolerance", "expert oversight", "high-potential opportunities", "transparency", "trust", "satisfaction"],
    },
    {
        id: "investment-programs-opportunities",
        question: "What range of investment programs and opportunities does We Invest Global Pvt. Ltd. offer?",
        answer: "We provide a diverse array of investment programs designed to suit various financial journeys. These include our specialized Venture Capital Investment Programme, a collective Pool Funding Programme, Project-Wise Funding based on equity, and Time-Based Investment options with specific lock-in periods.",
        category: "portfolio-management",
        keywords: ["investment programs", "opportunities", "venture capital", "pool funding", "project-wise funding", "equity", "time-based investment"],
    },
    {
        id: "entrepreneur-support",
        question: "As an entrepreneur with an innovative business idea, what kind of support can I anticipate from We Invest Global Pvt. Ltd.?",
        answer: "If you're an entrepreneur, we offer more than just capital. We provide strategic funding for innovative businesses, coupled with crucial strategic mentorship and access to our extensive industry network. Our goal is to empower visionary founders to transform their bold concepts into successful and sustainable enterprises.",
        category: "startup-funding",
        keywords: ["entrepreneur support", "innovative business", "strategic funding", "mentorship", "industry network", "empower founders", "sustainable enterprises"],
    },
    {
        id: "individual-investment-assistance",
        question: "How does We Invest Global Pvt. Ltd. assist individuals in understanding and managing their investments, including topics like stocks?",
        answer: "For individuals, we craft personalized investment roadmaps and provide ongoing portfolio management. Beyond managing assets, we actively educate our clients about various investment types, including how stocks work and other securities, empowering them with the knowledge needed to make informed financial decisions and achieve their wealth-building aspirations.",
        category: "education-support",
        keywords: ["individual assistance", "investment management", "stocks", "personalized roadmaps", "portfolio management", "education", "financial decisions", "wealth-building"],
    },
    {
        id: "investment-vetting-process",
        question: "What rigorous process does We Invest Global Pvt. Ltd. use to ensure its investments are sound and thoroughly vetted?",
        answer: "We implement a stringent due diligence process for every potential investment. This involves an in-depth analysis of the business model and market viability, a thorough evaluation of the leadership team's credibility, a detailed assessment of potential risks and corresponding mitigation strategies, and ensuring strict alignment with sustainable growth and impactful objectives.",
        category: "security-fees",
        keywords: ["due diligence", "investment vetting", "business model analysis", "market viability", "leadership evaluation", "risk assessment", "mitigation strategies", "sustainable growth", "impactful objectives"],
    },
    {
        id: "personal-circumstances-influence",
        question: "How do my personal circumstances, such as age or current life stage, influence the most suitable investment strategies for me?",
        answer: "Your personal investment strategy is significantly shaped by your age and current life stage, primarily due to your risk tolerance and investment time horizon. Younger individuals, benefiting from a longer period for growth, can typically embrace higher-risk, higher-reward investments. As you approach mid-career, the focus often shifts to balancing growth with increasing stability. For those nearing retirement, the priority generally becomes capital preservation and generating reliable income. We tailor our strategies to align precisely with your unique circumstances and financial goals.",
        category: "portfolio-management",
        keywords: ["personal circumstances", "age", "life stage", "investment strategies", "risk tolerance", "time horizon", "younger investors", "mid-career", "retirement", "capital preservation", "income generation"],
    },
    {
        id: "essential-factors-before-investing",
        question: "Before I commit to an investment, what essential factors should I carefully consider?",
        answer: "Before committing to any investment, it's crucial to conduct thorough research on the specific vehicle, establish a solid financial plan (including an emergency fund), fully understand the liquidity of your chosen investments, honestly assess your personal risk tolerance, and strongly consider seeking guidance from a qualified financial advisor to create a strategy aligned with your goals.",
        category: "general",
        keywords: ["essential factors", "before investing", "research", "financial plan", "emergency fund", "liquidity", "risk tolerance", "financial advisor", "guidance"],
    },
    {
        id: "large-scale-projects-support",
        question: "What kinds of large-scale projects does We Invest Global Pvt. Ltd. support through its institutional investments?",
        answer: "Our institutional investments are strategically directed towards large-scale projects designed to create a significant economic impact. These initiatives typically contribute to job creation, foster innovation, enhance brand value, and are selected for their high potential for strategic returns.",
        category: "portfolio-management",
        keywords: ["large-scale projects", "institutional investments", "economic impact", "job creation", "innovation", "brand value", "strategic returns"],
    },
    {
        id: "qualities-in-invested-companies",
        question: "What specific qualities or characteristics does We Invest Global Pvt. Ltd. look for in companies it invests in?",
        answer: "When evaluating investment companies, we primarily look for strong leadership with a proven track record, a clear passion and vision for their mission, a unique value proposition within a viable competitive landscape, and a sustainable, scalable business model demonstrating strong potential for long-term growth.",
        category: "startup-funding",
        keywords: ["qualities", "characteristics", "invested companies", "strong leadership", "proven track record", "passion", "vision", "unique value proposition", "competitive landscape", "sustainable business model", "scalable business model", "long-term growth"],
    },
    {
        id: "inherent-risks",
        question: "Are there inherent risks associated with investing through We Invest Global Pvt. Ltd., or with any investment in general?",
        answer: "Yes, it is crucial to understand that all investments inherently carry market risks. The value of your investment can fluctuate due to a multitude of factors influencing financial markets. Crucially, past performance is never a guarantee of future results. We unequivocally advise all investors to diligently review all pertinent documentation and consult with qualified professionals to fully comprehend the financial, legal, and tax implications of their investment decisions.",
        category: "security-fees",
        keywords: ["inherent risks", "market risks", "investment value fluctuation", "past performance", "future results", "documentation review", "qualified professionals", "financial implications", "legal implications", "tax implications"],
    },
    {
        id: "investors-of-all-experience-levels",
        question: "Does We Invest Global Pvt. Ltd. work with investors of all experience levels, including those just starting?",
        answer: "Yes, We Invest Global Pvt. Ltd. is committed to helping investors at various levels, including those who are just beginning their investment journey with smaller capital. Our tailored approach ensures that strategies are developed to suit diverse investment capacities.",
        category: "general",
        keywords: ["all experience levels", "beginning investors", "smaller capital", "tailored approach", "diverse investment capacities"],
    },
];

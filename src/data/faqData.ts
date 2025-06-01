import { MessageCircle, HelpCircle, Phone, Mail, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

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
    icon: any; // Consider a more specific type if possible, e.g., React.ElementType
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
        id: "what-we-invest-does",
        question: "What exactly does We Invest do?",
        answer:
            "We Invest is an investment firm with a unique dual focus. Our core strength is in venture capital, where we specialize in funding and strategically supporting startups, particularly those needing turnaround strategies or experiencing flat or declining revenue. Concurrently, we provide professional portfolio management services to individuals and institutions, helping them grow and manage their wealth effectively for long-term financial success.",
        category: "general",
        keywords: ["we invest", "firm", "venture capital", "portfolio management", "services", "startups", "wealth"],
    },
    {
        id: "how-pms-work",
        question: "How do your Portfolio Management Services (PMS) work?",
        answer:
            "Our PMS are designed to strategically grow your wealth. We begin by understanding your financial objectives, risk tolerance, and time horizon. Based on this, we craft a personalized investment strategy and actively manage your money across various asset classes. We continually monitor market conditions and make adjustments to optimize performance, aligning with your goals.",
        category: "portfolio-management",
        keywords: ["pms", "portfolio management", "wealth growth", "investment strategy", "asset classes"],
    },
    {
        id: "who-benefits",
        question: "Who can benefit from We Invest's services?",
        answer:
            "Our services cater to two key groups: ambitious startup founders seeking venture capital funding and expert guidance, especially those looking to revitalize their growth or scale; and individuals, families, or institutions seeking professional expertise to manage and grow their investment portfolios effectively, including those interested in diverse funding options.",
        category: "general",
        keywords: ["beneficiaries", "clients", "startups", "investors", "individuals", "institutions"],
    },
    {
        id: "types-of-investments",
        question: "What types of startups do you invest in, and what kind of investment portfolios do you offer?",
        answer:
            "In our venture capital activities, we primarily seek high-potential startups that can achieve significant growth, including those in turnaround situations. We invest across specific sectors like technology, healthcare, sustainable agriculture, renewable energy, education, and more through our specialized funds. For portfolio management, we offer diverse portfolio types tailored to different risk profiles and financial goals, from conservative to growth-oriented strategies.",
        category: "startup-funding",
        keywords: ["startup types", "investment sectors", "portfolio types", "venture capital", "funds"],
    },
    {
        id: "funding-options-minimums",
        question: "Does We Invest offer different funding options for startups, and is there a minimum investment requirement for Portfolio Management Services?",
        answer:
            "Yes, for startups, we provide a range of funding options tailored to different growth stages, from seed funding to growth capital. For our Portfolio Management Services, while we don't list a strict minimum here, we generally partner with clients committed to long-term wealth growth. We encourage you to contact us for a personalized consultation to discuss your specific needs and how we can best serve you.",
        category: "startup-funding",
        keywords: ["funding options", "seed funding", "growth capital", "minimum investment", "pms"],
    },
    {
        id: "startup-support",
        question: "Beyond funding, what comprehensive support does We Invest provide to startups?",
        answer:
            "We offer a holistic approach to startup development. Beyond capital, our comprehensive support includes deep mentorship, strategic guidance, and operational assistance. We get hands-on involved in the growth journey, ensuring startups have the necessary resources and expertise to overcome challenges and succeed, reflecting our commitment to long-term partnerships.",
        category: "startup-funding",
        keywords: ["startup support", "mentorship", "strategic guidance", "operational assistance", "holistic approach"],
    },
    {
        id: "track-portfolio-performance",
        question: "How can I access updates and track the performance of my investment portfolio?",
        answer:
            "We believe in complete transparency. Clients receive regular, comprehensive reports detailing their portfolio's performance. Additionally, we provide secure access to a dedicated client portal where you can conveniently view real-time updates, track key metrics, and monitor your investments at any time.",
        category: "portfolio-management",
        keywords: ["track performance", "updates", "reports", "client portal", "transparency"],
    },
    {
        id: "educational-initiatives",
        question: "What educational initiatives does We Invest offer for entrepreneurs?",
        answer:
            "We are committed to fostering a new generation of business leaders. We run programs like the \"School of Startups,\" which offers specialized courses and incubation classes. These initiatives are designed to equip entrepreneurs with practical skills, essential knowledge, and the mindset needed to successfully launch, manage, and grow their businesses.",
        category: "education-support",
        keywords: ["education", "entrepreneurs", "school of startups", "courses", "incubation classes", "skills"],
    },
    {
        id: "regulation-data-security",
        question: "Are We Invest's services regulated, and how secure is client data?",
        answer:
            "Yes, both our venture capital activities and portfolio management services are fully regulated by the relevant financial authorities, ensuring we adhere to strict compliance standards and ethical practices. We prioritize your security, all client data is protected with advanced encryption and robust cybersecurity protocols to ensure utmost confidentiality and integrity.",
        category: "security-fees",
        keywords: ["regulation", "security", "client data", "encryption", "cybersecurity", "compliance"],
    },
    {
        id: "additional-fees",
        question: "Are there any additional fees involved with your services (venture capital or portfolio management)?",
        answer:
            "We are committed to complete transparency regarding all fees. Our fee structure for portfolio management is clearly outlined and discussed upfront in detail. For venture capital investments, our investment terms and any associated costs (such as legal fees for deal structuring) are specific to each agreement and will be fully disclosed before any commitments are made. We ensure you have a complete understanding of all financial aspects.",
        category: "security-fees",
        keywords: ["fees", "costs", "transparency", "fee structure", "venture capital fees", "portfolio management fees"],
    },
];

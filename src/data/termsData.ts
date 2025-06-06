export interface TermContentBlock {
    type: 'paragraph' | 'list' | 'highlight';
    text?: string; 
    items?: string[];
    title?: string; 
    color?: 'blue' | 'yellow' | 'red' | 'green';
}

export interface TermSection {
    id: string;
    title: string;
    content: TermContentBlock[];
    subsections?: { id: string; title: string }[];
}

export const lastUpdated: string = "June 1, 2025"; 
export const effectiveDate: string = "June 1, 2025";

export const contactDetails = {
    email: "investwe3@gmail.com",
    phone: "+9779847690076",
    company: "We Invest Global Pvt. Ltd.",
    address: "Bishalnagar, Kathmandu, Nepal",
};

export const termsSections: TermSection[] = [
    {
        id: "introduction-regulatory",
        title: "1. Introduction and Regulatory Framework",
        subsections: [
            { id: "the-company", title: "1.1. The Company" },
            { id: "governing-laws", title: "1.2. Governing Laws and Regulations" },
        ],
        content: [
            {
                type: "paragraph",
                title: "1.1. The Company",
                text: "We Invest Global Pvt. Ltd. is an investment company dedicated to fostering economic growth and innovation. Our mission is to create sustainable value by strategically investing capital, nurturing emerging enterprises, and empowering both individual and business visionaries with comprehensive knowledge, hands-on mentorship, and robust financial solutions. This document outlines our investment philosophy, the diverse services we offer, our unwavering commitment to regulatory compliance, and our core operational principles.",
            },
            {
                type: "paragraph",
                title: "1.2. Governing Laws and Regulations",
                text: "Our operations strictly adhere to all applicable laws and regulations set by the Government of Nepal and its regulatory bodies. This includes key legislation like the Companies Act, 2063 (2006) and the Securities Act, 2063 (2007), which govern company operations and securities markets. We also comply with specialized rules such as the Specialized Investment Fund Rules, 2075 (2019), and industry-specific acts like the Industrial Enterprises Act, 2076 (2020). Measures against money laundering and terrorist financing are mandated by the Money Laundering Prevention Act, 2064 (2008). Furthermore, client and data privacy are safeguarded by the Consumer Protection Act, 2075 (2018) and the Individual Privacy Act, 2075 (2018). Our adherence to investment advisory and market regulations is ensured through relevant directives and guidelines issued by the appropriate authorities.",
            },
        ],
    },
    {
        id: "scope-of-services",
        title: "2. Scope of Services",
        content: [
            {
                type: "paragraph",
                text: "We Invest Global Pvt. Ltd. offers a comprehensive suite of financial and investment services designed to support both individuals and businesses at various stages of their growth and investment journey. Our core services include:",
            },
            {
                type: "list",
                items: [
                    "Venture Capital (VC) and Private Equity (PE) Investments: Strategic capital provision for high-growth companies.",
                    "Startup and Entrepreneur Ecosystem Support: End-to-end guidance and resources for Aspiring Founders, Startup Teams, and Scaleups. This encompasses:",
                ],
            },
            {
                type: "list",
                items: [
                    "School of Startups: A dynamic program designed to accelerate early-stage ventures, featuring:",
                ],
            },
            {
                type: "list",
                items: [
                    "Acceleration Program: An intensive, mentor-driven initiative providing access to industry experts, investors, and strategic resources.",
                    "Co-working Environment: A collaborative workspace fostering innovation, networking, and community.",
                ],
            },
            {
                type: "list",
                items: [
                    "Comprehensive Startup Support: Expert guidance covering all aspects of business development, including:",
                ],
            },
            {
                type: "list",
                items: [
                    "Business Strategy: Crafting robust business models and market entry strategies.",
                    "Marketing and Branding: Tailored plans to enhance visibility and customer engagement.",
                    "Legal and Compliance: Expert advice to navigate regulatory requirements and protect intellectual property.",
                ],
            },
            {
                type: "list",
                items: [
                    "Incubation Classes: Sessions designed to inspire creativity and equip entrepreneurs with cutting-edge skills, covering:",
                ],
            },
            {
                type: "list",
                items: [
                    "Industry Trends: Insights into emerging technologies and market dynamics.",
                    "Skill Development: Training in leadership, financial management, and innovation.",
                ],
            },
            {
                type: "list",
                items: [
                    "Pitch and Presentation Coaching: Helping startups craft compelling pitches to captivate investors, partners, and stakeholders through storytelling techniques and delivery training.",
                    "Mentorship and Strategic Guidance: Hands-on support from experienced teams to refine vision and achieve sustainable growth, including insights on Product Development and Scaling Strategies.",
                    "Funding for Startups: Providing critical capital to fuel early-stage ventures, specifically:",
                ],
            },
            {
                type: "list",
                items: [
                    "Seed and Early-Stage Investment: Flexible financing tailored to startup needs.",
                    "Investor Connections: Access to our extensive network of investors to secure additional funding.",
                ],
            },
            {
                type: "list",
                items: [
                    "Fund Pooling and Management: For collective investment schemes.",
                    "Investment Education and Literacy: Various programs and resources dedicated to empowering individual investors with in-depth knowledge about the stock market and the general investment industry.",
                    "Portfolio Management Services (PMS): Tailored services for individual investors seeking to grow their wealth through strategic, high-potential investment opportunities.",
                    "Stock Market and General Investment Industry Participation: Facilitating involvement on regulated exchanges.",
                    "Investment Advisory Services: Professional advice backed by thorough research.",
                ],
            },
        ],
    },
    {
        id: "client-eligibility",
        title: "3. Client Eligibility and Onboarding",
        content: [
            {
                type: "paragraph",
                text: "Client eligibility for our services and funds is determined by We Invest Global Pvt. Ltd., strictly adhering to Nepalese laws and our internal policies. This often includes requirements such as Accredited Investor Status for specialized funds, meeting Minimum Investment Thresholds, and possessing the Legal Capacity to enter into contracts. As a regulated entity, we are legally bound by the Money Laundering Prevention Act, 2064. Therefore, all clients must complete stringent Know Your Customer (KYC) and Anti-Money Laundering (AML/CTF) verification procedures. We reserve the right to refuse or terminate relationships for non-compliance and will report any suspicious activities to the Financial Information Unit (FIU) as mandated by law.",
            },
        ],
    },
    {
        id: "investment-risks-acknowledgement",
        title: "4. Investment Risks and Client Acknowledgment",
        content: [
            {
                type: "paragraph",
                text: "All investments carry inherent risks, including the potential loss of capital, and it's important to remember that past performance doesn't guarantee future results. Venture Capital and Private Equity investments are particularly speculative due to their high risk of loss, illiquidity, long investment horizons, and concentration risk. General investment risks include Market, Liquidity, Credit, Interest Rate, Inflation, and Regulatory/Political Risks. Clients acknowledge their financial capacity to bear these risks and are solely responsible for understanding them. We provide detailed risk disclosures for each product or service, strongly advising clients to read them thoroughly and seek independent professional advice before making any investment decisions. As highlighted in our general investment disclaimer, it is crucial to carefully examine all relevant scheme documents and seek guidance from qualified professionals to grasp the legal, tax, and financial consequences of your investment decisions, ensuring they align with your financial objectives.",
            },
        ],
    },
    {
        id: "fees",
        title: "5. Fees",
        content: [
            {
                type: "paragraph",
                text: "All fees, including commissions, management fees, and administrative charges, will be disclosed in dedicated agreements before any services begin. Our fee structures strictly comply with all applicable regulatory guidelines.",
            },
        ],
    },
    {
        id: "confidentiality-data-protection",
        title: "6. Confidentiality and Data Protection",
        content: [
            {
                type: "paragraph",
                text: "We are committed to maintaining the highest level of confidentiality regarding all client personal, financial, and investment information. Our data protection practices are governed by the Individual Privacy Act, 2075 (2018) and other relevant Nepalese data protection laws. For a comprehensive understanding of how we collect, use, share, and protect your data, please refer to the detailed Privacy Policy section within this document.",
            },
        ],
    },
    {
        id: "client-responsibilities",
        title: "7. Client Responsibilities and Representations",
        content: [
            {
                type: "paragraph",
                text: "Clients are responsible for ensuring the accuracy of all information provided to the Company, including personal, financial, and investment details, and must promptly update us on any changes. You agree to comply with all applicable laws, including tax obligations related to your investments; the Company is not responsible for your tax liabilities. You are also expected to review all documents provided by the Company and raise any concerns. While we offer advice or manage portfolios, the ultimate investment decisions and their alignment with your financial goals and risk tolerance remain solely your responsibility.",
            },
        ],
    },
    {
        id: "communication-record-keeping",
        title: "8. Communication and Record Keeping",
        content: [
            {
                type: "paragraph",
                text: "All official communications between the Company and its clients will occur through designated, verifiable channels like registered email or secure online portals, Clients should always verify authenticity. The Company will maintain accurate records of all client transactions and communications as mandated by Nepalese laws.",
            },
        ],
    },
    {
        id: "governing-law-jurisdiction",
        title: "9. Governing Law and Jurisdiction",
        content: [
            {
                type: "paragraph",
                text: "This Agreement shall be governed by and construed under the laws of Nepal. Any dispute, controversy, or claim arising out of or in connection with this Agreement, including its existence, validity, interpretation, performance, breach, or termination, shall be exclusively resolved by the competent courts located in Kathmandu, Nepal.",
            },
        ],
    },
    {
        id: "severability",
        title: "10. Severability",
        content: [
            {
                type: "paragraph",
                text: "If any part of this Agreement is deemed invalid, illegal, or unenforceable by a court or regulatory authority with proper jurisdiction, this does not impact the validity, legality, or enforceability of the other provisions, which will continue to be in effect.",
            },
        ],
    },
];

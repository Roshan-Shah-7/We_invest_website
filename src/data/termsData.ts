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
    email: "legal@weinvest.com",
    phone: "1-800-INVEST-1",
    company: "Legal Department",
    address: "123 Investment Ave\nSuite 500\nNew York, NY 10001",
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
                text: "We Invest Private Limited is a Nepalese investment company dedicated to fostering economic growth and innovation. We aim to create sustainable value by strategically investing capital, nurturing emerging enterprises, and empowering investors with knowledge and robust financial solutions. This document details our investment philosophy, services, regulatory compliance, and core operational principles.",
            },
            {
                type: "paragraph",
                title: "1.2. Governing Laws and Regulations",
                text: "Our operations strictly adhere to all applicable laws and regulations set by the Government of Nepal and its regulatory bodies. This encompasses key legislation like the Companies Act, 2063 (2006) and Securities Act, 2063 (2007), which govern company operations and securities markets. We also comply with specialized rules such as the Specialized Investment Fund Rules, 2075 (2019), and industry-specific acts like the Industrial Enterprises Act, 2076 (2020). Anti-money laundering (AML/CFT) measures are mandated by the Money Laundering Prevention Act, 2064 (2008), while client and data privacy are safeguarded by the Consumer Protection Act, 2075 (2018), and the Individual Privacy Act, 2075 (2018). Furthermore, our adherence to investment advisory and market regulations is ensured through the Nepal Rastra Bank Act, 2058 (2002), and specific SEBON Directives and Guidelines.",
            },
        ],
    },
    {
        id: "scope-of-services",
        title: "2. Scope of Services",
        content: [
            {
                type: "paragraph",
                text: "Our company offers comprehensive financial and investment services, including Venture Capital (VC) and Private Equity (PE) Investments in high-growth companies and managing specialized funds. We provide Startup and Entrepreneur Ecosystem Support through advice, mentorship, and facilitating access to capital. Our services also encompass Fund Pooling and Management for collective investment schemes. We are dedicated to Investment Education and Literacy through various programs. Additionally, we offer tailored Portfolio Management Services (PMS), facilitate Stock Market and General Investment Industry Participation on NEPSE, and provide professional Investment Advisory Services based on thorough research.",
            },
        ],
    },
    {
        id: "client-eligibility",
        title: "3. Client Eligibility and Onboarding",
        content: [
            {
                type: "paragraph",
                text: "Client eligibility for our services and funds is determined by the Company, strictly adhering to Nepalese laws and internal policies. This often includes requirements such as Accredited Investor Status for specialized funds, meeting Minimum Investment Thresholds, and possessing the Legal Capacity to enter into contracts. As a regulated entity, we are legally bound by the Money Laundering Prevention Act, 2064, requiring all clients to complete stringent Know Your Customer (KYC) and Anti-Money Laundering (AML/CTF) verification procedures. We reserve the right to refuse or terminate relationships for non-compliance and will report suspicious activities to the Financial Information Unit (FIU) at Nepal Rastra Bank as mandated by law.",
            },
        ],
    },
    {
        id: "investment-risks-acknowledgement",
        title: "4. Investment Risks and Client Acknowledgement",
        content: [
            {
                type: "paragraph",
                text: "All investments carry inherent risks, including potential loss of capital, and past performance doesn't guarantee future results. Venture Capital and Private Equity investments are particularly speculative due to the high risk of loss, illiquidity, long investment horizons, and concentration risk. General investment risks include Market, Liquidity, Credit, Interest Rate, Inflation, and Regulatory/Political Risks. Clients acknowledge their financial capacity to bear these risks and are responsible for understanding them. We provide detailed risk disclosures for each product or service, strongly advising clients to read them thoroughly and seek independent professional advice before investing.",
            },
        ],
    },
    {
        id: "fees",
        title: "5. Fees",
        content: [
            {
                type: "paragraph",
                text: "All fees, including commissions, management fees, and administrative charges, will be disclosed in dedicated agreements before services begin. Our fee structures strictly comply with guidelines from the Securities Board of Nepal (SEBON) and other relevant regulatory authorities.",
            },
        ],
    },
    {
        id: "confidentiality-data-protection",
        title: "6. Confidentiality and Data Protection",
        content: [
            {
                type: "paragraph",
                text: "We are committed to maintaining the highest level of confidentiality regarding all client personal, financial, and investment information, strictly adhering to the Individual Privacy Act, 2075 (2018), and other relevant Nepalese data protection laws.",
            },
            {
                type: "paragraph",
                text: "Your confidential information will not be disclosed to unauthorized third parties unless legally mandated by court order or regulatory authority like SEBON, Nepal Rastra Bank, or FIU, necessary to provide agreed-upon services (with parties also bound by confidentiality), with your explicit written consent, to prevent illicit activities, or during corporate restructuring where equivalent confidentiality obligations are in place.",
            },
            {
                type: "paragraph",
                text: "We utilize robust technical, administrative, and physical security measures to protect your data from unauthorized access, alteration, disclosure, or destruction, complying fully with the Individual Privacy Act, 2075 (2018). By using our services, you consent to the collection, processing, and secure storage of your data as required for service provision, contractual obligations, and legal compliance.",
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
                text: "All official communications between the Company and its clients will occur through designated, verifiable channels like registered email or secure online portals; clients should always verify authenticity. The Company will maintain accurate records of all client transactions and communications as mandated by Nepalese laws.",
            },
        ],
    },
    {
        id: "amendments-to-terms",
        title: "9. Amendments to Terms and Conditions",
        content: [
            {
                type: "paragraph",
                text: "The Company reserves the right to amend, modify, or update these Terms and Conditions and Investment Policy at any time, in response to changes in laws, regulations, market practices, or business needs. Any such amendments will be effective immediately upon their publication on our official website and/or communication to clients through appropriate channels. Your continued use of our services following such amendments constitutes your unequivocal acceptance of the revised terms.",
            },
        ],
    },
    {
        id: "governing-law-jurisdiction",
        title: "10. Governing Law and Jurisdiction",
        content: [
            {
                type: "paragraph",
                text: "This Agreement shall be governed by and construed under the laws of Nepal. Any dispute, controversy, or claim arising out of or in connection with this Agreement, including its existence, validity, interpretation, performance, breach, or termination, shall be exclusively resolved by the competent courts located in Kathmandu, Nepal.",
            },
        ],
    },
    {
        id: "severability",
        title: "11. Severability",
        content: [
            {
                type: "paragraph",
                text: "If any part of this Agreement is deemed invalid, illegal, or unenforceable by a court or regulatory authority with proper jurisdiction, this does not impact the validity, legality, or enforceability of the other provisions, which will continue to be in effect.",
            },
        ],
    },
];

export interface PrivacyContentBlock {
    type: 'paragraph' | 'list' | 'highlight' | 'grid-list';
    text?: string;
    items?: string[];
    title?: string;
    color?: 'blue' | 'yellow' | 'red' | 'green';
    gridItems?: { title: string; description: string; }[];
}

export interface PrivacySection {
    id: string;
    title: string;
    icon: string;
    content: PrivacyContentBlock[];
    subsections?: { id: string; title: string }[];
}

export const lastUpdated: string = "June 1, 2025";
export const effectiveDate: string = "June 1, 2025";

export const contactDetails = {
    email: "investwe3@gmail.com",
    phone: ["+977-9851408600", "+977-9828240210"],
    company: "We Invest Global Pvt. Ltd.",
    address: "Bishalnagar, Kathmandu, Nepal",
};

export const privacyPolicyMetadata = {
    regulatoryBodies: ["Securities Board of Nepal (SEBON)", "Nepal Rastra Bank"],
    applicableLaws: ["Money Laundering Prevention Act, 2064 (2008)", "Consumer Protection Act, 2075 (2018)"],
    version: "1.0",
    documentId: "WIPL-IPS-2025-06-01", // Changed to IPS
    jurisdiction: "Nepal",
};

export const privacyPolicySections: PrivacySection[] = [
    {
        id: "introduction-commitment",
        title: "1. Introduction and Our Commitment to Privacy",
        icon: "Shield",
        content: [
            {
                type: "paragraph",
                text: "Your privacy is paramount to We Invest Global Pvt. Ltd. This Privacy Policy outlines our comprehensive information practices, detailing how we collect, use, share, and protect your personal data. We're committed to upholding the highest standards of transparency and data protection, strictly adhering to all applicable Nepalese laws, including the Individual Privacy Act, 2075 (2018).",
            },
            {
                type: "paragraph",
                text: "Generally, you can visit the public sections of our website without revealing your identity or providing any personal information. However, to offer our full range of services or fulfill your specific requests, we may need certain details from you. We'll always inform you how we'll use your information before collecting it, and we'll respect your preferences if you don't wish to be contacted beyond your immediate requests. If you provide us with personal information about another individual, we'll assume you have their express permission to do so.",
            },
        ],
    },
    {
        id: "information-we-collect",
        title: "2. Information We Collect",
        icon: "Database",
        content: [
            {
                type: "paragraph",
                text: "We collect various types of information to provide and improve our services, manage our business operations, and comply with legal obligations. This information may include:",
            },
            {
                type: "list",
                items: [
                    "Personal Identification Information: Name, address (residential and professional), email address, phone number, date of birth, nationality, gender, photograph, and copies of identification documents (like citizenship, passport).",
                    "Financial Information: Bank account details, payment information (like credit/debit card details for transactions), income level, investment experience, financial goals, risk tolerance, and asset allocation details.",
                    "Professional and Qualifications Information: Details related to your professional background and qualifications, relevant for client onboarding or partnership evaluations.",
                    "Transaction Information: Details of your investments, services utilized, transaction history, account balances, and communications related to your transactions.",
                    "Technical and Usage Information: IP address, browser type, operating system, pages visited, time spent on pages, referral source, and general usage patterns on our website and digital platforms. This may be collected through cookies, web beacons, and similar technologies (please refer to our Cookie Policy, if separately published, for more details).",
                    "Information about Third Parties: If you provide us with personal information about another individual (like a spouse or work colleague for joint applications or referrals), we assume that you have obtained their express permission to do so and that they understand and consent to the terms of this Privacy Policy.",
                ],
            },
            {
                type: "paragraph",
                title: "How Information is Collected:",
                text: "We collect information through various means, including:",
            },
            {
                type: "list",
                items: [
                    "Directly from You: When you fill out forms on our website (like \"Apply Now,\" \"Contact Us\"), subscribe to newsletters, create an account, engage in our services (like PMS, startup support), or communicate with us via phone, email, or in person.",
                    "From Our Website and Digital Interactions: Through automated collection methods as you navigate and interact with our website.",
                    "From Third Parties: From our business partners, financial institutions, and public sources, where legally permissible and necessary for service provision or regulatory compliance.",
                    "Call Monitoring and Recording: Certain web transactions or interactions may involve you calling us or us calling you. Please be aware that it is our general practice to monitor and, in some cases, record such calls for staff training or quality assurance purposes.",
                    "Personalized URL Link Tracking: On occasion, we may personalize and customize websites for certain visitors, often via a personalized URL in an email or a direct link. When you visit these customized sites, we may collect information about your visit to better tailor the site to your interests based on your previous interactions with We Invest Global Pvt. Ltd. and information you have provided to us.",
                ],
            },
        ],
    },
    {
        id: "how-we-use-your-information",
        title: "3. How We Use Your Information",
        icon: "Settings",
        content: [
            {
                type: "paragraph",
                text: "We utilize the information collected for several purposes, mainly to effectively provide our services, manage our operations, and fulfill our legal and regulatory requirements. Our applications include:",
            },
            {
                type: "list",
                items: [
                    "Fulfilling Transaction and Service Requests:",
                ],
            },
            {
                type: "list",
                items: [
                    "Processing your applications for investment services (such as Venture Capital, Private Equity, PMS, and Fund Pooling).",
                    "Managing your investment portfolio and offering personalized financial solutions.",
                    "Delivering our Startup and Entrepreneur Ecosystem Support, including the School of Startups (Acceleration Program, Co-working Space), Comprehensive Startup Support (Business Strategy, Marketing/Branding, Legal/Compliance), Incubation Classes (Industry Trends, Skills Development), Pitch and Presentation Coaching, and Mentorship and Strategic Guidance (Product Development, Scaling Strategies).",
                    "Facilitating Funding for Startups (Seed and Early-Stage Investment, Investor Networking).",
                    "Providing Investment Education and Literacy programs.",
                    "Addressing your inquiries, requests for information, or callbacks.",
                ],
            },
            {
                type: "list",
                items: [
                    "Marketing and Communication:",
                ],
            },
            {
                type: "list",
                items: [
                    "Sending you newsletters, investment opportunity updates, market insights, and promotional materials regarding services from We Invest Global Pvt. Ltd. that may interest you. You may opt out of marketing communications at any time.",
                    "Customizing website content and personalized communications (such as through Personalized URL Links) based on your interests and prior interactions.",
                ],
            },
            {
                type: "list",
                items: [
                    "Business Relationship Management:",
                ],
            },
            {
                type: "list",
                items: [
                    "Managing and nurturing our relationships with We Invest Global Pvt. Ltd. business partners and suppliers.",
                    "Overseeing contractual obligations and facilitating transactions with partners and suppliers.",
                ],
            },
            {
                type: "list",
                items: [
                    "Service Improvement and Development:",
                ],
            },
            {
                type: "list",
                items: [
                    "Monitoring and analyzing website and service usage to identify trends, enhance functionality, and develop new offerings.",
                    "Conducting staff training and ensuring quality assurance via call monitoring and recording.",
                    "Executing customer satisfaction surveys and market research.",
                ],
            },
            {
                type: "list",
                items: [
                    "Legal, Regulatory, and Compliance Obligations:",
                ],
            },
            {
                type: "list",
                items: [
                    "To comply with all applicable laws and regulations, including the Money Laundering Prevention Act, 2064 (2008), and the Individual Privacy Act, 2075 (2018).",
                    "To perform Know Your Customer (KYC) and Anti-Money Laundering (AML/CTF) verification procedures.",
                    "To report suspicious activities to the Financial Information Unit (FIU) as mandated by law.",
                    "To establish, exercise, or defend legal claims, and to enforce our Terms and Conditions.",
                    "To prevent illicit activities or fraud.",
                ],
            },
        ],
    },
    {
        id: "how-we-share-your-information",
        title: "4. How We Share Your Information",
        icon: "Share2",
        content: [
            {
                type: "paragraph",
                text: "We are committed to maintaining the highest level of confidentiality regarding all client personal, financial, and investment information. We do not disclose your confidential information to unauthorized third parties unless:",
            },
            {
                type: "list",
                items: [
                    "For Service Provision: When necessary to provide agreed-upon services. In such cases, information is shared with trusted internal departments, our We Invest Global Pvt. Ltd. Business Partners, financial institutions, shipping companies, postal or government authorities (like Customs authorities), and relevant regulatory bodies involved in the fulfillment of your request. All such parties are also bound by confidentiality obligations.",
                    "With Your Explicit Written Consent: We will share your information with third parties only when we have obtained your direct and unambiguous consent.",
                    "Legal and Regulatory Mandates: When legally mandated by a court order, subpoena, or directive from a regulatory authority with proper jurisdiction.",
                    "For Marketing Purposes (with Opt-Out): With selected third parties for marketing purposes, provided you have not opted out of such sharing.",
                    "Business Relationships: For administering and developing our business relationships, certain information may be shared with other Business Partners (subject to any confidentiality obligations) or with We Invest Global Pvt. Ltd. customers or prospects, particularly in B2B contexts.",
                    "Prevention of Illicit Activities: When essential to prevent illicit activities, fraud, or to protect the safety, rights, or property of We Invest Global Pvt. Ltd., our clients, or the public.",
                    "Corporate Restructuring: In the event of a merger, acquisition, or asset sale, your personal information may be transferred. In such cases, equivalent confidentiality obligations will be in place to safeguard your data.",
                ],
            },
        ],
    },
    {
        id: "data-security",
        title: "5. Data Security",
        icon: "Lock",
        content: [
            {
                type: "paragraph",
                text: "We Invest Global Pvt. Ltd. is deeply committed to protecting your personal information. We utilize robust technical, administrative, and physical security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. These measures are designed to ensure the confidentiality, integrity, and availability of your information and comply fully with the Individual Privacy Act, 2075 (2018).",
            },
            {
                type: "paragraph",
                text: "By using our services, you consent to the collection, processing, and secure storage of your data as required for service provision, fulfilling contractual obligations, and ensuring legal compliance.",
            },
        ],
    },
    {
        id: "data-retention",
        title: "6. Data Retention",
        icon: "Archive",
        content: [
            {
                type: "paragraph",
                text: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. For example, for Anti-Money Laundering/Combating the Financing of Terrorism (AML/CTF) compliance, we maintain records for a prescribed period. Once your data is no longer required, it will be securely destroyed or anonymized.",
            },
        ],
    },
    {
        id: "your-rights-responsibilities",
        title: "7. Your Rights and Responsibilities",
        icon: "UserCheck",
        content: [
            {
                type: "paragraph",
                text: "As a client or user of We Invest Global Pvt. Ltd.'s services, you have certain rights and responsibilities regarding your personal information:",
            },
            {
                type: "list",
                items: [
                    "Accuracy of Information: You are responsible for ensuring the accuracy of all information provided to the Company, including personal, financial, and investment details, and must promptly update us on any changes.",
                    "Review of Documents: You are expected to review all documents provided by the Company and raise any concerns.",
                    "Investment Decisions: While we offer advice or manage portfolios, the ultimate investment decisions and their alignment with your financial goals and risk tolerance remain solely your responsibility.",
                    "Opt-Out of Marketing: You have the right to opt out of receiving marketing communications from us.",
                    "Grievance Redressal: You have the right to complain to us if you believe your privacy rights have been violated. Our transparent and accessible grievance redressal mechanism ensures prompt and fair resolution of complaints (see Contact Details below).",
                ],
            },
        ],
    },
    {
        id: "changes-to-privacy-policy",
        title: "8. Changes to This Privacy Policy",
        icon: "RefreshCw",
        content: [
            {
                type: "paragraph",
                text: "This Privacy Policy may be updated periodically to reflect changes in our data practices, technology, legal requirements, or business needs. Any such amendments will be effective immediately upon their publication on our official website. A notice will be posted on our website homepage for 30 days whenever this privacy statement is changed in a material way. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
            },
        ],
    },
    {
        id: "contact-us",
        title: "9. Contact Us",
        icon: "Mail",
        content: [
            {
                type: "paragraph",
                text: "If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us.",
            },
        ],
    },
];

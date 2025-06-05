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
    phone: "+977-9847690076",
    company: "We Invest Global Private Limited",
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
        id: "investment-philosophy",
        title: "1. Investment Philosophy and Objectives",
        icon: "TrendingUp",
        content: [
            {
                type: "paragraph",
                text: "Our investment philosophy centers on rigorous research, disciplined execution, and a long-term perspective to identify opportunities offering compelling risk-adjusted returns and contributing to Nepal's sustainable economic development. Our primary objectives for clients and managed funds include capital appreciation through strategic investments, income generation from suitable instruments, robust risk management to protect capital, and ecosystem development by actively supporting Nepal's promising startups and entrepreneurs.",
            },
        ],
    },
    {
        id: "investment-strategy",
        title: "2. Investment Strategy",
        icon: "Globe",
        subsections: [
            { id: "venture-capital-strategy", title: "2.1. Venture Capital and Private Equity Strategy" },
            { id: "pms-strategy", title: "2.2. Portfolio Management Services (PMS) Strategy" },
            { id: "fund-pooling-management-strategy", title: "2.3. Fund Pooling and Management Strategy" },
        ],
        content: [
            {
                type: "paragraph",
                text: "Our investment strategy is flexible, research-driven, and adapted to evolving market dynamics, encompassing the following key areas:",
            },
            {
                type: "paragraph",
                title: "2.1. Venture Capital and Private Equity Strategy",
                text: "We take an opportunistic sector focus (e.g., technology, renewable energy, healthcare) and primarily target early-stage and growth-stage companies with innovative models and strong potential. Our process involves exhaustive due diligence and active engagement to enhance portfolio value. We prioritize clear and feasible exit strategies (e.g., IPOs, M&A) with a typical investment horizon of 5-10 years.",
            },
            {
                type: "paragraph",
                title: "2.2. Portfolio Management Services (PMS) Strategy",
                text: "We develop customized portfolios for clients based on their financial goals, employing strategic and tactical asset allocation across equities (primarily NEPSE-listed), fixed income (government bonds, corporate debentures), and other regulated securities. We ensure diversification and conduct continuous monitoring and rebalancing to align with market dynamics and client objectives.",
            },
            {
                type: "paragraph",
                title: "2.3. Fund Pooling and Management Strategy",
                text: "We establish investment funds (e.g., Specialized Investment Funds, Mutual Funds) with well-defined mandates, risk parameters, and investor eligibility criteria by SEBON regulations, implementing stringent fund governance structures.",
            },
        ],
    },
    {
        id: "risk-management-framework",
        title: "3. Risk Management Framework",
        icon: "Shield",
        subsections: [
            { id: "investment-risk-management", title: "3.1. Investment Risk Management" },
            { id: "operational-risk-management", title: "3.2. Operational Risk Management" },
            { id: "compliance-regulatory-limits", title: "3.3. Compliance with Regulatory Limits" },
        ],
        content: [
            {
                type: "paragraph",
                text: "The Company employs a robust and dynamic risk management framework to identify, assess, monitor, and mitigate various investment and operational risks.",
            },
            {
                type: "paragraph",
                title: "3.1. Investment Risk Management",
                text: "This includes pre-investment due diligence, diversification across assets, sectors, and companies, disciplined position sizing, diligent liquidity management as per regulatory requirements, and periodic stress testing of portfolios.",
            },
            {
                type: "paragraph",
                title: "3.2. Operational Risk Management",
                text: "We implement robust internal controls, ensure continuous compliance monitoring with laws and policies, and maintain comprehensive Business Continuity Planning (BCP) for uninterrupted operations.",
            },
            {
                type: "paragraph",
                title: "3.3. Compliance with Regulatory Limits",
                text: "We strictly adhere to all investment limits, restrictions, and prudential norms stipulated by SEBON, Nepal Rastra Bank, and other regulatory bodies.",
            },
        ],
    },
    {
        id: "portfolio-reporting-transparency",
        title: "4. Portfolio Reporting and Transparency",
        icon: "FileText",
        content: [
            {
                type: "paragraph",
                text: "Clients will receive regular, comprehensive, and timely reports on their investment performance, portfolio valuation, asset allocation, and transaction history, as per agreed frequencies and regulatory requirements. We are committed to providing clear, concise, and accurate disclosure of all relevant information, including fees, risks, and investment strategies, to enable informed client decisions.",
            },
        ],
    },
    {
        id: "ethical-conduct-fiduciary-duty",
        title: "5. Ethical Conduct and Fiduciary Duty",
        icon: "User",
        content: [
            {
                type: "paragraph",
                text: "The Company and its employees are bound by a stringent Code of Conduct emphasizing integrity, professionalism, fairness, and ethical behavior. For managed portfolios and funds, we operate under a fiduciary duty to act in the best interests of our clients and fund unitholders. We have established policies to identify, avoid, or manage potential conflicts of interest, and any unavoidable conflicts will be disclosed to affected clients.",
            },
        ],
    },
    {
        id: "aml-ctf-policy",
        title: "6. Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) Policy",
        icon: "Lock",
        content: [
            {
                type: "paragraph",
                text: "The Company maintains a zero-tolerance policy towards money laundering and terrorist financing, fully compliant with the Money Laundering Prevention Act, 2064 (2008), its rules, and directives from Nepal Rastra Bank (FIU) and SEBON. Key aspects include a risk-based approach to Customer Due Diligence (CDD) (including EDD for high-risk clients), continuous transaction monitoring for suspicious patterns, prompt Suspicious Transaction Reporting (STR) to the FIU without tipping off the client, record keeping for the prescribed period (currently 5 years), and regular staff training on AML/CTF policies.",
            },
        ],
    },
    {
        id: "consumer-protection-grievance",
        title: "7. Consumer Protection and Grievance Redressal Mechanism",
        icon: "Bell",
        content: [
            {
                type: "paragraph",
                text: "The Company upholds client rights as consumers of financial services, as enshrined in the Consumer Protection Act, 2075 (2018). We maintain a transparent and accessible grievance redressal mechanism for prompt and fair resolution of complaints.",
            },
            {
                type: "list",
                items: [
                    "<strong>Submission:</strong> Clients can submit complaints via email (investwe3@gmail.com), phone (+9779847690076), our secure online form, or by writing to our registered office.",
                    "<strong>Acknowledgement:</strong> All complaints will be acknowledged within 1 business day.",
                    "<strong>Investigation and Resolution:</strong> We will investigate and resolve complaints within a maximum of 2-3 business days from acknowledgement.",
                    "<strong>Escalation:</strong> If unsatisfied, clients have the right to escalate the matter to the Securities Board of Nepal (SEBON) or other relevant regulatory bodies.",
                ],
            },
        ],
    },
];

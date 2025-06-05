import VCIP from '@/assets/investment-program/VCIP.jpeg';
import PoolFund from '@/assets/investment-program/pool fund.jpeg';
import Project from '@/assets/investment-program/projectInvest.jpeg';
import TimeBased from '@/assets/investment-program/timeBase.jpeg';
import { StaticImageData } from 'next/image'; // Import StaticImageData

export interface Program {
    id: string;
    title: string;
    overview: string;
    keyFeatures: string[];
    benefits: string[];
    imageUrl: StaticImageData; // Corrected type for imageUrl
}

export const investmentPrograms: Program[] = [
    {
        id: 'vcip',
        title: 'Venture Capital Investment Programme (VCIP)',
        overview: 'The Venture Capital Investment Programme (VCIP) is a flagship initiative targeting early-stage and growth-stage startups with high potential for market disruption, particularly in technology-driven sectors. VCIP bridges the funding gap for innovative ventures, providing capital and strategic support to fuel rapid growth.',
        keyFeatures: [
            'Predictable Returns: Fixed returns based on group selection.',
            'Transparent Process: Third - party audits ensure accountability.',
            'Equal Opportunity: Randomised draw for fair participant selection.',
            'Capital Protection: Full initial investment returned upon selection.'
        ],
        benefits: [
            'Registration & KYC: Submit details and documentation.',
            'Slot Allotment: Enter selection pool and await draw notification.',
            'Investment Confirmation: Finalise investment and receive agreements.',
            'Capital Deployment: Funds invested in pre-screened ventures.',
            'Payout: Receive structured returns upon term completion.',
        ],
        imageUrl: VCIP, // Using imported image module
    },
    {
        id: 'pool-funding',
        title: 'Our Pool Funding Programme',
        overview: 'Our Pool Funding programme allows multiple investors to combine resources into a single, diversified investment vehicle, offering a stable 12% annual return. This programme is ideal for risk-averse investors seeking consistent income with lower volatility.',
        keyFeatures: [
            'Pooled Capital: Investors contribute to a collective fund, enabling access to large-scale opportunities in real estate, equities, and fixed-income assets.',
            'Fixed Return: Tentaively 12% annual return, distributed quarterly, based on the fund’s performance.',
            'Diversified Portfolio: Investments spread across multiple asset classes to mitigate risk.',
            'Flexible Entry: Minimum investment of Rs.5,00,000, suitable for both individual and institutional investors.',
        ],
        benefits: [
            'Provides predictable income with minimal risk exposure.',
            'Democratizes access to high-value investments for smaller investors.',
            'Simplifies portfolio management through professional fund oversight.',
        ],
        imageUrl: PoolFund, // Using imported image module
    },
    {
        id: 'project-wise',
        title: 'Project-Wise Funding (Equity-Based)',
        overview: 'The Project-Wise Funding programme offers targeted equity investments in specific projects within established or emerging businesses. This programme is designed for investors seeking direct involvement in high-potential initiatives with clear milestones and outcomes.',
        keyFeatures: [
            'Project-Specific Investments: Funding allocated to individual projects, such as product launches, infrastructure development, or market expansion, with investments starting at Rs.50,000.',
            'Equity Stakes: Investors receive equity in the project or parent company, typically ranging from 5% and above,  depending on the project and also depending on the investment can range from few lakhs to even crores..',
            'Milestone-Based Funding: Capital disbursed in tranches tied to project milestones, ensuring accountability and progress.',
            'Sector Focus: Technology, real estate, agriculture, and renewable energy projects with strong ROI potential.',
        ],
        benefits: [
            'Allows investors to align with specific, high-impact projects.',
            'Offers transparency through milestone-based funding and clear equity terms.',
            'Provides potential for significant returns tied to project success.',
        ],
        imageUrl: Project, // Using imported image module
    },
    {
        id: 'time-based',
        title: 'Time-Based Investment (Lock-In Periods)',
        overview: 'Our Time-Based Investment programme offers fixed-term investment options with lock-in periods of 1, 1.5, or 2 years, designed for investors seeking short- to medium-term commitments with competitive returns. This programme balances flexibility and stability for diverse financial goals.',
        keyFeatures: [
            'Lock-In Periods: Choose from 1-year, 1.5-year, or 2-year terms, with returns varying by duration (ranging from 12  percent and higher, based on market conditions).',
            'Asset Allocation: Investments in a mix of fixed-income securities, real estate, and equity market instruments for balanced growth.',
            'Minimum Investment: Rs.7,00,000, with options for reinvestment or withdrawal upon maturity.',
            'Risk Management: Conservative asset selection and diversification to minimize volatility during the lock-in period.',
        ],
        benefits: [
            'Offers predictable returns with short- to medium-term commitments.',
            'Provides flexibility to match investment horizons with financial planning needs.',
            'Ensures capital preservation through diversified, low-risk asset allocation.',
        ],
        imageUrl: TimeBased, // Using imported image module
    },
];

export const whyChooseUsPoints: string[] = [
    'Tailored Solutions: Programmes customized to your risk tolerance, financial goals, and investment horizon.',
    'Expert Management: Professional oversight by our experienced team, ensuring optimal performance and risk mitigation.',
    'High-Impact Opportunities: Access to innovative ventures and stable assets that drive both financial and societal returns.',
    'Transparency: Clear terms, milestone-based tracking, and regular performance updates for full confidence.',
];

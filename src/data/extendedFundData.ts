import type { FundPool } from "./fundPoolsData";

// Extended interface with additional financial data
export interface ExtendedFundPool extends FundPool {
    currentValue: string;
    ytdReturn: number;
    oneYearReturn: number;
    threeYearReturn: number;
    expenseRatio: number;
    minimumInvestment: string;
    riskLevel: "Low" | "Medium" | "High";
    riskScore: number;
}

// Mock extended data
export const mockExtendedFundData: { [key: number]: Omit<ExtendedFundPool, keyof FundPool | "minimumInvestment"> } = {
    1: {
        currentValue: "₹125.4M",
        ytdReturn: 12.5,
        oneYearReturn: 18.3,
        threeYearReturn: 15.7,
        expenseRatio: 0.75,
        riskLevel: "High",
        riskScore: 8,
    },
    2: {
        currentValue: "₹89.2M",
        ytdReturn: 8.9,
        oneYearReturn: 14.2,
        threeYearReturn: 12.1,
        expenseRatio: 0.85,
        riskLevel: "Medium",
        riskScore: 6,
    },
    3: {
        currentValue: "₹67.8M",
        ytdReturn: 6.7,
        oneYearReturn: 11.4,
        threeYearReturn: 9.8,
        expenseRatio: 0.65,
        riskLevel: "Medium",
        riskScore: 5,
    },
    4: {
        currentValue: "₹156.3M",
        ytdReturn: 15.2,
        oneYearReturn: 22.1,
        threeYearReturn: 18.9,
        expenseRatio: 0.7,
        riskLevel: "Medium",
        riskScore: 6,
    },
    5: {
        currentValue: "₹78.9M",
        ytdReturn: 9.8,
        oneYearReturn: 16.7,
        threeYearReturn: 13.4,
        expenseRatio: 0.95,
        riskLevel: "High",
        riskScore: 7,
    },
    6: {
        currentValue: "₹92.1M",
        ytdReturn: 11.3,
        oneYearReturn: 17.8,
        threeYearReturn: 14.6,
        expenseRatio: 0.8,
        riskLevel: "Medium",
        riskScore: 6,
    },
    7: {
        currentValue: "₹134.7M",
        ytdReturn: 13.9,
        oneYearReturn: 19.5,
        threeYearReturn: 16.2,
        expenseRatio: 0.75,
        riskLevel: "Medium",
        riskScore: 6,
    },
    8: {
        currentValue: "₹198.4M",
        ytdReturn: 16.8,
        oneYearReturn: 24.3,
        threeYearReturn: 20.1,
        expenseRatio: 0.85,
        riskLevel: "High",
        riskScore: 7,
    },
    9: {
        currentValue: "₹245.6M",
        ytdReturn: 7.2,
        oneYearReturn: 12.8,
        threeYearReturn: 10.5,
        expenseRatio: 0.55,
        riskLevel: "Low",
        riskScore: 3,
    },
    10: {
        currentValue: "₹167.3M",
        ytdReturn: 14.7,
        oneYearReturn: 21.2,
        threeYearReturn: 17.8,
        expenseRatio: 1.05,
        riskLevel: "High",
        riskScore: 9,
    },
};

export const getExtendedFundData = (fund: FundPool): ExtendedFundPool => {
    const data = mockExtendedFundData[fund.number];
    if (!data) {
        // Fallback or error handling if data for fund.number is not found
        console.warn(`No extended data found for fund number: ${fund.number}`);
        return {
            ...fund,
            currentValue: "N/A",
            ytdReturn: 0,
            oneYearReturn: 0,
            threeYearReturn: 0,
            expenseRatio: 0,
            minimumInvestment: fund.investmentRange.split(" - ")[0],
            riskLevel: "Medium", // Default risk level
            riskScore: 5, // Default risk score
        };
    }
    return {
        ...fund,
        ...data,
        minimumInvestment: fund.investmentRange.split(" - ")[0],
    };
};

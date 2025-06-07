import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';
import { LucideIcon } from "lucide-react";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
      _mongoClientPromise: Promise<MongoClient>;
    }
  }
}

export interface ImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface FundPoolData {
  number: number;
  title: string;
  problem: string;
  focus: string;
  goal: string;
  image: ImageData;
  color: string;
  category: string;
  investmentRange: string;
}

export interface Sector {
    id: string;
    name: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    marketSize: string;
    growth: number;
    risk: "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High" | "Very High";
    liquidity: "Low" | "Medium" | "Medium-High" | "High";
    volatility: "Low" | "Medium-Low" | "Medium" | "High" | "Very High";
    entryBarrier: "Low" | "Medium" | "Medium-High" | "High";
    timeHorizon: "Short-Medium" | "Medium" | "Medium-Long" | "Long";
    data: number[];
    yearlyData: { year: string; value: number }[];
    description: string;
    insights: string;
    opportunity: string;
    riskNote: string;
    radarData: number[];
    radarLabels: string[];
    keyMetrics: { label: string; value: string; trend: string }[];
    expertTips: string[];
}

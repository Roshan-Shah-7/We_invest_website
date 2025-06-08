import mongoose, { Schema, Document } from 'mongoose';

export interface IBusinessInvestment {
  companyName: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  investmentAmount: number;
  businessPlan: string; // Assuming this will be a URL or file path
  pitchDeck?: string; // Assuming this will be a URL or file path
  message?: string;
  yearsInOperation?: number;
  annualRevenue?: number;
  employees?: number;
  reasonForInvestment?: string;
  createdAt: Date;
}

const BusinessInvestmentSchema: Schema = new Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  businessPlan: { type: String },
  pitchDeck: { type: String },
  message: { type: String },
  yearsInOperation: { type: Number },
  annualRevenue: { type: Number },
  employees: { type: Number },
  reasonForInvestment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const BusinessInvestment = mongoose.models.BusinessInvestment || mongoose.model<IBusinessInvestment>('BusinessInvestment', BusinessInvestmentSchema);

export default BusinessInvestment;

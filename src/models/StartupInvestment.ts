import mongoose, { Schema, Document } from 'mongoose';

export interface IStartupInvestment {
  startupName: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  investmentAmount: number;
  pitchDeck: string; // Assuming this will be a URL or file path
  businessPlan: string; // Assuming this will be a URL or file path
  message: string;
  createdAt: Date;
}

const StartupInvestmentSchema: Schema = new Schema({
  startupName: { type: String, required: true },
  industry: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  pitchDeck: { type: String },
  businessPlan: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const StartupInvestment = mongoose.models.StartupInvestment || mongoose.model<IStartupInvestment>('StartupInvestment', StartupInvestmentSchema);

export default StartupInvestment;

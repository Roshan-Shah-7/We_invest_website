import mongoose, { Schema, Document } from 'mongoose';

export interface IStartupInvestment {
  startupName: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  investmentAmount: number;
  pitchDeck?: string; // Assuming this will be a URL or file path
  businessPlan?: string; // Assuming this will be a URL or file path (made optional as it's not always collected for startup)
  startupStage?: string;
  teamSize?: number; // Assuming teamSize is a number
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
  businessPlan: { type: String }, // Keep as string, but it will be optional in the interface
  startupStage: { type: String },
  teamSize: { type: Number },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const StartupInvestment = mongoose.models.StartupInvestment || mongoose.model<IStartupInvestment>('StartupInvestment', StartupInvestmentSchema);

export default StartupInvestment;

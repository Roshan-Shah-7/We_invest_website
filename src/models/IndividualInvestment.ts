import mongoose, { Schema, Document } from 'mongoose';

export interface IIndividualInvestment extends Document {
  fullName: string;
  email: string;
  phone: string;
  investmentAmount: number;
  occupation: string;
  message: string;
  createdAt: Date;
}

const IndividualInvestmentSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  occupation: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const IndividualInvestment = mongoose.models.IndividualInvestment || mongoose.model<IIndividualInvestment>('IndividualInvestment', IndividualInvestmentSchema);

export default IndividualInvestment;

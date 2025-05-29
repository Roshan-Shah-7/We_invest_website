// components/form/InvestmentForm.tsx
'use client';

import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Loader2, Send, CheckCircle, User, Briefcase, Zap, LucideIcon } from 'lucide-react';

type FormType = 'individual' | 'startup' | 'business';

interface InvestmentFormProps {
  formType: FormType;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  investmentAmount: string;
  message: string;
  sourceOfFunds?: string;
  investmentExperience?: string;
  companyName?: string;
  startupStage?: string;
  pitchDeck?: File | null;
  teamSize?: string;
  yearsInOperation?: string;
  annualRevenue?: string;
  businessPlan?: File | null;
}

const formTitles: Record<FormType, string> = {
  individual: 'Individual Investor Application',
  startup: 'Startup Funding Application',
  business: 'Business Investment Application',
};

const formIcons: Record<FormType, LucideIcon> = {
  individual: User,
  startup: Zap,
  business: Briefcase,
};

export default function InvestmentForm({ formType }: InvestmentFormProps) {
  const initialFormData: FormData = {
    fullName: '',
    email: '',
    phone: '',
    investmentAmount: '',
    message: '',
    sourceOfFunds: '',
    investmentExperience: 'none',
    companyName: '',
    startupStage: 'idea',
    pitchDeck: null,
    teamSize: '',
    yearsInOperation: '',
    annualRevenue: '',
    businessPlan: null,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type !== "application/pdf" && (name === "pitchDeck" || name === "businessPlan")) {
        setFileError("Please upload a PDF file.");
        setFormData(prev => ({ ...prev, [name]: null }));
        e.target.value = "";
        return;
      }
      setFileError(null);
      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      setFormData(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (fileError) return;

    setIsSubmitting(true);
    console.log(`Submitting ${formType} form data:`, formData);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
    const fileInputs = (e.target as HTMLFormElement).querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => (input as HTMLInputElement).value = "");

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const renderCommonFields = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="e.g., Jane Doe"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (USD)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              name="investmentAmount"
              id="investmentAmount"
              value={formData.investmentAmount}
              onChange={handleChange}
              required
              placeholder="e.g., 50000"
              className="w-full pl-8 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
            />
          </div>
        </div>
      </div>
    </>
  );

  const renderIndividualFields = () => (
    <div className="space-y-6 mb-6">
      <div>
        <label htmlFor="sourceOfFunds" className="block text-sm font-medium text-gray-700 mb-2">Source of Funds</label>
        <input
          type="text"
          name="sourceOfFunds"
          id="sourceOfFunds"
          value={formData.sourceOfFunds}
          onChange={handleChange}
          placeholder="e.g., Savings, Employment"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="investmentExperience" className="block text-sm font-medium text-gray-700 mb-2">Investment Experience</label>
        <select
          name="investmentExperience"
          id="investmentExperience"
          value={formData.investmentExperience}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
        >
          <option value="none">None</option>
          <option value="beginner">Beginner (Less than 1 year)</option>
          <option value="intermediate">Intermediate (1-5 years)</option>
          <option value="advanced">Advanced (More than 5 years)</option>
        </select>
      </div>
    </div>
  );

  const renderStartupFields = () => (
    <div className="space-y-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Startup Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="e.g., Innovatech"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="startupStage" className="block text-sm font-medium text-gray-700 mb-2">Startup Stage</label>
          <select
            name="startupStage"
            id="startupStage"
            value={formData.startupStage}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          >
            <option value="idea">Idea/Concept</option>
            <option value="prototype">Prototype/MVP</option>
            <option value="early-traction">Early Traction</option>
            <option value="growth">Growth Stage</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
          <input
            type="number"
            name="teamSize"
            id="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            placeholder="e.g., 5"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-700 mb-2">Pitch Deck (PDF)</label>
          <div className="relative">
            <input
              type="file"
              name="pitchDeck"
              id="pitchDeck"
              onChange={handleFileChange}
              accept=".pdf"
              className="w-full text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#00695C] file:text-white hover:file:bg-[#005546] transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessFields = () => (
    <div className="space-y-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyNameBusiness" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyNameBusiness"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="e.g., Acme Corp"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="yearsInOperation" className="block text-sm font-medium text-gray-700 mb-2">Years in Operation</label>
          <input
            type="number"
            name="yearsInOperation"
            id="yearsInOperation"
            value={formData.yearsInOperation}
            onChange={handleChange}
            placeholder="e.g., 5"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue (USD)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              name="annualRevenue"
              id="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              placeholder="e.g., 500000"
              className="w-full pl-8 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="businessPlan" className="block text-sm font-medium text-gray-700 mb-2">Business Plan (PDF)</label>
          <input
            type="file"
            name="businessPlan"
            id="businessPlan"
            onChange={handleFileChange}
            accept=".pdf"
            className="w-full text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#00695C] file:text-white hover:file:bg-[#005546] transition-colors"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
      <div className="flex items-center text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
        <div className="bg-[#00695C] p-2 rounded-lg mr-3">
          {React.createElement(formIcons[formType], { className: "w-6 h-6 text-white" })}
        </div>
        {formTitles[formType]}
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center border border-green-200">
          <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">Application submitted successfully!</p>
            <p className="text-sm">We will review your information and get back to you soon.</p>
          </div>
        </div>
      )}

      {fileError && (
        <div className="mb-6 p-4 bg-yellow-50 text-yellow-700 rounded-lg border border-yellow-200">
          <p className="font-medium">{fileError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-1">
        {renderCommonFields()}
        {formType === 'individual' && renderIndividualFields()}
        {formType === 'startup' && renderStartupFields()}
        {formType === 'business' && renderBusinessFields()}

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Any other details you'd like to share..."
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !!fileError}
          className="w-full bg-[#00695C] hover:bg-[#005546] text-white py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:ring-offset-2 transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Your information is secure. We never share your details with third parties.</p>
        <p className="mt-1">© 2023 Wee Invest Global Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

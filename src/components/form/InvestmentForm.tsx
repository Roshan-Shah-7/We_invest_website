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
  occupation?: string; // Added occupation field
  companyName?: string;
  startupStage?: string;
  industry?: string; // Added industry field
  pitchDeck?: File | string | null; // Can be File object or string (file name/URL)
  teamSize?: string;
  yearsInOperation?: string;
  annualRevenue?: string;
  businessPlan?: File | string | null; // Can be File object or string (file name/URL)
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
    occupation: '', // Added occupation to initial state
    companyName: '',
    startupStage: 'idea',
    industry: '', // Added industry to initial state
    pitchDeck: null,
    teamSize: '',
    yearsInOperation: '',
    annualRevenue: '',
    businessPlan: null,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof FormData, string>>>({}); // State for validation errors

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    // Common fields validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address format.';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) { // Basic phone number regex
      errors.phone = 'Invalid phone number format.';
      isValid = false;
    }
    if (!formData.investmentAmount.trim() || parseFloat(formData.investmentAmount) <= 0) {
      errors.investmentAmount = 'Investment Amount must be a positive number.';
      isValid = false;
    }

    // Type-specific fields validation
    if (formType === 'individual') {
      if (!formData.occupation?.trim()) {
        errors.occupation = 'Occupation is required.';
        isValid = false;
      }
    } else if (formType === 'startup') {
      if (!formData.companyName?.trim()) {
        errors.companyName = 'Startup Name is required.';
        isValid = false;
      }
      if (!formData.industry?.trim()) {
        errors.industry = 'Industry is required.';
        isValid = false;
      }
      if (!formData.startupStage?.trim()) {
        errors.startupStage = 'Startup Stage is required.';
        isValid = false;
      }
    } else if (formType === 'business') {
      if (!formData.companyName?.trim()) {
        errors.companyName = 'Company Name is required.';
        isValid = false;
      }
      if (!formData.industry?.trim()) {
        errors.industry = 'Industry is required.';
        isValid = false;
      }
      if (!formData.yearsInOperation?.trim() || parseFloat(formData.yearsInOperation) <= 0) {
        errors.yearsInOperation = 'Years in Operation must be a positive number.';
        isValid = false;
      }
      if (!formData.annualRevenue?.trim() || parseFloat(formData.annualRevenue) <= 0) {
        errors.annualRevenue = 'Annual Revenue must be a positive number.';
        isValid = false;
      }
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error for the field as user types
    if (validationErrors[name as keyof FormData]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type !== "application/pdf" && (name === "pitchDeck" || name === "businessPlan")) {
        setFileError("Please upload a PDF file.");
        setFormData(prev => ({ ...prev, [name]: null }));
        e.target.value = ""; // Clear the file input
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

    const isValid = validateForm();
    if (!isValid) {
      setSubmissionStatus('error'); // Indicate form has errors
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset submission status

    // Prepare data for submission: include formType and convert File objects to their names
    const dataToSend = { ...formData, formType }; // Include formType
    if (dataToSend.pitchDeck instanceof File) {
      dataToSend.pitchDeck = dataToSend.pitchDeck.name;
    }
    if (dataToSend.businessPlan instanceof File) {
      dataToSend.businessPlan = dataToSend.businessPlan.name;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData(initialFormData); // Clear form
        // Clear file inputs
        const fileInputs = (e.target as HTMLFormElement).querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => (input as HTMLInputElement).value = "");
      } else {
        console.error('Form submission error:', result);
        setSubmissionStatus('error');
        // Optionally, display specific error messages from the backend
        if (result.errors) {
          // This assumes result.errors is an object where keys are field names and values are error messages
          // Or an array of error objects, depending on how the backend formats it.
          // For now, let's just log it more prominently or set a state to display it.
          console.error('Backend validation errors:', result.errors);
          // You might want to set a state here to display these errors to the user
          // For example: setBackendErrors(result.errors);
        }
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 6000); // Hide status message after 6 seconds
    }
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
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {validationErrors.fullName && <p className="text-red-500 text-xs mt-1">{validationErrors.fullName}</p>}
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
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
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
              placeholder="+977-9812345678"
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">Investment Amount (NPR)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">Rs</span>
            </div>
            <input
              type="number"
              name="investmentAmount"
              id="investmentAmount"
              value={formData.investmentAmount}
              onChange={handleChange}
              required
              placeholder="e.g., 50000"
              className={`w-full pl-8 px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.investmentAmount ? 'border-red-500' : 'border-gray-300'}`}
            />
            {validationErrors.investmentAmount && <p className="text-red-500 text-xs mt-1">{validationErrors.investmentAmount}</p>}
          </div>
        </div>
      </div>
    </>
  );

  const renderIndividualFields = () => (
    <div className="space-y-6 mb-6">
      <div>
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          value={formData.occupation || ''} // Ensure it's a string for input value
          onChange={handleChange}
          required // Make it required as per the schema
          placeholder="e.g., Engineer, Entrepreneur"
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.occupation ? 'border-red-500' : 'border-gray-300'}`}
        />
        {validationErrors.occupation && <p className="text-red-500 text-xs mt-1">{validationErrors.occupation}</p>}
      </div>
      <div>
        <label htmlFor="sourceOfFunds" className="block text-sm font-medium text-gray-700 mb-2">Source of Funds</label>
        <input
          type="text"
          name="sourceOfFunds"
          id="sourceOfFunds"
          value={formData.sourceOfFunds || ''}
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
            name="companyName" // This maps to startupName in backend
            id="companyName"
            value={formData.companyName || ''}
            onChange={handleChange}
            required
            placeholder="e.g., Innovatech"
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.companyName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {validationErrors.companyName && <p className="text-red-500 text-xs mt-1">{validationErrors.companyName}</p>}
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <input
            type="text"
            name="industry"
            id="industry"
            value={formData.industry || ''}
            onChange={handleChange}
            required
            placeholder="e.g., FinTech, AI, Healthcare"
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.industry ? 'border-red-500' : 'border-gray-300'}`}
          />
          {validationErrors.industry && <p className="text-red-500 text-xs mt-1">{validationErrors.industry}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="startupStage" className="block text-sm font-medium text-gray-700 mb-2">Startup Stage</label>
          <select
            name="startupStage"
            id="startupStage"
            value={formData.startupStage}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.startupStage ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="idea">Idea/Concept</option>
            <option value="prototype">Prototype/MVP</option>
            <option value="early-traction">Early Traction</option>
            <option value="growth">Growth Stage</option>
          </select>
          {validationErrors.startupStage && <p className="text-red-500 text-xs mt-1">{validationErrors.startupStage}</p>}
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
          <input
            type="number"
            name="teamSize"
            id="teamSize"
            value={formData.teamSize || ''}
            onChange={handleChange}
            placeholder="e.g., 5"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-700 mb-2">Pitch Deck (PDF)</label>
          <div className="relative">
            <input
              type="file"
              name="pitchDeck"
              id="pitchDeck"
              onChange={handleFileChange}
              accept=".pdf"
              className={`w-full text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#00695C] file:text-white hover:file:bg-[#005546] transition-colors ${fileError ? 'border-red-500' : 'border-gray-300'}`}
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
            value={formData.companyName || ''}
            onChange={handleChange}
            required
            placeholder="e.g., Acme Corp"
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.companyName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {validationErrors.companyName && <p className="text-red-500 text-xs mt-1">{validationErrors.companyName}</p>}
        </div>
        <div>
          <label htmlFor="industryBusiness" className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <input
            type="text"
            name="industry"
            id="industryBusiness"
            value={formData.industry || ''}
            onChange={handleChange}
            required
            placeholder="e.g., Manufacturing, Retail, Services"
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.industry ? 'border-red-500' : 'border-gray-300'}`}
          />
          {validationErrors.industry && <p className="text-red-500 text-xs mt-1">{validationErrors.industry}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="yearsInOperation" className="block text-sm font-medium text-gray-700 mb-2">Years in Operation</label>
          <input
            type="number"
            name="yearsInOperation"
            id="yearsInOperation"
            value={formData.yearsInOperation || ''}
            onChange={handleChange}
            placeholder="e.g., 5"
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.yearsInOperation ? 'border-red-500' : 'border-gray-300'}`}
          />
          {validationErrors.yearsInOperation && <p className="text-red-500 text-xs mt-1">{validationErrors.yearsInOperation}</p>}
        </div>
        <div>
          <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue (NPR)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">Rs.</span>
            </div>
            <input
              type="number"
              name="annualRevenue"
              id="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              placeholder="e.g., 500000"
              className={`w-full pl-8 px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition-colors ${validationErrors.annualRevenue ? 'border-red-500' : 'border-gray-300'}`}
            />
            {validationErrors.annualRevenue && <p className="text-red-500 text-xs mt-1">{validationErrors.annualRevenue}</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessPlan" className="block text-sm font-medium text-gray-700 mb-2">Business Plan (PDF)</label>
          <input
            type="file"
            name="businessPlan"
            id="businessPlan"
            onChange={handleFileChange}
            accept=".pdf"
            className={`w-full text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#00695C] file:text-white hover:file:bg-[#005546] transition-colors ${fileError ? 'border-red-500' : 'border-gray-300'}`}
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

      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center border border-green-200">
          <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">Application submitted successfully!</p>
            <p className="text-sm">We will review your information and get back to you soon.</p>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200">
          <Loader2 className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" /> {/* Using Loader2 as a generic error icon */}
          <div>
            <p className="font-semibold">Submission failed!</p>
            <p className="text-sm">There was an error submitting your application. Please try again.</p>
          </div>
        </div>
      )}

      {fileError && (
        <div className="mb-6 p-4 bg-yellow-50 text-yellow-700 rounded-lg border border-yellow-200">
          <p className="font-medium">{fileError}</p>
        </div>
      )}

      {Object.keys(validationErrors).length > 0 && submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200">
          <Loader2 className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">Please correct the errors in the form.</p>
            <ul className="list-disc list-inside text-sm mt-1">
              {Object.values(validationErrors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
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
    </div>
  );
}

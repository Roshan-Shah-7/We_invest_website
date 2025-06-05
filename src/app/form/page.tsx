// app/apply/page.tsx
'use client';

import * as React from 'react';
import { useState } from 'react';
import InvestmentForm from '@/components/form/InvestmentForm';
import { User, Zap, Briefcase, LucideIcon } from 'lucide-react';

export const metadata = {
    title: "Investment Application | We Invest Global Pvt. Ltd.",
    description:
        "Apply for investment with We Invest Global Pvt. Ltd. Choose between individual investor, startup, or established business application forms.",
    keywords:
        "investment application, apply for funding, individual investor, startup funding, business investment, We Invest Global, financial application",
};

type FormType = 'individual' | 'startup' | 'business';

const tabOptions: { type: FormType; label: string; icon: LucideIcon }[] = [
  { type: 'individual', label: 'Individual Investor', icon: User },
  { type: 'startup', label: 'Startup', icon: Zap },
  { type: 'business', label: 'Established Business', icon: Briefcase },
];

export default function ApplyPage() {
  const [activeTab, setActiveTab] = useState<FormType>('individual');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9f7] to-white py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12 sm:mb-16">
          <div className="mb-6 flex justify-center">
            <div className="bg-[#00695C] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Investment Application
          </h1>
          <div className="w-24 h-1 bg-[#00695C] rounded-full mx-auto mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the application type that best fits your profile and let&apos;s build something great together.
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-10 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 bg-gray-50">
            {tabOptions.map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`flex-1 flex flex-col items-center justify-center py-5 px-4 transition-all duration-300 ease-in-out
                  ${activeTab === tab.type
                    ? 'bg-white text-[#00695C] shadow-[inset_0_-3px_0_#00695C]'
                    : 'text-gray-500 hover:text-[#00695C] hover:bg-gray-100'
                  }
                `}
              >
                <div className={`mb-2 p-2 rounded-full ${activeTab === tab.type ? 'bg-[#00695C]/10' : 'bg-gray-200'}`}>
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.type ? 'text-[#00695C]' : 'text-gray-500'}`} />
                </div>
                <span className={`font-medium ${activeTab === tab.type ? 'font-semibold' : ''}`}>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-1">
            {/* The key prop forces re-mount of InvestmentForm on tab change */}
            <InvestmentForm key={activeTab} formType={activeTab} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Have questions about the application process?</h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Contact our investment team for personalized assistance with your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:invest@weeinvest.com"
              className="inline-flex items-center px-4 py-2 bg-[#00695C] text-white rounded-lg hover:bg-[#005546] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center px-4 py-2 border border-[#00695C] text-[#00695C] rounded-lg hover:bg-[#00695C]/5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

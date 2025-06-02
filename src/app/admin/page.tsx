'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loader2, LogOut, User, Briefcase, Zap, Mail, FileText, LucideIcon } from 'lucide-react';

interface InvestmentData {
  _id: string;
  formType: string;
  fullName?: string;
  email: string;
  phone?: string;
  investmentAmount?: number;
  occupation?: string;
  companyName?: string;
  industry?: string;
  startupStage?: string;
  teamSize?: string;
  yearsInOperation?: string;
  annualRevenue?: string;
  message?: string;
  createdAt: string;
}

interface ContactData {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface NewsletterData {
  _id: string;
  email: string;
  createdAt: string;
}

type Tab = 'investments' | 'contacts' | 'newsletters';

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('investments');
  const [investmentData, setInvestmentData] = useState<InvestmentData[]>([]);
  const [contactData, setContactData] = useState<ContactData[]>([]);
  const [newsletterData, setNewsletterData] = useState<NewsletterData[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchData(activeTab);
    }
  }, [activeTab, status]);

  const fetchData = async (tab: Tab) => {
    setIsLoadingData(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/${tab}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${tab} data`);
      }
      const result = await response.json();
      if (result.success) {
        if (tab === 'investments') {
          setInvestmentData(result.data);
        } else if (tab === 'contacts') {
          setContactData(result.data);
        } else if (tab === 'newsletters') {
          setNewsletterData(result.data);
        }
      } else {
        setError(result.message || `Error fetching ${tab} data`);
      }
    } catch (err: any) {
      console.error(`Error fetching ${tab} data:`, err);
      setError(err.message || `Failed to load ${tab} data.`);
    } finally {
      setIsLoadingData(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin h-10 w-10 text-[#00695C]" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Redirect handled by useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>

        <div className="mb-8">
          <div className="flex border-b border-gray-200">
            <TabButton icon={FileText} label="Investments" active={activeTab === 'investments'} onClick={() => setActiveTab('investments')} />
            <TabButton icon={Mail} label="Contacts" active={activeTab === 'contacts'} onClick={() => setActiveTab('contacts')} />
            <TabButton icon={User} label="Newsletters" active={activeTab === 'newsletters'} onClick={() => setActiveTab('newsletters')} />
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {isLoadingData ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin h-8 w-8 text-[#00695C]" />
          </div>
        ) : (
          <div>
            {activeTab === 'investments' && (
              <InvestmentTable data={investmentData} />
            )}
            {activeTab === 'contacts' && (
              <ContactTable data={contactData} />
            )}
            {activeTab === 'newsletters' && (
              <NewsletterTable data={newsletterData} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface TabButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon: Icon, label, active, onClick }) => (
  <button
    className={`flex items-center px-6 py-3 text-lg font-medium rounded-t-lg transition-colors duration-200 ${
      active ? 'bg-[#00695C] text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5 mr-2" />
    {label}
  </button>
);

interface InvestmentTableProps {
  data: InvestmentData[];
}

const InvestmentTable: React.FC<InvestmentTableProps> = ({ data }) => (
  <div className="overflow-x-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Investment Inquiries</h2>
    {data.length === 0 ? (
      <p className="text-gray-600">No investment inquiries found.</p>
    ) : (
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
            <th className="py-3 px-4 border-b">Type</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b">Created At</th>
            <th className="py-3 px-4 border-b">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800 capitalize">{item.formType}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{item.fullName || item.companyName}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{item.email}</td>
              <td className="py-3 px-4 text-sm text-gray-800">${item.investmentAmount?.toLocaleString()}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{new Date(item.createdAt).toLocaleDateString()}</td>
              <td className="py-3 px-4 text-sm text-gray-800">
                <button className="text-[#00695C] hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

interface ContactTableProps {
  data: ContactData[];
}

const ContactTable: React.FC<ContactTableProps> = ({ data }) => (
  <div className="overflow-x-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Inquiries</h2>
    {data.length === 0 ? (
      <p className="text-gray-600">No contact inquiries found.</p>
    ) : (
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Phone</th>
            <th className="py-3 px-4 border-b">Subject</th>
            <th className="py-3 px-4 border-b">Created At</th>
            <th className="py-3 px-4 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800">{item.fullName}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{item.email}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{item.phone}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{item.subject}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{new Date(item.createdAt).toLocaleDateString()}</td>
              <td className="py-3 px-4 text-sm text-gray-800 truncate max-w-xs">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

interface NewsletterTableProps {
  data: NewsletterData[];
}

const NewsletterTable: React.FC<NewsletterTableProps> = ({ data }) => (
  <div className="overflow-x-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Newsletter Subscriptions</h2>
    {data.length === 0 ? (
      <p className="text-gray-600">No newsletter subscriptions found.</p>
    ) : (
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800">{item.email}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

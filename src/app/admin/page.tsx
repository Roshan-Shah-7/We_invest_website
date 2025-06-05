'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar'; // Import AdminSidebar

// Define interfaces for the data types
interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface Investment {
  _id: string;
  type: string; // 'individual', 'business', 'startup'
  email: string;
  phone?: string;
  createdAt: string;

  // IndividualInvestment fields
  fullName?: string;
  investmentAmount?: number; // Used by individual, startup, business
  occupation?: string;
  message?: string; // Used by individual, contact, business, startup

  // StartupInvestment fields
  startupName?: string;
  industry?: string; // Used by startup, business
  contactPerson?: string; // Used by startup, business
  pitchDeck?: string;
  businessPlan?: string;
  ideaDescription?: string; // Assuming this maps to message for startup
  teamDescription?: string;
  marketAnalysis?: string;
  financialProjections?: string;
  fundingRequired?: number;
  returnExpectations?: string;

  // BusinessInvestment fields
  companyName?: string;
  businessDescription?: string; // Assuming this maps to message for business
  yearsInOperation?: number;
  annualRevenue?: number;
  employees?: number;
  reasonForInvestment?: string;
}

interface Newsletter {
  _id: string;
  email: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [newsletters, setNewslatters] = useState<Newsletter[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'investments' | 'contacts' | 'newsletters'>('investments'); // New state for active tab

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated') {
        setDataLoading(true);
        setDataError(null);
        try {
          const [contactsRes, investmentsRes, newslettersRes] = await Promise.all([
            fetch('/api/admin/contacts'),
            fetch('/api/admin/investments'),
            fetch('/api/admin/newsletters'),
          ]);

          if (!contactsRes.ok || !investmentsRes.ok || !newslettersRes.ok) {
            throw new Error('Failed to fetch data');
          }

          const contactsData = await contactsRes.json();
          const investmentsData = await investmentsRes.json();
          const newslettersData = await newslettersRes.json();

          setContacts(contactsData.data);
          setInvestments(investmentsData.data);
          setNewslatters(newslettersData.data);
        } catch (error) {
          console.error('Error fetching admin data:', error);
          setDataError('Failed to load data. Please try again.');
        } finally {
          setDataLoading(false);
        }
      }
    };

    fetchData();
  }, [status]); // Re-fetch when authentication status changes

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading authentication...</div>;
  }

  if (session) {
    return (
      <div className="flex min-h-screen bg-gray-100"> {/* Use flex for sidebar layout */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-4 overflow-auto"> {/* Main content area */}
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">

            {dataLoading ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="animate-spin h-8 w-8 text-gray-500" />
                <span className="ml-3 text-gray-600">Loading data...</span>
              </div>
            ) : dataError ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span className="block sm:inline">{dataError}</span>
              </div>
            ) : (
              <div className="space-y-8">
                {activeTab === 'investments' && (
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Investment Forms ({investments.length})</h3>
                    {investments.length === 0 ? (
                      <p className="text-gray-500">No investment forms found.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 border-b text-left">Type</th>
                              <th className="py-2 px-4 border-b text-left">Email</th>
                              <th className="py-2 px-4 border-b text-left">Phone</th>
                              <th className="py-2 px-4 border-b text-left">Date</th>
                              <th className="py-2 px-4 border-b text-left">Name/Company</th>
                              <th className="py-2 px-4 border-b text-left">Amount (Rs)</th>
                              <th className="py-2 px-4 border-b text-left">Occupation/Industry</th>
                              <th className="py-2 px-4 border-b text-left">Message/Description</th>
                              <th className="py-2 px-4 border-b text-left">Pitch Deck</th>
                              <th className="py-2 px-4 border-b text-left">Business Plan</th>
                              <th className="py-2 px-4 border-b text-left">Years in Operation</th>
                              <th className="py-2 px-4 border-b text-left">Annual Revenue</th>
                              <th className="py-2 px-4 border-b text-left">Employees</th>
                              <th className="py-2 px-4 border-b text-left">Reason for Investment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {investments.map((investment) => (
                              <tr key={investment._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b capitalize">{investment.type}</td>
                                <td className="py-2 px-4 border-b">{investment.email}</td>
                                <td className="py-2 px-4 border-b">{investment.phone || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{new Date(investment.createdAt).toLocaleDateString()}</td>
                                {/* Display fields based on type */}
                                {/* Individual Investment */}
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'individual' ? investment.fullName || 'N/A' :
                                    investment.type === 'startup' ? investment.startupName || 'N/A' :
                                      investment.type === 'business' ? investment.companyName || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.investmentAmount ? `Rs ${investment.investmentAmount.toLocaleString()}` :
                                    investment.fundingRequired ? `Rs ${investment.fundingRequired.toLocaleString()}` : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'individual' ? investment.occupation || 'N/A' :
                                    investment.type === 'startup' ? investment.industry || 'N/A' :
                                      investment.type === 'business' ? investment.industry || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'individual' ? investment.message || 'N/A' :
                                    investment.type === 'startup' ? investment.ideaDescription || investment.message || 'N/A' :
                                      investment.type === 'business' ? investment.businessDescription || investment.message || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'startup' ? (investment.pitchDeck ? <a href={investment.pitchDeck} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a> : 'N/A') : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'startup' ? (investment.businessPlan ? <a href={investment.businessPlan} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a> : 'N/A') : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'business' ? investment.yearsInOperation || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'business' ? (investment.annualRevenue ? `Rs ${investment.annualRevenue.toLocaleString()}` : 'N/A') : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'business' ? investment.employees || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'business' ? investment.reasonForInvestment || 'N/A' : 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                )}

                {activeTab === 'contacts' && (
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Submissions ({contacts.length})</h3>
                    {contacts.length === 0 ? (
                      <p className="text-gray-500">No contact submissions found.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 border-b text-left">Name</th>
                              <th className="py-2 px-4 border-b text-left">Email</th>
                              <th className="py-2 px-4 border-b text-left">Message</th>
                              <th className="py-2 px-4 border-b text-left">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {contacts.map((contact) => (
                              <tr key={contact._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{contact.name || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{contact.email}</td>
                                <td className="py-2 px-4 border-b">{contact.message}</td>
                                <td className="py-2 px-4 border-b">{new Date(contact.createdAt).toLocaleDateString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                )}

                {activeTab === 'newsletters' && (
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Newsletter Subscriptions ({newsletters.length})</h3>
                    {newsletters.length === 0 ? (
                      <p className="text-gray-500">No newsletter subscriptions found.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 border-b text-left">Email</th>
                              <th className="py-2 px-4 border-b text-left">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {newsletters.map((newsletter) => (
                              <tr key={newsletter._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{newsletter.email}</td>
                                <td className="py-2 px-4 border-b">{new Date(newsletter.createdAt).toLocaleDateString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null; // Should redirect to login if unauthenticated
}

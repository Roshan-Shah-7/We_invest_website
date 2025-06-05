'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2, Download } from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar'; // Import AdminSidebar
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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

  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  const handleViewDetails = (investment: Investment) => {
    setSelectedInvestment(investment);
    setIsDetailDialogOpen(true);
  };

  const handleDownloadPdf = async (formType: string, data: any[]) => {
    try {
        const response = await fetch('/api/admin/download-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formType, data }),
        });

        if (!response.ok) {
            throw new Error('Failed to generate PDF');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${formType}_report.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading PDF:', error);
    }
  };

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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold text-gray-700">Investment Forms ({investments.length})</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadPdf('investments', investments)}
                        disabled={investments.length === 0}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                    {investments.length === 0 ? (
                      <p className="text-gray-500">No investment forms found.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 border-b text-left">Type</th>
                              <th className="py-2 px-4 border-b text-left">Email</th>
                              <th className="py-2 px-4 border-b text-left">Name/Company</th>
                              <th className="py-2 px-4 border-b text-left">Amount (Rs)</th>
                              <th className="py-2 px-4 border-b text-left">Date</th>
                              <th className="py-2 px-4 border-b text-left">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {investments.map((investment) => (
                              <tr key={investment._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b capitalize">{investment.type}</td>
                                <td className="py-2 px-4 border-b">{investment.email}</td>
                                <td className="py-2 px-4 border-b">
                                  {investment.type === 'individual' ? investment.fullName || 'N/A' :
                                    investment.type === 'startup' ? investment.startupName || 'N/A' :
                                      investment.type === 'business' ? investment.companyName || 'N/A' : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  {investment.investmentAmount ? `Rs ${investment.investmentAmount.toLocaleString()}` :
                                    investment.fundingRequired ? `Rs ${investment.fundingRequired.toLocaleString()}` : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">{new Date(investment.createdAt).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleViewDetails(investment)}
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    View Details
                                  </Button>
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold text-gray-700">Contact Submissions ({contacts.length})</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadPdf('contacts', contacts)}
                        disabled={contacts.length === 0}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold text-gray-700">Newsletter Subscriptions ({newsletters.length})</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadPdf('newsletters', newsletters)}
                        disabled={newsletters.length === 0}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
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
            {/* Investment Detail Dialog */}
            <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">Investment Details</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Comprehensive information for this {selectedInvestment?.type} investment.
                  </DialogDescription>
                </DialogHeader>
                {selectedInvestment && (
                  <div className="py-4 space-y-4 text-gray-700">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="font-semibold">Type:</div>
                      <div className="capitalize">{selectedInvestment.type}</div>

                      <div className="font-semibold">Email:</div>
                      <div>{selectedInvestment.email}</div>

                      {selectedInvestment.phone && (
                        <>
                          <div className="font-semibold">Phone:</div>
                          <div>{selectedInvestment.phone}</div>
                        </>
                      )}

                      <div className="font-semibold">Submission Date:</div>
                      <div>{new Date(selectedInvestment.createdAt).toLocaleDateString()}</div>

                      {selectedInvestment.type === 'individual' && (
                        <>
                          <div className="font-semibold">Full Name:</div>
                          <div>{selectedInvestment.fullName || 'N/A'}</div>
                          <div className="font-semibold">Investment Amount:</div>
                          <div>{selectedInvestment.investmentAmount ? `Rs ${selectedInvestment.investmentAmount.toLocaleString()}` : 'N/A'}</div>
                          <div className="font-semibold">Occupation:</div>
                          <div>{selectedInvestment.occupation || 'N/A'}</div>
                          <div className="font-semibold">Message:</div>
                          <div>{selectedInvestment.message || 'N/A'}</div>
                        </>
                      )}

                      {selectedInvestment.type === 'startup' && (
                        <>
                          <div className="font-semibold">Startup Name:</div>
                          <div>{selectedInvestment.startupName || 'N/A'}</div>
                          <div className="font-semibold">Industry:</div>
                          <div>{selectedInvestment.industry || 'N/A'}</div>
                          <div className="font-semibold">Contact Person:</div>
                          <div>{selectedInvestment.contactPerson || 'N/A'}</div>
                          <div className="font-semibold">Funding Required:</div>
                          <div>{selectedInvestment.fundingRequired ? `Rs ${selectedInvestment.fundingRequired.toLocaleString()}` : 'N/A'}</div>
                          <div className="font-semibold">Idea Description:</div>
                          <div>{selectedInvestment.ideaDescription || selectedInvestment.message || 'N/A'}</div>
                          <div className="font-semibold">Team Description:</div>
                          <div>{selectedInvestment.teamDescription || 'N/A'}</div>
                          <div className="font-semibold">Market Analysis:</div>
                          <div>{selectedInvestment.marketAnalysis || 'N/A'}</div>
                          <div className="font-semibold">Financial Projections:</div>
                          <div>{selectedInvestment.financialProjections || 'N/A'}</div>
                          <div className="font-semibold">Return Expectations:</div>
                          <div>{selectedInvestment.returnExpectations || 'N/A'}</div>
                          <div className="font-semibold">Pitch Deck:</div>
                          <div>{selectedInvestment.pitchDeck ? <a href={selectedInvestment.pitchDeck} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a> : 'N/A'}</div>
                          <div className="font-semibold">Business Plan:</div>
                          <div>{selectedInvestment.businessPlan ? <a href={selectedInvestment.businessPlan} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a> : 'N/A'}</div>
                        </>
                      )}

                      {selectedInvestment.type === 'business' && (
                        <>
                          <div className="font-semibold">Company Name:</div>
                          <div>{selectedInvestment.companyName || 'N/A'}</div>
                          <div className="font-semibold">Industry:</div>
                          <div>{selectedInvestment.industry || 'N/A'}</div>
                          <div className="font-semibold">Contact Person:</div>
                          <div>{selectedInvestment.contactPerson || 'N/A'}</div>
                          <div className="font-semibold">Investment Amount:</div>
                          <div>{selectedInvestment.investmentAmount ? `Rs ${selectedInvestment.investmentAmount.toLocaleString()}` : 'N/A'}</div>
                          <div className="font-semibold">Business Description:</div>
                          <div>{selectedInvestment.businessDescription || selectedInvestment.message || 'N/A'}</div>
                          <div className="font-semibold">Years in Operation:</div>
                          <div>{selectedInvestment.yearsInOperation || 'N/A'}</div>
                          <div className="font-semibold">Annual Revenue:</div>
                          <div>{selectedInvestment.annualRevenue ? `Rs ${selectedInvestment.annualRevenue.toLocaleString()}` : 'N/A'}</div>
                          <div className="font-semibold">Employees:</div>
                          <div>{selectedInvestment.employees || 'N/A'}</div>
                          <div className="font-semibold">Reason for Investment:</div>
                          <div>{selectedInvestment.reasonForInvestment || 'N/A'}</div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
        </div>
      </div>
    );
  }

  return null; // Should redirect to login if unauthenticated
}

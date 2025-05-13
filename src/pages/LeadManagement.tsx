import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  ChevronDown, 
  ChevronUp,
  Phone,
  MessageSquare,
  BarChart2
} from 'lucide-react';

const LeadManagement: React.FC = () => {
  const [expandedLeadId, setExpandedLeadId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedLeadId(expandedLeadId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Smart Lead Management</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-white border border-neutral-200 text-neutral-700 rounded-md">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-primary-600 text-white rounded-md">
            Import Leads
          </button>
        </div>
      </div>

      {/* Lead stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <LeadStatCard
          label="Total Leads"
          value="124"
          trend="+23"
          icon={<BarChart2 className="h-5 w-5 text-neutral-600" />}
        />
        <LeadStatCard
          label="High Priority"
          value="38"
          trend="+5"
          icon={<BarChart2 className="h-5 w-5 text-error-600" />}
          accentColor="bg-error-50"
          iconColor="text-error-600"
        />
        <LeadStatCard
          label="Pending Follow-up"
          value="53"
          trend="+12"
          icon={<Clock className="h-5 w-5 text-warning-600" />}
          accentColor="bg-warning-50"
          iconColor="text-warning-600"
        />
        <LeadStatCard
          label="Converted"
          value="29"
          trend="+8"
          icon={<CheckCircle2 className="h-5 w-5 text-success-600" />}
          accentColor="bg-success-50"
          iconColor="text-success-600"
        />
      </div>

      {/* AI insights card */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-neutral-800 mb-4">AI Lead Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InsightCard
            title="High Conversion Potential"
            description="15 leads have shown interest in term insurance and match your highest conversion profile."
            actionText="View Leads"
          />
          <InsightCard
            title="Follow-up Reminder"
            description="8 high-value leads haven't been contacted in the last 7 days."
            actionText="Schedule Follow-ups"
          />
          <InsightCard
            title="Cross-sell Opportunity"
            description="12 existing clients may be interested in health insurance based on their profiles."
            actionText="Explore Opportunities"
          />
        </div>
      </div>

      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search leads by name, phone, or product..."
            className="w-full bg-white py-2 pl-10 pr-3 border border-neutral-200 rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Search className="h-5 w-5 text-neutral-400" />
          </div>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary-500">
            <option>All Products</option>
            <option>Term Insurance</option>
            <option>Health Insurance</option>
            <option>Credit Cards</option>
            <option>Personal Loans</option>
          </select>
          <select className="bg-white border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary-500">
            <option>All Status</option>
            <option>New Lead</option>
            <option>Contacted</option>
            <option>Interested</option>
            <option>Converted</option>
            <option>Not Interested</option>
          </select>
          <button className="inline-flex items-center px-3 py-2 text-sm bg-white border border-neutral-200 text-neutral-700 rounded-md">
            <ArrowUpDown size={16} className="mr-1" />
            Sort
          </button>
        </div>
      </div>

      {/* Leads table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Product Interest
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Last Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Conversion %
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {leads.map((lead) => (
                <React.Fragment key={lead.id}>
                  <tr className={`hover:bg-neutral-50 ${expandedLeadId === lead.id ? 'bg-neutral-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button 
                          onClick={() => toggleExpand(lead.id)}
                          className="mr-2 text-neutral-400 hover:text-neutral-600"
                        >
                          {expandedLeadId === lead.id ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                        <div>
                          <div className="text-sm font-medium text-neutral-900">
                            {lead.name}
                          </div>
                          <div className="text-xs text-neutral-500">{lead.contact}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-neutral-900">{lead.product}</div>
                      <div className="text-xs text-neutral-500">{lead.productDetail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                      {lead.lastContact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium text-neutral-900">{lead.conversionProbability}%</div>
                        <div className="w-full bg-neutral-200 rounded-full h-1.5" style={{ width: '60px' }}>
                          <div 
                            className={`h-1.5 rounded-full ${
                              lead.conversionProbability > 70 ? 'bg-success-500' :
                              lead.conversionProbability > 40 ? 'bg-warning-500' : 'bg-neutral-400'
                            }`}
                            style={{ width: `${lead.conversionProbability}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="p-1 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100">
                          <Phone size={16} />
                        </button>
                        <button className="p-1 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100">
                          <MessageSquare size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Expanded row */}
                  {expandedLeadId === lead.id && (
                    <tr className="bg-neutral-50">
                      <td colSpan={6} className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-neutral-900 mb-2">AI Insights</h4>
                            <div className="text-sm text-neutral-700 bg-white border border-neutral-200 rounded-md p-3">
                              <p>{lead.aiInsight}</p>
                              {lead.recommendedAction && (
                                <div className="mt-2 pt-2 border-t border-neutral-100">
                                  <span className="text-xs font-medium text-primary-600">Recommended Action</span>
                                  <p className="mt-1 text-sm">{lead.recommendedAction}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-neutral-900 mb-2">Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="grid grid-cols-2 gap-1">
                                <span className="text-neutral-500">Source:</span>
                                <span className="text-neutral-900">{lead.source}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                <span className="text-neutral-500">Age:</span>
                                <span className="text-neutral-900">{lead.age}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                <span className="text-neutral-500">Occupation:</span>
                                <span className="text-neutral-900">{lead.occupation}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                <span className="text-neutral-500">Income:</span>
                                <span className="text-neutral-900">{lead.income}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                <span className="text-neutral-500">Location:</span>
                                <span className="text-neutral-900">{lead.location}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-neutral-900 mb-2">Interaction History</h4>
                            <div className="space-y-3 max-h-32 overflow-y-auto text-sm">
                              {lead.interactions.map((interaction, idx) => (
                                <div key={idx} className="pb-2 border-b border-neutral-100 last:border-b-0">
                                  <div className="flex justify-between">
                                    <span className="font-medium text-neutral-900">{interaction.type}</span>
                                    <span className="text-xs text-neutral-500">{interaction.date}</span>
                                  </div>
                                  <p className="mt-1 text-neutral-700">{interaction.notes}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <button className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-sm rounded-md">
                            View Full Profile
                          </button>
                          <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md">
                            Update Status
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-neutral-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-neutral-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">124</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                  <span className="sr-only">Previous</span>
                  {/* Chevron left icon */}
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                  <span className="sr-only">Next</span>
                  {/* Chevron right icon */}
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LeadStatCardProps {
  label: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  accentColor?: string;
  iconColor?: string;
}

const LeadStatCard: React.FC<LeadStatCardProps> = ({ 
  label, value, trend, icon, accentColor = "bg-neutral-50", iconColor = "text-neutral-600"
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">{label}</p>
          <p className="text-2xl font-bold text-neutral-800 mt-1">{value}</p>
        </div>
        <div className={`${accentColor} p-2 rounded-lg h-fit`}>
          {icon}
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className="inline-flex items-center text-xs font-medium text-success-600">
          {trend}
        </span>
        <span className="ml-2 text-xs text-neutral-500">vs last period</span>
      </div>
    </div>
  );
};

interface InsightCardProps {
  title: string;
  description: string;
  actionText: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description, actionText }) => {
  return (
    <div className="bg-neutral-50 p-4 rounded-lg">
      <h3 className="font-medium text-neutral-800 text-sm">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      <button className="mt-3 text-sm text-primary-600 font-medium">
        {actionText}
      </button>
    </div>
  );
};

// Status styles
const statusStyles: Record<string, string> = {
  'New Lead': 'bg-blue-50 text-blue-800',
  'Contacted': 'bg-purple-50 text-purple-800',
  'Interested': 'bg-warning-50 text-warning-800',
  'Converted': 'bg-success-50 text-success-800',
  'Not Interested': 'bg-neutral-100 text-neutral-800'
};

// Sample lead data
const leads = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    contact: '+91 9876543210',
    product: 'Term Insurance',
    productDetail: 'Coverage: ₹1 Cr',
    status: 'Interested',
    lastContact: '2 days ago',
    conversionProbability: 86,
    source: 'Facebook Ad',
    age: '35',
    occupation: 'IT Professional',
    income: '₹15L - ₹20L',
    location: 'Bangalore',
    aiInsight: 'High conversion potential. Customer has researched term plans and has growing family needs. The main concern seems to be around premium costs.',
    recommendedAction: 'Use the affordability comparison with endowment plans. Emphasize tax benefits under 80C.',
    interactions: [
      {
        type: 'Call',
        date: 'Oct 12, 2023',
        notes: 'Discussed term plans with 1Cr coverage. Client interested but wants to compare premiums.'
      },
      {
        type: 'Email',
        date: 'Oct 13, 2023',
        notes: 'Sent premium quotes for 3 different term plans from top insurers.'
      },
      {
        type: 'WhatsApp',
        date: 'Oct 15, 2023',
        notes: 'Client asked about claim settlement ratio. Provided comparison data.'
      }
    ]
  },
  {
    id: 2,
    name: 'Priya Sharma',
    contact: '+91 9812345670',
    product: 'Health Insurance',
    productDetail: 'Family Floater',
    status: 'New Lead',
    lastContact: 'Not contacted',
    conversionProbability: 72,
    source: 'Referral',
    age: '42',
    occupation: 'Business Owner',
    income: '₹25L - ₹30L',
    location: 'Delhi',
    aiInsight: 'This lead matches the profile of high-converting health insurance clients. They have recently searched for family health plans online.',
    recommendedAction: 'Focus on cashless hospital network and no-claim bonus features during initial contact.',
    interactions: []
  },
  {
    id: 3,
    name: 'Amit Patel',
    contact: '+91 9845678901',
    product: 'ULIP',
    productDetail: 'Balanced Fund',
    status: 'Contacted',
    lastContact: '1 day ago',
    conversionProbability: 45,
    source: 'Website',
    age: '38',
    occupation: 'Corporate Employee',
    income: '₹18L - ₹22L',
    location: 'Mumbai',
    aiInsight: 'Client has moderate risk appetite and is looking for investment with insurance component. Currently comparing with mutual funds.',
    recommendedAction: 'Highlight long-term tax benefits and insurance coverage that mutual funds don\'t provide.',
    interactions: [
      {
        type: 'Call',
        date: 'Oct 18, 2023',
        notes: 'Introduced ULIP options. Client has been investing in mutual funds and is skeptical about charges.'
      }
    ]
  },
  {
    id: 4,
    name: 'Sunita Gupta',
    contact: '+91 9756432109',
    product: 'Credit Card',
    productDetail: 'SBI Card Elite',
    status: 'Converted',
    lastContact: '5 days ago',
    conversionProbability: 100,
    source: 'Branch Walk-in',
    age: '29',
    occupation: 'Marketing Executive',
    income: '₹12L - ₹15L',
    location: 'Hyderabad',
    aiInsight: 'Successfully converted! Client appreciated your clear explanation of rewards program. Cross-sell opportunity exists for travel insurance.',
    recommendedAction: 'Follow up in 2 weeks to check card activation and introduce travel insurance options.',
    interactions: [
      {
        type: 'In-Person',
        date: 'Oct 10, 2023',
        notes: 'Walked through different card options. Client interested in travel benefits.'
      },
      {
        type: 'Call',
        date: 'Oct 12, 2023',
        notes: 'Confirmed application details. Processed application.'
      },
      {
        type: 'SMS',
        date: 'Oct 15, 2023',
        notes: 'Card approved notification sent.'
      }
    ]
  },
  {
    id: 5,
    name: 'Arun Joshi',
    contact: '+91 9890123456',
    product: 'Home Loan',
    productDetail: '₹50L, 20 years',
    status: 'Not Interested',
    lastContact: '3 days ago',
    conversionProbability: 15,
    source: 'Google Ads',
    age: '45',
    occupation: 'Government Employee',
    income: '₹10L - ₹15L',
    location: 'Chennai',
    aiInsight: 'Client found better interest rates with another provider. However, they might reconsider if rates change.',
    recommendedAction: 'Save for follow-up in 3 months when our Q3 promotional rates begin.',
    interactions: [
      {
        type: 'Call',
        date: 'Oct 14, 2023',
        notes: 'Discussed home loan options. Client comparing with other banks.'
      },
      {
        type: 'Call',
        date: 'Oct 17, 2023',
        notes: 'Client opted for competitor offering 0.25% lower interest rate.'
      }
    ]
  }
];

export default LeadManagement;
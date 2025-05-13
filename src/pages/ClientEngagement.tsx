import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  MessageCircle, 
  Calendar, 
  User, 
  BarChart2,
  Clock,
  CheckCircle2,
  CreditCard,
  ChevronRight,
  Info
} from 'lucide-react';

const ClientEngagement: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<any>(clients[0]);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Client Engagement</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients..."
              className="w-full md:w-64 bg-white py-1.5 pl-9 pr-3 border border-neutral-200 rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-4 w-4 text-neutral-400" />
            </div>
          </div>
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-primary-600 text-white rounded-md">
            Add New Client
          </button>
        </div>
      </div>

      {/* Client engagement stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Total Clients" 
          value="246" 
          icon={<Users className="h-5 w-5 text-primary-600" />}
        />
        <StatCard 
          label="Pending Follow-ups" 
          value="18" 
          icon={<Clock className="h-5 w-5 text-warning-600" />}
          accentColor="bg-warning-50"
          iconColor="text-warning-600"
        />
        <StatCard 
          label="Renewal Opportunities" 
          value="42" 
          icon={<Calendar className="h-5 w-5 text-success-600" />}
          accentColor="bg-success-50"
          iconColor="text-success-600"
        />
        <StatCard 
          label="Upsell Opportunities" 
          value="73" 
          icon={<CreditCard className="h-5 w-5 text-secondary-500" />}
          accentColor="bg-secondary-50"
          iconColor="text-secondary-600"
        />
      </div>

      {/* Client management section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client list - 1/3 width */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-neutral-200 p-4">
            <h2 className="text-lg font-semibold text-neutral-800">Your Clients</h2>
          </div>
          <div className="h-[600px] overflow-y-auto">
            {clients.map((client) => (
              <div 
                key={client.id}
                className={`p-4 border-b border-neutral-100 cursor-pointer ${
                  selectedClient.id === client.id ? 'bg-primary-50' : 'hover:bg-neutral-50'
                }`}
                onClick={() => setSelectedClient(client)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {client.photo ? (
                      <img 
                        src={client.photo} 
                        alt={client.name} 
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-700">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-neutral-900">{client.name}</p>
                      <span className={`px-2 py-0.5 inline-flex text-xs rounded-full font-medium ${
                        client.status === 'Active' ? 'bg-success-50 text-success-700' :
                        client.status === 'Pending' ? 'bg-warning-50 text-warning-700' :
                        'bg-neutral-100 text-neutral-700'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">{client.lastPurchase}</p>
                    <div className="mt-1 text-xs text-neutral-600">
                      {client.nextAction && (
                        <div className="flex items-center text-primary-600">
                          <Clock size={12} className="mr-1" />
                          {client.nextAction}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client details - 2/3 width */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          {selectedClient ? (
            <>
              {/* Client header */}
              <div className="border-b border-neutral-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {selectedClient.photo ? (
                      <img 
                        src={selectedClient.photo} 
                        alt={selectedClient.name} 
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-lg font-medium text-primary-700">
                          {selectedClient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold text-neutral-800">{selectedClient.name}</h2>
                      <p className="text-sm text-neutral-500">{selectedClient.phone} • {selectedClient.email}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100">
                      <MessageCircle size={20} />
                    </button>
                    <button className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100">
                      <User size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* AI insights */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-4 text-white">
                    <div className="flex items-center mb-2">
                      <div className="bg-white bg-opacity-20 p-1.5 rounded-lg">
                        <Info size={18} className="text-white" />
                      </div>
                      <h3 className="font-medium ml-2">AI Client Insights</h3>
                    </div>
                    <p className="text-sm text-primary-50">{selectedClient.aiInsight}</p>
                    <div className="mt-3 flex items-center">
                      <button className="text-xs font-medium bg-white text-primary-700 px-3 py-1 rounded-md">
                        Take Action
                      </button>
                      <span className="text-xs text-primary-100 ml-3">Updated 2 hours ago</span>
                    </div>
                  </div>

                  {/* Products owned */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-neutral-800">Products Owned</h3>
                      <button className="text-xs text-primary-600 font-medium">View All</button>
                    </div>
                    <div className="space-y-3">
                      {selectedClient.products.map((product, idx) => (
                        <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-3">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-medium text-neutral-800">{product.name}</p>
                              <p className="text-xs text-neutral-500 mt-0.5">{product.details}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-neutral-800">{product.value}</p>
                              <p className="text-xs text-neutral-500 mt-0.5">{product.date}</p>
                            </div>
                          </div>
                          {product.renewalDate && (
                            <div className="mt-2 pt-2 border-t border-neutral-100 flex justify-between items-center">
                              <div className="flex items-center">
                                <Calendar size={14} className="text-neutral-400 mr-1" />
                                <span className="text-xs text-neutral-600">Renewal: {product.renewalDate}</span>
                              </div>
                              {product.renewalSoon && (
                                <button className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded">
                                  Renew Now
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interaction history */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-neutral-800">Interaction History</h3>
                      <button className="text-xs text-primary-600 font-medium">View All</button>
                    </div>

                    <div className="space-y-4">
                      {selectedClient.interactions.map((interaction, idx) => (
                        <div key={idx} className="relative">
                          {/* Timeline connector */}
                          {idx < selectedClient.interactions.length - 1 && (
                            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-neutral-200"></div>
                          )}
                          
                          <div className="flex">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              interaction.type === 'Call' ? 'bg-primary-100 text-primary-600' :
                              interaction.type === 'Email' ? 'bg-purple-100 text-purple-600' :
                              interaction.type === 'WhatsApp' ? 'bg-green-100 text-green-600' :
                              interaction.type === 'In-Person' ? 'bg-warning-100 text-warning-600' :
                              'bg-neutral-100 text-neutral-600'
                            }`}>
                              {interaction.type === 'Call' && <Phone size={16} />}
                              {interaction.type === 'Email' && <Mail size={16} />}
                              {interaction.type === 'WhatsApp' && <MessageCircle size={16} />}
                              {interaction.type === 'In-Person' && <Users size={16} />}
                              {interaction.type === 'SMS' && <MessageSquare size={16} />}
                            </div>
                            <div className="ml-3">
                              <div className="flex items-baseline">
                                <span className="text-sm font-medium text-neutral-800">{interaction.type}</span>
                                <span className="ml-2 text-xs text-neutral-500">{interaction.date}</span>
                              </div>
                              <p className="mt-1 text-sm text-neutral-600">{interaction.notes}</p>
                              {interaction.outcome && (
                                <p className="mt-1 text-xs text-neutral-500">Outcome: {interaction.outcome}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {/* Client details */}
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h3 className="font-medium text-neutral-800 mb-3">Client Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Age:</span>
                        <span className="text-neutral-800">{selectedClient.age}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Occupation:</span>
                        <span className="text-neutral-800">{selectedClient.occupation}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Income:</span>
                        <span className="text-neutral-800">{selectedClient.income}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Location:</span>
                        <span className="text-neutral-800">{selectedClient.location}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Client Since:</span>
                        <span className="text-neutral-800">{selectedClient.clientSince}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <span className="text-neutral-500">Risk Profile:</span>
                        <span className="text-neutral-800">{selectedClient.riskProfile}</span>
                      </div>
                    </div>
                  </div>

                  {/* Family details */}
                  {selectedClient.family && (
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h3 className="font-medium text-neutral-800 mb-3">Family Details</h3>
                      <div className="space-y-2 text-sm">
                        {Object.entries(selectedClient.family).map(([relation, name]) => (
                          <div key={relation} className="grid grid-cols-2 gap-1">
                            <span className="text-neutral-500">{relation}:</span>
                            <span className="text-neutral-800">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommended products */}
                  <div>
                    <h3 className="font-medium text-neutral-800 mb-3">Recommended Products</h3>
                    <div className="space-y-2">
                      {selectedClient.recommendations.map((product, idx) => (
                        <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-3">
                          <p className="text-sm font-medium text-neutral-800">{product.name}</p>
                          <p className="text-xs text-neutral-500 mt-1">{product.reason}</p>
                          <div className="mt-2 flex justify-between items-center">
                            <div className="text-xs">
                              <span className={`px-2 py-0.5 rounded-full ${
                                product.match === 'High' ? 'bg-success-50 text-success-700' :
                                product.match === 'Medium' ? 'bg-warning-50 text-warning-700' :
                                'bg-neutral-100 text-neutral-600'
                              }`}>
                                {product.match} Match
                              </span>
                            </div>
                            <button className="text-xs text-primary-600 flex items-center">
                              Pitch
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-2">
                    <button className="w-full py-2 bg-primary-600 text-white text-sm font-medium rounded-md">
                      Schedule Follow-up
                    </button>
                    <button className="w-full py-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-md">
                      Add Note
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-8 text-center">
              <p className="text-neutral-500">Select a client to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  accentColor?: string;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  label, value, icon, accentColor = "bg-primary-50", iconColor = "text-primary-600"
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
    </div>
  );
};

// Import for interaction icons
const Phone = MessageCircle;
const Mail = MessageCircle;
const MessageSquare = MessageCircle;

// Sample client data
const clients = [
  {
    id: 1,
    name: 'Vikram Mehta',
    photo: null,
    phone: '+91 9876543210',
    email: 'vikram.m@example.com',
    status: 'Active',
    lastPurchase: 'Term Insurance (2 months ago)',
    nextAction: 'Follow-up due in 2 days',
    age: '35',
    occupation: 'IT Professional',
    income: '₹15L - ₹20L',
    location: 'Bangalore',
    clientSince: 'June 2023',
    riskProfile: 'Moderate',
    family: {
      'Spouse': 'Priya Mehta (33)',
      'Children': 'Aryan (7) and Aanya (4)'
    },
    aiInsight: 'Vikram has been researching health insurance options online. His children are approaching school age, making this an ideal time to discuss family floater health plans. Based on his profile, he may also be interested in education savings plans.',
    
    products: [
      {
        name: 'Term Life Insurance',
        details: 'HDFC Life Click 2 Protect',
        value: '₹1 Cr Coverage',
        date: 'Purchased: Aug 2023',
        renewalDate: 'Aug 2043',
        renewalSoon: false
      },
      {
        name: 'Credit Card',
        details: 'SBI SimplyCLICK',
        value: '₹3L Limit',
        date: 'Issued: Dec 2023',
        renewalDate: null,
        renewalSoon: false
      }
    ],

    recommendations: [
      {
        name: 'Family Health Insurance',
        reason: 'Growing family with young children',
        match: 'High'
      },
      {
        name: 'Child Education Plan',
        reason: 'Children approaching school age',
        match: 'High'
      },
      {
        name: 'Investment ULIP',
        reason: 'Tax-saving investment option',
        match: 'Medium'
      }
    ],

    interactions: [
      {
        type: 'Call',
        date: '15 Oct 2023',
        notes: 'Discussed term insurance options. Client was concerned about premium costs but interested in high coverage.',
        outcome: 'Positive - Sent quotes'
      },
      {
        type: 'Email',
        date: '16 Oct 2023',
        notes: 'Sent premium quotes for different coverage options. Included comparison chart of benefits.',
        outcome: null
      },
      {
        type: 'Call',
        date: '19 Oct 2023',
        notes: 'Follow-up call. Client decided on 1Cr coverage plan. Started application process.',
        outcome: 'Converted'
      },
      {
        type: 'WhatsApp',
        date: '05 Dec 2023',
        notes: 'Client inquired about credit card options with travel benefits.',
        outcome: 'Interested'
      }
    ]
  },
  {
    id: 2,
    name: 'Priya Sharma',
    photo: null,
    phone: '+91 9812345670',
    email: 'priya.s@example.com',
    status: 'Pending',
    lastPurchase: 'None yet',
    nextAction: 'Initial consultation scheduled',
    age: '42',
    occupation: 'Business Owner',
    income: '₹25L - ₹30L',
    location: 'Delhi',
    clientSince: 'Jan 2024',
    riskProfile: 'Aggressive',
    
    aiInsight: 'Priya has a high income profile and runs her own digital marketing agency. Her business has been operational for 5 years with steady growth. She\'s likely to be interested in both personal and business insurance solutions.',
    
    products: [],

    recommendations: [
      {
        name: 'Business Insurance Bundle',
        reason: 'Protection for growing business',
        match: 'High'
      },
      {
        name: 'High-Value Term Insurance',
        reason: 'Income protection with tax benefits',
        match: 'High'
      },
      {
        name: 'Wealth Management Solutions',
        reason: 'High income profile seeking growth',
        match: 'Medium'
      }
    ],

    interactions: [
      {
        type: 'Email',
        date: '28 Jan 2024',
        notes: 'Introduction email after referral from Vikram Mehta. Offered initial consultation.',
        outcome: null
      },
      {
        type: 'Call',
        date: '30 Jan 2024',
        notes: 'Brief call to schedule meeting. Client interested in comprehensive financial planning.',
        outcome: 'Scheduled meeting'
      }
    ]
  },
  {
    id: 3,
    name: 'Rajesh Kapoor',
    photo: null,
    phone: '+91 9876543211',
    email: 'rajesh.k@example.com',
    status: 'Active',
    lastPurchase: 'Health Insurance (1 year ago)',
    nextAction: 'Policy renewal in 14 days',
    age: '48',
    occupation: 'Doctor',
    income: '₹30L+',
    location: 'Mumbai',
    clientSince: 'April 2022',
    riskProfile: 'Conservative',
    family: {
      'Spouse': 'Neha Kapoor (45)',
      'Children': 'Rohan (19) and Riya (16)'
    },
    
    aiInsight: 'Rajesh\'s health insurance policy is due for renewal soon. This is also an opportunity to discuss upgrading his coverage considering rising healthcare costs. His children are approaching college age, making education financing options relevant.',
    
    products: [
      {
        name: 'Health Insurance',
        details: 'Family Floater Plan',
        value: '₹10L Coverage',
        date: 'Purchased: Feb 2023',
        renewalDate: 'Feb 2024',
        renewalSoon: true
      },
      {
        name: 'Term Life Insurance',
        details: 'ICICI Pru iProtect Smart',
        value: '₹2 Cr Coverage',
        date: 'Purchased: Apr 2022',
        renewalDate: 'Apr 2042',
        renewalSoon: false
      }
    ],

    recommendations: [
      {
        name: 'Enhanced Health Insurance',
        reason: 'Upgrade coverage at renewal',
        match: 'High'
      },
      {
        name: 'Education Financing',
        reason: 'Children approaching college age',
        match: 'High'
      },
      {
        name: 'Retirement Planning',
        reason: 'Age-appropriate financial planning',
        match: 'Medium'
      }
    ],

    interactions: [
      {
        type: 'Call',
        date: '20 Jan 2024',
        notes: 'Reminder about upcoming health insurance renewal. Discussed the option to enhance coverage.',
        outcome: 'Interested in options'
      },
      {
        type: 'Email',
        date: '21 Jan 2024',
        notes: 'Sent renewal details with options for enhanced coverage and added benefits.',
        outcome: null
      },
      {
        type: 'WhatsApp',
        date: '25 Jan 2024',
        notes: 'Client asked questions about claim process improvements in the new policy version.',
        outcome: null
      }
    ]
  },
  {
    id: 4,
    name: 'Ananya Patel',
    photo: null,
    phone: '+91 9876543212',
    email: 'ananya.p@example.com',
    status: 'Active',
    lastPurchase: 'Investment Plan (3 months ago)',
    nextAction: null,
    age: '32',
    occupation: 'Software Engineer',
    income: '₹18L - ₹22L',
    location: 'Hyderabad',
    clientSince: 'November 2023',
    riskProfile: 'Moderate to Aggressive',
    
    aiInsight: 'Ananya is tech-savvy and research-oriented. She compares multiple options before making decisions. She\'s been exploring mutual funds online and may be interested in a more diversified investment approach. She responds well to data-driven recommendations.',
    
    products: [
      {
        name: 'ULIP Plan',
        details: 'Bajaj Allianz Goal Assure',
        value: '₹5L Investment',
        date: 'Purchased: Nov 2023',
        renewalDate: null,
        renewalSoon: false
      }
    ],

    recommendations: [
      {
        name: 'SIP Mutual Funds',
        reason: 'Diversified investment strategy',
        match: 'High'
      },
      {
        name: 'Term Insurance',
        reason: 'Age-appropriate coverage',
        match: 'Medium'
      },
      {
        name: 'Health Insurance',
        reason: 'Essential health protection',
        match: 'Medium'
      }
    ],

    interactions: [
      {
        type: 'Call',
        date: '02 Nov 2023',
        notes: 'Detailed discussion about various investment options. Client very knowledgeable about markets.',
        outcome: 'Interested in ULIP'
      },
      {
        type: 'Email',
        date: '03 Nov 2023',
        notes: 'Sent comparison of ULIP vs mutual funds with detailed returns analysis.',
        outcome: null
      },
      {
        type: 'In-Person',
        date: '10 Nov 2023',
        notes: 'Met to complete ULIP application. Client also showed interest in expanding investment portfolio in future.',
        outcome: 'Converted'
      }
    ]
  },
  {
    id: 5,
    name: 'Suresh Reddy',
    photo: null,
    phone: '+91 9876543213',
    email: 'suresh.r@example.com',
    status: 'Inactive',
    lastPurchase: 'Car Insurance (2 years ago)',
    nextAction: 'Re-engagement needed',
    age: '40',
    occupation: 'Government Employee',
    income: '₹8L - ₹12L',
    location: 'Chennai',
    clientSince: 'May 2021',
    riskProfile: 'Conservative',
    family: {
      'Spouse': 'Lakshmi Reddy (38)',
      'Children': 'Aditya (10)'
    },
    
    aiInsight: 'Suresh hasn\'t engaged in 18 months. His stable government job offers security, but likely has limited insurance coverage through employer. His son is 10, making education planning relevant. Re-engagement could focus on child\'s future needs.',
    
    products: [
      {
        name: 'Car Insurance',
        details: 'HDFC ERGO Comprehensive',
        value: 'Policy expired',
        date: 'Purchased: May 2021',
        renewalDate: 'Expired: May 2022',
        renewalSoon: false
      }
    ],

    recommendations: [
      {
        name: 'Child Education Plan',
        reason: '10-year-old child, future planning',
        match: 'High'
      },
      {
        name: 'Term Insurance',
        reason: 'Family financial security',
        match: 'Medium'
      },
      {
        name: 'Fixed Return Products',
        reason: 'Matches conservative profile',
        match: 'Medium'
      }
    ],

    interactions: [
      {
        type: 'Call',
        date: '15 May 2021',
        notes: 'Helped with car insurance policy. Client was price-sensitive but valued comprehensive coverage.',
        outcome: 'Converted'
      },
      {
        type: 'SMS',
        date: '01 May 2022',
        notes: 'Sent renewal reminder for car insurance policy.',
        outcome: 'No response'
      
      },
      {
        type: 'Call',
        date: '10 May 2022',
        notes: 'Follow-up call for policy renewal. Client mentioned getting insurance directly from car dealer.',
        outcome: 'Lost opportunity'
      }
    ]
  }
];

export default ClientEngagement;
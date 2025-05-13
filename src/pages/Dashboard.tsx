import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  CreditCard, 
  ArrowUp, 
  ArrowDown,
  BarChart4,
  Lightbulb,
  Target 
} from 'lucide-react';
import PerformanceChart from '../components/charts/PerformanceChart';
import LeadConversionCard from '../components/dashboard/LeadConversionCard';
import AIInsightCard from '../components/dashboard/AIInsightCard';
import UpcomingTaskCard from '../components/dashboard/UpcomingTaskCard';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Your Dashboard</h1>
        <div className="flex space-x-4">
          <select className="bg-white border border-neutral-200 rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Monthly Income" 
          value="₹32,450" 
          change="+12.5%" 
          isPositive={true}
          icon={<TrendingUp className="h-6 w-6 text-primary-600" />}
        />
        <StatCard 
          title="New Leads" 
          value="124" 
          change="+6.2%" 
          isPositive={true}
          icon={<Target className="h-6 w-6 text-primary-600" />}
        />
        <StatCard 
          title="Products Sold" 
          value="28" 
          change="-2.4%" 
          isPositive={false}
          icon={<CreditCard className="h-6 w-6 text-primary-600" />}
        />
        <StatCard 
          title="Active Clients" 
          value="246" 
          change="+18.3%" 
          isPositive={true}
          icon={<Users className="h-6 w-6 text-primary-600" />}
        />
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance chart - 2/3 width */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-neutral-800">Performance Overview</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-primary-600 text-white rounded-md">Income</button>
              <button className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-md">Products</button>
              <button className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-md">Leads</button>
            </div>
          </div>
          <PerformanceChart />
        </div>

        {/* Right sidebar - 1/3 width */}
        <div className="space-y-6">
          <AIInsightCard 
            icon={<Lightbulb className="h-5 w-5" />}
            title="AI Insight"
            message="Your conversion rate for health insurance leads is 15% below average. Try our new pitch script focused on family benefits."
            actionText="View Suggestion"
          />
          
          <LeadConversionCard />

          <UpcomingTaskCard 
            icon={<Calendar className="h-5 w-5" />}
            title="Follow-ups for Today"
            tasks={[
              { id: 1, title: "Call Vikram about term insurance", time: "11:30 AM" },
              { id: 2, title: "Send investment options to Priya", time: "2:00 PM" },
              { id: 3, title: "Check Rajesh's loan application status", time: "4:15 PM" }
            ]}
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-neutral-800">Top Performing Products</h2>
            <button className="text-primary-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <ProductItem 
              name="Term Life Insurance" 
              category="Insurance" 
              commission="₹3,200"
              conversionRate="32%"
            />
            <ProductItem 
              name="SBI Credit Card" 
              category="Banking" 
              commission="₹1,800"
              conversionRate="28%"
            />
            <ProductItem 
              name="Home Loan" 
              category="Loans" 
              commission="₹8,500"
              conversionRate="22%"
            />
            <ProductItem 
              name="Health Insurance" 
              category="Insurance" 
              commission="₹2,700"
              conversionRate="18%"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-neutral-800">Learning Progress</h2>
            <button className="text-primary-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <LearningItem 
              title="Mastering ULIPs" 
              category="Insurance" 
              progress={100}
              completed={true}
            />
            <LearningItem 
              title="Credit Card Sales Techniques" 
              category="Banking" 
              progress={65}
              completed={false}
            />
            <LearningItem 
              title="Digital Onboarding Process" 
              category="Training" 
              progress={30}
              completed={false}
            />
            <LearningItem 
              title="Investment Products Deep Dive" 
              category="Investments" 
              progress={10}
              completed={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <p className="text-2xl font-bold text-neutral-800 mt-1">{value}</p>
        </div>
        <div className="bg-primary-50 p-2 rounded-lg h-fit">
          {icon}
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${isPositive ? 'bg-success-100 text-success-800' : 'bg-error-100 text-error-800'}`}>
          {isPositive ? <ArrowUp size={12} className="mr-0.5" /> : <ArrowDown size={12} className="mr-0.5" />}
          {change}
        </span>
        <span className="ml-2 text-xs text-neutral-500">vs last period</span>
      </div>
    </div>
  );
};

interface ProductItemProps {
  name: string;
  category: string;
  commission: string;
  conversionRate: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, category, commission, conversionRate }) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-md transition-colors">
      <div className="flex items-center">
        <div className="bg-primary-100 p-1.5 rounded-md">
          <CreditCard size={16} className="text-primary-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-800">{name}</p>
          <p className="text-xs text-neutral-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-neutral-800">{commission}</p>
        <p className="text-xs text-neutral-500">Conv. Rate: {conversionRate}</p>
      </div>
    </div>
  );
};

interface LearningItemProps {
  title: string;
  category: string;
  progress: number;
  completed: boolean;
}

const LearningItem: React.FC<LearningItemProps> = ({ title, category, progress, completed }) => {
  return (
    <div className="p-3 hover:bg-neutral-50 rounded-md transition-colors">
      <div className="flex justify-between items-center mb-1">
        <div>
          <p className="text-sm font-medium text-neutral-800">{title}</p>
          <p className="text-xs text-neutral-500">{category}</p>
        </div>
        {completed ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
            Completed
          </span>
        ) : (
          <span className="text-xs font-medium text-neutral-600">{progress}%</span>
        )}
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-1.5 mt-1">
        <div 
          className={`h-1.5 rounded-full ${completed ? 'bg-success-500' : 'bg-primary-500'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
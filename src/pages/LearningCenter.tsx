import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Award, 
  CheckCircle, 
  Clock, 
  BarChart2, 
  Zap, 
  Bookmark,
  Users, 
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';

const LearningCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recommended');
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Personalized Learning Path</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-white border border-neutral-200 text-neutral-700 rounded-md">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-primary-600 text-white rounded-md">
            My Progress
          </button>
        </div>
      </div>

      {/* Learning stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-500">Courses Completed</p>
              <p className="text-2xl font-bold text-neutral-800 mt-1">8 / 24</p>
            </div>
            <div className="bg-primary-50 p-2 rounded-lg h-fit">
              <Award className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-3 w-full bg-neutral-200 rounded-full h-2.5">
            <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-500">Quiz Performance</p>
              <p className="text-2xl font-bold text-neutral-800 mt-1">82%</p>
            </div>
            <div className="bg-success-50 p-2 rounded-lg h-fit">
              <BarChart2 className="h-6 w-6 text-success-600" />
            </div>
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            Top 15% among all GroMo Partners
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-500">Learning Streak</p>
              <p className="text-2xl font-bold text-neutral-800 mt-1">14 days</p>
            </div>
            <div className="bg-warning-50 p-2 rounded-lg h-fit">
              <Zap className="h-6 w-6 text-warning-600" />
            </div>
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            Keep going! 1 more day to unlock a badge
          </div>
        </div>
      </div>

      {/* Personalized roadmap */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-4">
          <div className="bg-primary-50 p-2 rounded-lg mr-3">
            <BookOpen className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-800">Your Learning Roadmap</h2>
            <p className="text-sm text-neutral-500">Personalized based on your performance and goals</p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-100"></div>
          
          <div className="space-y-8 ml-8">
            {/* Current focus */}
            <div>
              <h3 className="text-md font-medium text-neutral-800 mb-3 -ml-8 flex items-center">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white mr-2">
                  <Clock size={16} />
                </div>
                Current Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RoadmapCourseCard 
                  title="Health Insurance Sales Mastery" 
                  description="Learn to position health insurance benefits effectively and handle common objections."
                  progress={65}
                  isActive={true}
                  tag="High Priority"
                />
                <RoadmapCourseCard 
                  title="Understanding ULIPs vs Mutual Funds" 
                  description="Comparative analysis and positioning ULIPs against pure investment options."
                  progress={30}
                  isActive={true}
                  tag="Product Knowledge"
                />
              </div>
            </div>

            {/* Upcoming courses */}
            <div>
              <h3 className="text-md font-medium text-neutral-800 mb-3 -ml-8 flex items-center">
                <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-600 mr-2">
                  <ChevronDown size={16} />
                </div>
                Up Next
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RoadmapCourseCard 
                  title="Digital Onboarding Process" 
                  description="Learn the paperless onboarding process for all financial products."
                  progress={0}
                  isActive={false}
                  tag="Process Training"
                />
                <RoadmapCourseCard 
                  title="Personal Finance for Clients" 
                  description="Understand how to create holistic financial plans for your clients."
                  progress={0}
                  isActive={false}
                  tag="Advisory Skills"
                />
              </div>
            </div>

            {/* Completed courses */}
            <div>
              <h3 className="text-md font-medium text-neutral-800 mb-3 -ml-8 flex items-center">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center text-success-600 mr-2">
                  <CheckCircle size={16} />
                </div>
                Completed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RoadmapCourseCard 
                  title="Term Insurance Essentials" 
                  description="Core principles and sales techniques for term insurance products."
                  progress={100}
                  isActive={false}
                  isCompleted={true}
                  tag="Completed"
                />
                <RoadmapCourseCard 
                  title="Regulatory Compliance Basics" 
                  description="Essential regulations and compliance practices for financial product advisors."
                  progress={100}
                  isActive={false}
                  isCompleted={true}
                  tag="Completed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning catalog */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-neutral-800">Learning Catalog</h2>
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search courses, topics, or skills..."
              className="w-full bg-white py-2 pl-10 pr-3 border border-neutral-200 rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-4">
          <div className="flex -mb-px">
            <button
              className={`py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'recommended'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'popular'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'new'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('new')}
            >
              New
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === 'saved'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard 
            title="Advanced Objection Handling" 
            description="Master the art of addressing client concerns and turning objections into opportunities."
            category="Sales Skills"
            duration="45 mins"
            level="Intermediate"
            learners={542}
          />
          <CourseCard 
            title="Credit Card Sales Techniques" 
            description="Effective methods to position credit cards based on customer lifestyle and needs."
            category="Banking Products"
            duration="30 mins"
            level="Beginner"
            learners={873}
          />
          <CourseCard 
            title="Personal Loans Deep Dive" 
            description="Complete guide to personal loan products, eligibility criteria, and selling strategies."
            category="Loan Products"
            duration="60 mins"
            level="Intermediate"
            learners={386}
          />
          <CourseCard 
            title="Insurance for Business Owners" 
            description="Specialized insurance solutions for entrepreneurs and business owners."
            category="Insurance"
            duration="75 mins"
            level="Advanced"
            learners={291}
          />
          <CourseCard 
            title="Financial Planning Basics" 
            description="Fundamentals of creating financial plans for different customer segments."
            category="Advisory"
            duration="90 mins"
            level="Beginner"
            learners={614}
          />
          <CourseCard 
            title="Digital Tools for Agents" 
            description="Maximizing productivity with GroMo's suite of digital sales tools."
            category="Technology Skills"
            duration="40 mins"
            level="Beginner"
            learners={729}
          />
        </div>
      </div>
    </div>
  );
};

interface RoadmapCourseCardProps {
  title: string;
  description: string;
  progress: number;
  isActive: boolean;
  isCompleted?: boolean;
  tag?: string;
}

const RoadmapCourseCard: React.FC<RoadmapCourseCardProps> = ({ 
  title, description, progress, isActive, isCompleted = false, tag 
}) => {
  let tagClass = 'bg-neutral-100 text-neutral-800';
  if (isActive) tagClass = 'bg-primary-50 text-primary-700';
  if (isCompleted) tagClass = 'bg-success-50 text-success-700';
  if (tag === 'High Priority') tagClass = 'bg-error-50 text-error-700';
  
  return (
    <div className={`border ${isActive ? 'border-primary-200 bg-primary-50' : 'border-neutral-200 bg-white'} rounded-lg p-4`}>
      {tag && (
        <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium mb-2 ${tagClass}`}>
          {tag}
        </span>
      )}
      <h4 className="font-medium text-neutral-800">{title}</h4>
      <p className="text-sm text-neutral-600 mt-1 mb-3">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <div className="w-full bg-neutral-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full ${isCompleted ? 'bg-success-500' : 'bg-primary-500'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-neutral-500 mt-1">
            {progress}% Complete
          </div>
        </div>
        
        <button className={`p-2 rounded-full ${
          isCompleted 
            ? 'bg-success-100 text-success-600'
            : isActive
              ? 'bg-primary-100 text-primary-600'
              : 'bg-neutral-100 text-neutral-500'
        }`}>
          {isCompleted ? <CheckCircle size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  learners: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  category,
  duration,
  level,
  learners
}) => {
  const levelColor = 
    level === 'Beginner' ? 'bg-success-50 text-success-700' :
    level === 'Intermediate' ? 'bg-warning-50 text-warning-700' :
    'bg-error-50 text-error-700';
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full">
      <div className="relative bg-neutral-100 h-32 flex items-center justify-center">
        {/* Course illustration placeholder */}
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-primary-600" />
        </div>
        <button className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-60 backdrop-blur-sm rounded-full hover:bg-opacity-80">
          <Bookmark className="h-4 w-4 text-neutral-600" />
        </button>
        <div className="absolute bottom-2 left-2">
          <span className={`inline-block px-2 py-0.5 text-xs rounded-full font-medium ${levelColor}`}>
            {level}
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs text-neutral-500">{category}</span>
        <h3 className="font-medium text-neutral-800 mt-1">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
          <div className="flex items-center text-xs text-neutral-500">
            <Clock size={14} className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-xs text-neutral-500">
            <Users size={14} className="mr-1" />
            {learners} learners
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100">
        <button className="w-full py-1.5 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default LearningCenter;
import React, { useState } from 'react';
import { Mic, PauseCircle, MessageSquare, Send, Play, ChevronRight, HelpCircle } from 'lucide-react';

const SalesCoach: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">AI Sales Coach</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 text-sm bg-primary-600 text-white rounded-md">
            <HelpCircle size={16} className="mr-1" />
            Help
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main conversation area */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="border-b border-neutral-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
                <Mic size={20} />
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-neutral-800">Live Call Assistant</h2>
                <p className="text-sm text-neutral-500">AI guidance during your customer calls</p>
              </div>
            </div>
          </div>
          
          {/* Conversation window */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            <SystemMessage 
              message="Welcome to your AI Sales Coach. Start a conversation, or simulate a call with a customer to receive real-time guidance."
            />
            
            <AIMessage 
              message="Hello! I'm your AI Sales Coach. I can help you with product pitches, objection handling, and closing techniques. What financial product are you planning to sell today?"
            />
            
            <UserMessage 
              message="I'm planning to sell term insurance to a 35-year-old IT professional with a family."
            />
            
            <AIMessage 
              message="Great choice! Term insurance is perfect for young professionals with dependents. Here are some key selling points to emphasize:

1. Affordability: Premiums are lower at age 35
2. Family security: Highlight how it protects their spouse and children
3. Tax benefits: Premiums qualify for tax deduction under Section 80C
4. Income replacement: Cover should be 10-15x annual income

Would you like me to prepare some objection handling examples specific to term insurance?"
            />

            <UserMessage 
              message="Yes, please help me with common objections."
            />
            
            <AIMessage 
              message="Here are common term insurance objections and how to address them:

1. 'I already have life insurance through my employer'
   → Response: 'That's great, but employer coverage is often limited and ends if you change jobs. Personal term insurance provides consistent, tailored coverage.'

2. 'Term insurance has no returns if I survive the term'
   → Response: 'True, but that's why it's so affordable. It's like your house insurance - you don't expect returns, but the protection when needed is invaluable.'

3. 'I don't have dependents yet'
   → Response: 'Term insurance is most affordable when purchased young. Locking in low rates now saves money long-term, especially as you plan for family in future.'

4. 'The process is too complicated'
   → Response: 'That's where I can help! We've simplified the process with digital applications and minimal documentation. I'll guide you through each step.'"
            />

            <SystemMessage 
              message="The AI is detecting that your customer might be concerned about pricing. Consider addressing the value proposition rather than just the cost."
            />
          </div>
          
          {/* Input area */}
          <div className="border-t border-neutral-200 p-3">
            <div className="flex items-center">
              <button 
                className={`p-2 rounded-full ${isRecording ? 'bg-error-100 text-error-600' : 'bg-neutral-100 text-neutral-600'} mr-2`}
                onClick={toggleRecording}
              >
                {isRecording ? <PauseCircle size={20} /> : <Mic size={20} />}
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message or customer's questions..."
                className="flex-1 border border-neutral-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button className="p-2 bg-primary-600 text-white rounded-full ml-2">
                <Send size={20} />
              </button>
            </div>
            {isRecording && (
              <div className="mt-2 text-xs text-neutral-500 flex items-center">
                <span className="w-2 h-2 bg-error-500 rounded-full mr-1 animate-pulse"></span>
                Recording... Speak clearly or ask your customer to repeat
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium text-neutral-800 mb-3">Product Knowledge</h3>
            <div className="space-y-3">
              <ProductCard 
                name="Term Life Insurance"
                description="Protection for family with affordable premiums"
              />
              <ProductCard 
                name="Health Insurance"
                description="Comprehensive coverage for medical expenses"
              />
              <ProductCard 
                name="ULIP"
                description="Investment with insurance benefits"
              />
              <button className="text-primary-600 text-sm font-medium flex items-center mt-2">
                View all products
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium text-neutral-800 mb-3">Practice Scenarios</h3>
            <div className="space-y-3">
              <PracticeCard
                title="Term Insurance for Young Family"
                difficulty="Easy"
              />
              <PracticeCard
                title="Retirement Planning Objections"
                difficulty="Medium"
              />
              <PracticeCard
                title="Switching from Endowment to Term"
                difficulty="Hard"
              />
              <button className="text-primary-600 text-sm font-medium flex items-center mt-2">
                More scenarios
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium text-neutral-800 mb-3">Recent Performance</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  label="Avg. Call Quality"
                  value="8.4/10"
                  trend="+0.6"
                  isPositive={true}
                />
                <MetricCard
                  label="Objection Handling"
                  value="7.2/10"
                  trend="-0.3"
                  isPositive={false}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700 mb-1">Improvement Areas</p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-error-500 rounded-full mr-2"></span>
                    Need to address value over price more effectively
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-warning-500 rounded-full mr-2"></span>
                    Could improve on using customer testimonials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MessageProps {
  message: string;
}

const UserMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="flex items-start justify-end">
    <div className="bg-primary-50 text-neutral-800 rounded-lg p-3 max-w-md">
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const AIMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="flex items-start">
    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 mt-1">
      <MessageSquare size={16} />
    </div>
    <div className="bg-white border border-neutral-200 rounded-lg p-3 max-w-md shadow-sm">
      <p className="text-sm whitespace-pre-line">{message}</p>
    </div>
  </div>
);

const SystemMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="flex justify-center">
    <div className="bg-neutral-100 text-neutral-600 rounded-lg px-3 py-2 text-xs max-w-md text-center">
      {message}
    </div>
  </div>
);

interface ProductCardProps {
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description }) => (
  <div className="border border-neutral-200 rounded-md p-3 hover:bg-neutral-50 transition-colors">
    <p className="text-sm font-medium text-neutral-800">{name}</p>
    <p className="text-xs text-neutral-500 mt-1">{description}</p>
  </div>
);

interface PracticeCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const PracticeCard: React.FC<PracticeCardProps> = ({ title, difficulty }) => {
  const difficultyColor = 
    difficulty === 'Easy' ? 'bg-success-100 text-success-800' :
    difficulty === 'Medium' ? 'bg-warning-100 text-warning-800' :
    'bg-error-100 text-error-800';
  
  return (
    <div className="border border-neutral-200 rounded-md p-3 hover:bg-neutral-50 transition-colors">
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-neutral-800">{title}</p>
        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs text-neutral-500">5-10 min</span>
        <button className="text-primary-600 p-1.5 rounded-full bg-primary-50">
          <Play size={14} />
        </button>
      </div>
    </div>
  );
};

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, isPositive }) => (
  <div className="bg-neutral-50 rounded-md p-3">
    <p className="text-xs text-neutral-500">{label}</p>
    <p className="text-lg font-semibold text-neutral-800 mt-1">{value}</p>
    <span className={`text-xs ${isPositive ? 'text-success-600' : 'text-error-600'}`}>
      {trend} pts
    </span>
  </div>
);

export default SalesCoach;
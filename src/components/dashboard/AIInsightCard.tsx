import React from 'react';

interface AIInsightCardProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  actionText: string;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({ 
  icon, 
  title,
  message,
  actionText
}) => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow p-4 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary-500 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-primary-500 opacity-10"></div>
      
      <div className="flex items-center">
        <div className="bg-white bg-opacity-20 p-2 rounded-lg">
          {icon}
        </div>
        <h3 className="font-medium ml-2">{title}</h3>
      </div>
      
      <div className="mt-3 relative z-10">
        <p className="text-sm text-primary-50">{message}</p>
      </div>
      
      <button className="mt-4 bg-white text-primary-700 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-primary-50 transition-colors">
        {actionText}
      </button>
    </div>
  );
};

export default AIInsightCard;
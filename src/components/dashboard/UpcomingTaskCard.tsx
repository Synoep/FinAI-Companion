import React from 'react';

interface Task {
  id: number;
  title: string;
  time: string;
}

interface UpcomingTaskCardProps {
  icon: React.ReactNode;
  title: string;
  tasks: Task[];
}

const UpcomingTaskCard: React.FC<UpcomingTaskCardProps> = ({ icon, title, tasks }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-3">
        <div className="bg-primary-100 p-1.5 rounded-md">
          {React.cloneElement(icon as React.ReactElement, { className: 'text-primary-600', size: 18 })}
        </div>
        <h3 className="font-medium text-neutral-800 ml-2">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center">
            <div className="w-4 h-4 border-2 border-primary-600 rounded-full mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm text-neutral-800">{task.title}</p>
              <p className="text-xs text-neutral-500">{task.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full bg-neutral-100 text-primary-600 text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">
        View All Tasks
      </button>
    </div>
  );
};

export default UpcomingTaskCard;
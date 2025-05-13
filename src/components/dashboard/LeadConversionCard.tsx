import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const LeadConversionCard: React.FC = () => {
  const data = {
    labels: ['Converted', 'In Progress', 'Unconverted'],
    datasets: [
      {
        data: [42, 35, 23],
        backgroundColor: [
          '#1E40AF', // Primary
          '#FFC107', // Secondary
          '#E5E7EB', // Light gray
        ],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(30, 64, 175, 0.9)',
        bodyFont: {
          size: 14,
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-medium text-neutral-800 mb-3">Lead Conversion</h3>
      <div className="h-[150px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-neutral-800">42%</span>
          <span className="text-xs text-neutral-500">Conversion</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.labels.map((label, index) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></div>
              <span className="text-xs text-neutral-600">{label}</span>
            </div>
            <span className="text-sm font-medium text-neutral-800 mt-1">
              {data.datasets[0].data[index]}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadConversionCard;
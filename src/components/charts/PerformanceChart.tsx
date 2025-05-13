import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceChart: React.FC = () => {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Monthly Income',
        data: [18000, 22500, 21700, 25800, 29000, 32450, 34500],
        borderColor: '#1E40AF',
        backgroundColor: 'rgba(30, 64, 175, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#1E40AF',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(30, 64, 175, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        bodyFont: {
          size: 14
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `₹ ${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280'
        }
      },
      y: {
        grid: {
          color: 'rgba(209, 213, 219, 0.5)'
        },
        ticks: {
          color: '#6B7280',
          callback: function(value: any) {
            return '₹' + value / 1000 + 'k';
          }
        }
      }
    }
  };

  return (
    <div style={{ height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;
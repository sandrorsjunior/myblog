import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Article = ({contentOfArticle}) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Visitors',
        data: [300, 500, 400, 600],
        backgroundColor: '#0d6efd',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const tags = (items) => (
    <div className="mb-3">
      {items.map((tag, idx) => (
        <span key={idx} className="badge bg-secondary me-1">{tag}</span>
      ))}
    </div>
  );

  return (
    <div className="my-5">
      <article className="card shadow-sm">
        {contentOfArticle}
      </article>
    </div>
  );
};



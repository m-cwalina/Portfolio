import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement
);

export default function ProjectShowChart ({project}) {

  const barData = {
    labels: ['', ...project.languages.slice(2, 6).map(language => language.title), ''],
    datasets: [
      {
        fill: false,
        label: 'Strength',
        data: [0, ...project.languages.slice(2, 6).map(language => language.strength), 0],
        backgroundColor: 'rgba(148, 163, 184, 0.6)',
        borderColor: '#ff8c00',
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#f1f5f9',
        pointBorderColor: '#1e293b',
        pointBorderWidth: 2
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: { color: '#64748b' },
        grid: { color: '#334155' },
      },
      x: {
        ticks: { color: '#64748b', display: false },
        grid: { color: '#334155' },
      },
    }
  }

  return (
    <Line options={barOptions} data={barData} />
  )
}

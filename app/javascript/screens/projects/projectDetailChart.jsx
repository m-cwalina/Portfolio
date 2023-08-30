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
import { Bar } from 'react-chartjs-2';

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

export default function ProjectDetailChart({ project }) {

  const barData = {
    labels: ['', ...project.languages.map(language => language.title), ''],
    datasets: [
      {
        fill: true,
        label: 'Strength',
        data: [0, ...project.languages.map(language => language.strength), 0],
        backgroundColor: 'rgb(255, 140, 0, 0.6)',
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
        title: {
          display: true,
          text: 'Strength (%)',
          color: '#0f172a',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        ticks: {
          color: '#0f172a',
          callback: function (value) {
            return value + '%';
          }
        },
        grid: { color: '#0f172a' },
      },
      x: {
        ticks: { color: '#ff8c00' },
        grid: { color: '#0f172a' },
      },
    }
  }

  return (
    <Bar options={barOptions} data={barData} />
  )
}

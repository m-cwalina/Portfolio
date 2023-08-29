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

export default function ProjectShowChart ({project}) {

  const barData = {
    labels: project.languages.map(language => language.title),
    datasets: [
      {
        fill: true,
        label: 'Per Month',
        data: project.languages.map(language => language.strength),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Strengths',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  }

  return (
    <Bar options={barOptions} data={barData} />
  )
}

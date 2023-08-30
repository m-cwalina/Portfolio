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
import { Typography, Box } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from "react-router-dom";

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
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Languages',
        color: '#cbd5e1',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      ticks: {
        color: '#cbd5e1',
      },
      grid: {
        color: '#1e293b',
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      font: {
        weight: 'bold',
        size: 10,
      },
      title: {
        display: true,
        text: 'Strength (%)',
        color: '#cbd5e1',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      ticks: {
        color: '#cbd5e1',
        callback: function (value) {
          return value + '%';
        }
      },
      grid: {
        color: '#1e293b',
        borderDash: [5, 5],
      },
    },
  }
};

const mappedData = [
  { label: 'Ruby', value: 90 },
  { label: 'PHP', value: 50 },
  { label: 'Rails', value: 90 },
  { label: 'PostgreSQL', value: 65 },
  { label: 'React Native', value: 60 },
  { label: 'React.js', value: 80 },
  { label: 'Redux', value: 70 },
  { label: 'MUI', value: 75 },
  { label: 'Javascript', value: 90 },
  { label: 'HTML/CSS', value: 95 },
  { label: 'Symfony', value: 30 },
  { label: 'Git', value: 80 },
  { label: 'Github', value: 80 },
  { label: 'Heroku', value: 40 },
];

const labels = mappedData.map(item => item.label);
const dataValues = mappedData.map(item => item.value);

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Language Strength',
      data: dataValues,
      borderColor: '#94a3b8',
      backgroundColor: 'rgba(100, 116, 139, 0.3)',
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#f1f5f9',
      pointBorderColor: '#1e293b',
      pointBorderWidth: 2
    }
  ],
};

export default function Chart() {

  return (
    <React.Fragment>
      <Box margin={2}>
        <Typography
          component='div'
          align='left'
          variant='h2'
          sx={{ fontFamily: "'Roboto', sans-serif",
                fontWeight: 800, color: '#cbd5e1' }}>
          Skills
        </Typography>
      </Box>

      <Line options={options} data={data} />

      <Link to='/skills'>
        <Box
          marginTop='75px'
          display='flex'
          alignItems='center'
          justifyContent='right'>
          <Typography
            sx={{ color: '#ff8c00', fontWeight: 'bold' }}
            variant='h4'>
            Learn More
          </Typography>
          <ArrowForwardIosOutlinedIcon fontSize='large' sx={{ color: '#ff8c00' }} />
        </Box>
      </Link>
    </React.Fragment>
  )
}

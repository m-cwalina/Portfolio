import React from 'react';
import { Typography, Box } from '@mui/material';
import TeeTimeChart from '../../../images/TeeTimeChart.png';

export default function ReactSection() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
        <img className='react-image' src={TeeTimeChart}></img>
      </Box>
      <Box sx={{ width: '50%' }}>
        <Typography
          variant='h2'
          align='left'
          color='#EDF0F5'
          sx={{ padding: '30px', fontWeight: 'bold' }}>
          React | React-Router
        </Typography>
        <Typography
          variant='body2'
          align='left'
          color='#CCCCCC'
          sx={{ padding: '30px', fontSize: '25px', textAlign: 'justify' }}>
          <p>
            ConnectGolf was written in React.js using Javascript. I utilized React-Router V6 for a better user experience. I let the frontend handle all redirections and routing throughout the App. I exploited the useLoaderData Hooks from React-Router to handle data across components.
          </p>
          <p>
            More libraries included are Chart.js and MUI React. Chart.js was used to display data about the current analytics for the club. Chart.js is a great library to display data using charts across React components. MUI React was used to assemble the UI using pre built components. MUI react aids in consistent components across the application, bolstering the speed to build an efficient UI.
          </p>
        </Typography>
      </Box>
    </Box>
  )
}

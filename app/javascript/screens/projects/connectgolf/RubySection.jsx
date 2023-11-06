import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import TeeTimes from '../../../images/MacBookProTeeTimes.png'


export default function RubySection() {
  return (
    <>
      <Typography
        variant='h2'
        align='right'
        color='#ff8c00'
        sx={{ padding: '30px', fontWeight: 'bold' }}>
        Backend
      </Typography>
      <Divider sx={{ backgroundColor: '#ff8c00', height: '2px', marginBottom: '50px' }} />
      <Box display='flex'>
        <Box width='50%'>
          <Typography
            variant='h2'
            align='left'
            color='#EDF0F5'
            sx={{ padding: '30px', fontWeight: 'bold' }}>
            Ruby | Rails
          </Typography>
          <Typography
            variant='body2'
            align='left'
            color='#CCCCCC'
            sx={{ padding: '30px', fontSize: '25px', textAlign: 'justify' }}>
            <p>
            The model TeeTimes handles all relations, scopes and custom Class Methods of TeeTime. The first scope sets TeeTimes based upon created_at between two dates. The second scope, available_teetime, filters all tee_times that have more than one available spot on the teetime. The two many relations defines a many relation with users and bookings.
            </p>
            <p>
            The custom class Method scopes all TeeTimes between two periods based upon day, month or year. I then INNER JOIN bookings on TeeTime and group each TeeTime by truncting the time attribute on TeeTime. I call count on the amount of bookings per day, month or year and return its count. This class method is helpful to build a dataset for the chart.
            </p>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
          <img className='react-image' src={TeeTimes}></img>
        </Box>
      </Box>
    </>
  )
}

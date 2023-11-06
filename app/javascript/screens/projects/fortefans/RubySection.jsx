import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FanLink from '../../../images/MacBookProFanLink.png'


export default function RubySection () {
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
            The mobile application is supported by a RESTful API built with Ruby on Rails. This model handles queries, virtual attributes, validations and relations for FanLinks. The caluculate_daily_views is an instance method that returns a hash of dates as keys and values as count always with 7 dates. The object is added to the FanLink Instance through the attribute daily_views.
            </p>
            <p>
            The class method ranked calls itself on FanLink to find the rank of FanLinks partitioned by the relation of FanLink and Link. It is then ordered by count. This SQL query uses Rank, Order_by and Partition from PostgreSQL.
            </p>
            <p>
            I have written Service Objects to handle more business logic when needed. For example, connecting to third-party APIs or when there are multiple steps needed for the function to compute properly. The backend is supported by function, unit, and integration tests with the use of MiniTest. Other important functions include user authentication handled by JWT Tokens passed through headers in HTTP requests, SideKiq for queues | background jobs and skinny controllers to handle redirects and errors. It is a robust App capable of scale.
            </p>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
          <img className='fanlink-image' src={FanLink}></img>
        </Box>
      </Box>
    </>
  )
}

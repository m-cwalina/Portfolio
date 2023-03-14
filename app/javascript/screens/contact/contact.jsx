import { Typography, Box } from '@mui/material';
import React from 'react';
import Map from './map';


export default function Contact() {

  return (
    <>
      <Typography align='center' variant='h1' component='div' fontWeight='bold'>
        Get in Touch
      </Typography>
      <Box>
        <Map />
      </Box>
    </>
  )
}

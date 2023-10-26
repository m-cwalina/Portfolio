import React from 'react';
import { Typography } from '@mui/material';

export default function TitleSection({project}) {
  return (
    <>
      <Typography
        variant='h1'
        align='left'
        color='#EDF0F5'
        sx={{ fontWeight: 'bold', padding: '30px' }}>
        {project.title}
      </Typography>
      <Typography
        variant='h4'
        align='left'
        color='#ff8c00'
        sx={{ fontWeight: 'bold', padding: '30px'}}>
        {project.description}
      </Typography>
    </>
  )
}

import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import LanguageIcons from '../../../components/LanguageIcons';
import Chart from '../projectDetailChart';

export default function ExtraSection({ project }) {
  return (
    <>
      <Typography
        variant='h2'
        align='left'
        color='#ff8c00'
        sx={{ padding: '30px', fontWeight: 'bold' }}>
        Extras
      </Typography>
      <Divider sx={{ backgroundColor: '#ff8c00', height: '2px', marginBottom: '50px' }} />
      <Typography
        variant='h2'
        align='center'
        color='#EDF0F5'
        sx={{ padding: '30px', fontWeight: 'bold' }}>
        Languages
      </Typography>
      <Box
        align='center'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          padding: '30px',
          gridGap: '10px',
          margin: 'auto',
          width: '100%'
        }}>
        <LanguageIcons languages={project.languages} />
      </Box>
      <Box paddingLeft='100px' paddingRight='100px' height="600px" display='flex' justifyContent='center'>
        <Chart project={project} />
      </Box>
    </>
  )
}

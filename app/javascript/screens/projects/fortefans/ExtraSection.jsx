import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import LanguageIcons from '../../../components/LanguageIcons';
import Posts from '../../../images/Posts.png'
import Coins from '../../../images/Coins.png'
import Links from '../../../images/Links.png'

export default function ExtraSection ({project}) {
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
      <Box display='flex' justifyContent='space-evenly' marginTop='100px' paddingBottom='100px'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <img className='artist-profile-image' src={Posts}></img>
          <Typography
            variant='h6'
            align='center'
            color='#ff8c00'
            sx={{ padding: '30px', fontWeight: 'bold' }}>
            Posts
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <img className='artist-profile-image' src={Coins}></img>
          <Typography
            variant='h6'
            align='center'
            color='#ff8c00'
            sx={{ padding: '30px', fontWeight: 'bold' }}>
            Coins
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <img className='artist-profile-image' src={Links}></img>
          <Typography
            variant='h6'
            align='center'
            color='#ff8c00'
            sx={{ padding: '30px', fontWeight: 'bold' }}>
            Links
          </Typography>
        </Box>
      </Box>
    </>
  )
}

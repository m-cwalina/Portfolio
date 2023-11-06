import React from 'react';
import { Typography, Box } from '@mui/material';
import ArtistProfile from '../../../images/ArtistProfile.png';

export default function ReactNativeSection () {
  return (
    <Box className='react-native-container'>
      <Box sx={{ paddingRight: '50px' }}>
        <img className='artist-profile-image' src={ArtistProfile}></img>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          justifyContent: 'center'
        }}>
        <Typography
          variant='h2'
          align='center'
          color='#EDF0F5'
          sx={{ fontWeight: 'bold', padding: '30px' }}>
          React Native
        </Typography>
        <Typography
          variant='body1'
          align='center'
          color='#CCCCCC'
          sx={{ padding: '30px', fontSize: '25px', textAlign: 'justify' }}>
          The application is built using React Native, Redux and NativeBase. Some challenges faced are having an efficient Redux State Store, handling user authentication flow, asynchronous API calls and overall design. We utiliz Redux Toolkit to manage more complex state behavior that is required across components to ensure a one directional flow of state. I employ React Hooks, like useEffect or useState, to build forms or call APIs on page mount. All these tools put together create a powerful and elegant UI/UX experience.
        </Typography>
      </Box>
    </Box>
  )
}

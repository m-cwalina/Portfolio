import { Typography, Box, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import EmailIcon from '../../icons/email'
import GermanIcon from '../../icons/germannumber'
import USAIcon from '../../icons/usanumber'

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 39.187253,
      lng: -54.24015
    },
    zoom: 2
  };

  const Marker = ({text}) => (
    <div>
      <LocationOnIcon
        style ={{
          textAlign: 'center',
          color: 'red',
          transform: 'translate(-50%, -50%)',
          position: 'absolute'}}
          text={text}
      >
      </LocationOnIcon>
    </div>
  )

  return (
    <Box>
      <Box sx={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={52.5200}
            lng={13.4050}
            text={"Berlin"}
          />
          <Marker
            lat={37.3387}
            lng={-121.8853}
            text={"San Jose"}
          />
        </GoogleMapReact>
      </Box>

      <Typography variant='h2' align='center' fontWeight='bold' color="#5AA7BE" gutterBottom marginTop='50px'>Contact Info</Typography>

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Box display='flex' alignItems='flex-start' flexDirection='column' width='50%'>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
            <Typography align='left'><img src={EmailIcon} className='icons'></img></Typography>
            <Typography variant='h6' align='center' sx={{ fontWeight: 'bold' }} color="#A5A5A5">MatthewCwalina@gmail.com</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
            <Typography align='left'><img src={GermanIcon} className='icons'></img></Typography>
            <Typography variant='h6' align='center' sx={{ fontWeight: 'bold' }} color="#A5A5A5">(+49) 177-3168291</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
            <Typography align='left'><img src={USAIcon} className='icons'></img></Typography>
            <Typography variant='h6' align='center' sx={{ fontWeight: 'bold' }} color="#A5A5A5">(+1) 619-9285218</Typography>
          </Stack>
        </Box>
        <Box display='flex' justifyContent='center' width="50%">
          <Typography variant='h6' align='justify' fontWeight='bold' color="#FFFFFF">
            Please feel free to reach out anytime. I am currently looking for work and would love to talk about any current opportunities.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

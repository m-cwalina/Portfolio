import { Typography, Box, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

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
      <Box sx={{
        backgroundColor: '#1e293b',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: 10,
        marginBottom: 10,
        padding: 5
        }}
      >
        <Typography variant='h2' align='center' fontWeight='bold' color="#94a3b8" gutterBottom>Contact</Typography>
        <Stack direction="row">
          <Box width='50%'>
            <Stack justifyContent='center' alignItems='flex-start'>
              <Stack direction='row' justifyContent='center' alignItems='flex-start'>
                <MailOutlineIcon className='interests-icon' />
                <Typography variant='h6' align='right' sx={{ fontWeight: 'bold' }} color="#cbd5e1">MatthewCwalina@gmail.com</Typography>
              </Stack>
              <Stack direction='row' justifyContent='center' alignItems='flex-start'>
                <PhoneIphoneIcon className='interests-icon' />
                <Typography variant='h6' align='right' sx={{ fontWeight: 'bold' }} color="#cbd5e1">(+49) 177-3168291</Typography>
              </Stack>
              <Stack direction='row' justifyContent='center' alignItems='center'>
                <PhoneIphoneIcon className='interests-icon' />
                <Typography variant='h6' align='right' sx={{ fontWeight: 'bold' }} color="#cbd5e1">(+1) 619-9285218</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box width='50%'>
            <Typography variant='h6' align='left' fontWeight='bold' color="#cbd5e1">
              For any business or job opportunities please feel free to text, email or DM me through LinkedIn.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ height: '405px', width: '100%', paddingBottom: 2}}>
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
    </Box>
  )
}

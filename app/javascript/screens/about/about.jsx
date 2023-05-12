import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HikingIcon from '@mui/icons-material/Hiking';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import SJSUIcon from '../../icons/SJSU.png';
import LeWagonIcon from '../../icons/lewagon.png';
import PekingIcon from '../../icons/peking.png';
import ProfilePic from '../../icons/profile.png';
import GermanyIcon from '../../icons/germany.png';
import USAIcon from '../../icons/usa.png';

const BioCard = () => {
  return (
    <Box sx={{
      width: '100%',
      borderRadius: 10,
      padding: 10,
      background: 'linear- gradient(to bottom right, #FFFFFF 50 %, #F5F5F5 100 %)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    }}>
      <Stack direction='row' spacing={3} sx={{ alignItems: 'center', justifyContent:'center' }} >
        <Box><img src={ProfilePic} className='profile-pic'></img></Box>
        <Box>
          <Typography component='div' align='left' variant='h3' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#fafaf9' }}>
            Bio
          </Typography>
          <Typography component='div' align='justify' variant='h6' sx={{ color: '#e7e5e4' }}>
            I was born and raised in California, now I am living between Berlin and
            Lake Tahoe. I've been developing web based applications now for 3 years.
            I love to work across the stack and solve problems. I'm committed to
            writing CLEAN code and building sharp UIs. The feeling of building a
            backend API that works fluidly with the Frontend UI is a rewarding
            experience.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

const EduCard = () => {
  return (
    <Box sx={{
      width: '100%',
      borderRadius: 10,
      padding: 2,
      background: 'linear- gradient(to bottom right, #FFFFFF 50 %, #F5F5F5 100 %)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    }}>
      <Typography p={3} component='div' align='center' variant='h3' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#fafaf9' }}>
        Education
      </Typography>
      <Stack spacing={3}>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Typography sx={{ width: '10%' }}><img src={SJSUIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">San Jose State University</Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">Bsc. Operations Management</Typography>
        </Stack>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Typography sx={{ width: '10%' }}><img src={LeWagonIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">Le Wagon</Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">Full Stack Developement</Typography>
        </Stack>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Typography sx={{ width: '10%' }}><img src={PekingIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">Peking University</Typography>
          <Typography sx={{ width: '33%' }} variant='h6' color="#004282">International Studies</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

const Languages = () => {
  return (
    <Box sx={{
      width: '100%',
      borderRadius: 10,
      padding: 2,
      background: 'linear- gradient(to bottom right, #FFFFFF 50 %, #F5F5F5 100 %)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography p={5} component='div' align='center' variant='h3' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#fafaf9' }}>
        Languages
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Typography sx={{ width: '20%' }} align='center'><img src={GermanyIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '30%' }} align='left' variant='h5'>German</Typography>
          <Typography sx={{ width: '50%' }} align='left' variant='h5'>B2 - Intermediate</Typography>
        </Stack>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Typography sx={{ width: '20%' }} align='center'><img src={USAIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '30%' }} align='left' variant='h5'>English</Typography>
          <Typography sx={{ width: '50%' }} align='left' variant='h5'>C2 - Native</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

const Experience = () => {
  return(
    <Box sx={{
      width: '100%',
      borderRadius: 10,
      padding: 7,
      background: 'linear- gradient(to bottom right, #FFFFFF 50 %, #F5F5F5 100 %)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography p={5} component='div' align='center' variant='h3' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#000e21' }}>
        Experience
      </Typography>
      <Stack spacing={2}>
        <Box>
          <Typography color='#FFFFFF' fontWeight='bold' fontSize={18}>Ignite the Underdog | ForteFans - Jr. Full Stack Developer</Typography>
          <Typography color='#000e21' fontSize={15}>October 2022 - Current</Typography>
          <Typography color='#f5f5f4'> - Translating business requirements into efficient and scalable code</Typography>
          <Typography color='#f5f5f4'> - Collaborating with team members to troubleshoot and develop a robust Rails API</Typography>
          <Typography color='#f5f5f4'> - Helping design a React Native frontend with Native Base & utilize Redux to handle global state management</Typography>
          <Typography color='#f5f5f4'> - Applying a strong understanding of software development principles and best practices</Typography>
        </Box>
        <Divider sx={{ borderColor: '#FFFFFF', borderWidth: 0.5}}/>
        <Box>
          <Typography color='#FFFFFF' fontWeight='bold' fontSize={18}>Starbucks - Barista</Typography>
          <Typography color='#000e21' fontSize={15}>July 2019 - August 2021</Typography>
          <Typography color='#f5f5f4'> - Prepared and sold coffee & food in a busy coffee shop</Typography>
          <Typography color='#f5f5f4'> - Kept a highly organized and clean coffee bar & guest area</Typography>
          <Typography color='#f5f5f4'> - Delivered daily excellent customer service in German </Typography>
        </Box>
        <Divider sx={{ borderColor: '#FFFFFF', borderWidth: 0.5 }} />
        <Box>
          <Typography color='#FFFFFF' fontWeight='bold' fontSize={18}>Hupe Brothers - Co-Founder</Typography>
          <Typography color='#000e21' fontSize={15}>August 2013 - January 2014</Typography>
          <Typography color='#f5f5f4'> - Responsible for online sales and product distribution at e-commerce startup</Typography>
          <Typography color='#f5f5f4'> - Designed an effective packaging & order processing system</Typography>
          <Typography color='#f5f5f4'> - Resolved global customer's purchase issues & complaints</Typography>
        </Box>
        <Divider sx={{ borderColor: '#FFFFFF', borderWidth: 0.5 }} />
        <Box>
          <Typography color='#FFFFFF' fontWeight='bold' fontSize={18}>PolarPro Filters - Intern</Typography>
          <Typography color='#000e21' fontSize={15}>April 2013 - August 2013</Typography>
          <Typography color='#f5f5f4'> - Worked with a team of 5 in order processing</Typography>
          <Typography color='#f5f5f4'> - Assembled and packaged GoPro accessories shipment</Typography>
          <Typography color='#f5f5f4'> - Documented customer purchases & created invoices</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

const InterestsCard = () => {
  return (
    <Box sx={{
      width: '100%',
      borderRadius: 10,
      padding: 2,
      background: 'linear- gradient(to bottom right, #FFFFFF 50 %, #F5F5F5 100 %)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    }}>
      <Typography p={5} component='div' align='center' variant='h3' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#fafaf9' }}>
        Interests
      </Typography>

      <Box sx={{ width: 450, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: 225 }}>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <SportsGolfIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Golf</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <FlightTakeoffIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Aviation</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <DownhillSkiingIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Skiing</Typography>
          </Stack>
        </Box>

        <Box sx={{ width: 225 }}>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <HikingIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Mountains</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <LibraryMusicIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Music</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <LaptopMacIcon className='interests-icon' />
            <Typography sx={{ width: '30%' }} color='#FFFFFF' align='left' variant='h5'>Tech</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default function About() {
  return (
    <Box sx={{marginBottom: 10}}>
      <BioCard />
      <Stack direction='row' spacing={2} marginTop={10}>
        <TurnLeftIcon style={{ width: 400, height: 400, transform: 'rotate(180deg)' }} />
        <EduCard />
      </Stack>
      <Stack direction='row' spacing={2} marginTop={10}>
        <Languages />
        <TurnRightIcon style={{ width: 400, height: 400, transform: 'rotate(180deg)' }} />
      </Stack>
      <Box marginTop={10}>
        <Experience />
      </Box>
      <Stack direction='row' spacing={2} marginTop={10}>
        <TurnLeftIcon style={{ width: 400, height: 400, transform: 'rotate(180deg)' }} />
        <InterestsCard />
      </Stack>
    </Box>
  )
}

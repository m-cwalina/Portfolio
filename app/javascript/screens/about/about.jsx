import React from 'react';
import {Box, Typography, Stack} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SJSUIcon from '../../icons/SJSU.png';
import LeWagonIcon from '../../icons/lewagon.png';
import PekingIcon from '../../icons/peking.png';
import ClubsIcon from '../../icons/clubs.png';
import PlaneIcon from '../../icons/plane.png';
import SkiIcon from '../../icons/ski.png';
import MountainIcon from '../../icons/mountains.png';
import MusicIcon from '../../icons/music.png';
import TechIcon from '../../icons/tech.png';
import BookIcon from '../../icons/book.png';
import MathIcon from '../../icons/math.png';
import SpotifyIcon from '../../icons/spotify.png';
import PodcastIcon from '../../icons/podcasts.png';
import ProfilePic from '../../icons/profile.png';
import GermanyIcon from '../../icons/germany.png';
import USAIcon from '../../icons/usa.png';
import SpeakIcon from '../../icons/speak.png';

const BioCard = () => {
  return (
    <Box sx={{width: 450}}>
      <Typography component='div' align='center' variant='h1' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#6372A1' }}>
        Biography
      </Typography>
      <Typography component='div' align='justify' variant='h4'>
        Born and raised in California. Developing web and mobile applications from
        frontend to backend is my obsession. I'm committed to writing CLEAN code
        and sharp UIs with each new iteration. The rewarding feeling of when the code
        correctly compiles is like an addiction.
      </Typography>
    </Box>
  )
}

const EduCard = () => {
  return (
    <Box sx={{ width: 800 }}>
      <Typography component='div' align='center' variant='h1' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#54C7CF' }}>
        Education
      </Typography>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
        <Typography sx={{ width: '10%' }}><img src={SJSUIcon} className='icons'></img></Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">San Jose State University</Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">Bsc. Global Operations Management</Typography>
      </Stack>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
        <Typography sx={{ width: '10%' }}><img src={LeWagonIcon} className='icons'></img></Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">Le Wagon</Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">Full Stack Developement</Typography>
      </Stack>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
        <Typography sx={{ width: '10%' }}><img src={PekingIcon} className='icons'></img></Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">Peking University</Typography>
        <Typography sx={{ width: '33%' }} variant='h5' color="#A5A5A5">International Studies</Typography>
      </Stack>
    </Box>
  )
}

const InterestsCard = () => {
  return (
    <Box sx={{width: 450}}>
      <Typography component='div' align='center' variant='h1' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#5AA7BE' }}>
          Interests
      </Typography>

      <Box sx={{ width: 450, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{width:225}}>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={ClubsIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Golf</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={PlaneIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Aviation</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={SkiIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Skiing</Typography>
          </Stack>
        </Box>

        <Box sx={{width: 225}}>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={MountainIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Mountains</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={MusicIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Music</Typography>
          </Stack>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{ width: '30%' }} align='center'><img src={TechIcon} className='icons'></img></Typography>
            <Typography sx={{ width: '30%' }} align='left' variant='h5'>Tech</Typography>
          </Stack>
        </Box>
      </Box>

    </Box>
  )
}

const Languages = () => {
  return (
    <Box sx={{width: 450}}>
      <Typography component='div' align='center' variant='h1' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#54C7CF' }}>
        Languages
      </Typography>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
        <Typography sx={{ width: '20%' }} align='center'><img src={GermanyIcon} className='icons'></img></Typography>
        <Typography sx={{ width: '30%' }} align='left' variant='h5'>German</Typography>
        <Typography sx={{ width: '50%' }} align='left' variant='h5'>B2 - Intermediate</Typography>
      </Stack>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
        <Typography sx={{ width: '20%' }} align='center'><img src={USAIcon} className='icons'></img></Typography>
        <Typography sx={{ width: '30%' }} align='left' variant='h5'>English</Typography>
        <Typography sx={{ width: '50%' }} align='left' variant='h5'>C2 - Native</Typography>
      </Stack>
    </Box>
  )
}

const ReadingListeningCard = () => {
 return (
  <Box sx={{width: 900}}>
     <Typography component='div' align='center' variant='h1' sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, color: '#6372A0' }}>
        Reading & Listening
     </Typography>
     <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
       <Typography sx={{ width: '10%' }} align='center'><img src={BookIcon} className='icons'></img></Typography>
       <Typography sx={{ width: '90%' }} align='left' variant='h5'>Clean Code - Uncle Bob</Typography>
     </Stack>
     <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
       <Typography sx={{ width: '10%' }} align='center'><img src={MathIcon} className='icons'></img></Typography>
       <Typography sx={{ width: '90%' }} align='left' variant='h5'>Structure and Interpretation of Computer Programs - Gerald Jay Sussman</Typography>
     </Stack>
     <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
       <Typography sx={{ width: '10%' }} align='center'><img src={PodcastIcon} className='icons'></img></Typography>
       <Typography sx={{ width: '90%' }} align='left' variant='h5'>The Tim Ferris Show</Typography>
     </Stack>
     <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
       <Typography sx={{ width: '10%' }} align='center'><img src={SpotifyIcon} className='icons'></img></Typography>
       <Typography sx={{ width: '90%' }} align='left' variant='h5'>The Joe Rogan Experience</Typography>
     </Stack>
  </Box>
 )
}

export default function About() {
  return (
    <>
      <div className="bio-container">
        <BioCard />
        <img src={ProfilePic} className='profile-pic'></img>
      </div>
      <div className='education-container'>
        <SchoolIcon style={{width: 400, height: 400}} />
        <EduCard />
      </div>
      <div className='languages-container'>
        <Languages />
        <img src={SpeakIcon} className='speak-pic'></img>
      </div>
      <div className='interest-container'>
        <InterestsIcon style={{ width: 400, height: 400 }} />
        <InterestsCard />
      </div>
      <div className='reading-listening-container'>
        <ReadingListeningCard />
      </div>
    </>
  )
}

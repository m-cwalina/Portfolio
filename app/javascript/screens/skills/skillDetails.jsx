import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import { Card, CardContent, Typography, Stack, CardActions } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Icon from './icons';
import StrengthIcon from '../../icons/strength.png';
import TimeIcon from '../../icons/time.png';

export async function loader({ params }) {
  const URL = `/api/v1/skills/${params.skillId}`;
  try {
    let response = await fetch(URL);
    let skill = await response.json();
    return skill;
  } catch (error) {
    console.error(error);
  }
}

const DetailedCard = ({skill}) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 900, minWidth: 800, backgroundColor: '#121212', border: '3px solid #FFFFFF;', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
      <CardActions sx={{ display: 'flex', justifyContent: 'left' }}>
        <Link to={'/skills'}><KeyboardDoubleArrowLeftIcon className='arrow-icon' /></Link>
      </CardActions>
      <CardContent sx={{ margin: 5 }}>
        <Typography align='center'>
          <Icon icon={skill.icon} style={{width: 60}} />
        </Typography>
        <Typography variant="h3" component="div" sx={{ color: '#FFFFFF', fontFamily: "'Roboto', sans- serif" }} align='center'>
          {skill.title}
        </Typography>
          <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
            <Typography sx={{width: '20%'}}><img src={StrengthIcon} className='icons'></img></Typography>
            <Typography sx={{width: '80%'}}><ProgressBar variant='success' animated now={skill.strength} label={`${skill.strength}% strength`} /></Typography>
        </Stack>
        <Stack spacing={2} direction='row' justifyContent="center" alignItems="center" marginTop='20px'>
          <Typography sx={{ width: '20%' }}><img src={TimeIcon} className='icons'></img></Typography>
          <Typography sx={{ width: '80%' }}><ProgressBar variant='danger' min={0} max={5} animated now={skill.year} label={`${skill.year} years`} /></Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default function SkillDetails() {
  const skill = useLoaderData();

  return (
    <DetailedCard
      skill={skill}
     />
  )
}

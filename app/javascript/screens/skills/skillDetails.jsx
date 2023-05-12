import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import { Card, CardContent, Typography, Stack, CardActions, Box } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Icon from './icons';

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
    <Card
      variant="outlined"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        maxWidth: 900,
        minWidth: 800,
        display: 'flex',
        flexDirection: 'column'
      }}>
      <CardActions sx={{ display: 'flex', justifyContent: 'left' }}>
        <Link to={'/skills'}><KeyboardDoubleArrowLeftIcon className='arrow-icon' /></Link>
      </CardActions>
      <CardContent sx={{ margin: 5 }}>
        <Stack spacing={4} justifyContent="center" alignItems="center" marginTop='20px'>
          <Box style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', width: '50px', borderRadius: '15px' }}>
            <Icon icon={skill.icon} />
          </Box>
          <Typography variant="h3" component="div" sx={{ color: '#0c4a6e', fontFamily: "'Roboto', sans- serif", fontWeight: 'bold' }} align='center'>
            {skill.title}
          </Typography>
          <Typography sx={{ width: '80%' }}>
            <ProgressBar variant='danger' min={0} max={5} animated now={skill.year} label={`${skill.year} years`} />
          </Typography>
          <Typography sx={{width: '80%'}}>
            <ProgressBar variant='success' animated now={skill.strength} label={`${skill.strength}% strength`} />
          </Typography>
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

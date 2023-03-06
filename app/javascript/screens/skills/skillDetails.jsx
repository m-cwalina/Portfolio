import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Card, CardContent, Typography } from '@mui/material';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Icon from './icons'

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
    <Card variant="outlined" sx={{ maxWidth: 700, minWidth: 600, margin: '15px', backgroundColor: '#121212', border: '3px solid #FFFFFF;', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
      <CardContent sx={{ margin: 5 }}>
        <Typography align='center'>
          <Icon icon={skill.icon} style={{width: 60}} />
        </Typography>
        <Typography variant="h3" component="div" sx={{ color: '#FFFFFF', fontFamily: "'Roboto', sans- serif" }} align='center'>
          {skill.title}
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: '#FFFFFF', fontFamily: "'Roboto', sans- serif" }} align='center'>
          Strength
        </Typography>
        <ProgressBar variant='success' now={skill.strength} label={`${skill.strength}%`} />
      </CardContent>
    </Card>
  )
}

export default function SkillDetails() {
  const skill = useLoaderData();

  return (
    <DetailedCard skill={skill} />
  )
}

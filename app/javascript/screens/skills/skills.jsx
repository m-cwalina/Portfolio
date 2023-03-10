import React from 'react';
import { Card, CardActions, CardContent, Typography} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useLoaderData} from "react-router-dom";
import Icon from './icons';
import { Link, Outlet } from "react-router-dom";

export async function loader() {
  const URL = `/api/v1/skills`;
  try {
    let response = await fetch(URL);
    let skills = await response.json();
    return skills;
  } catch (error) {
    console.error(error);
  }
}

const SkillCard = ({ skill }) => (
  <React.Fragment>
    <Card variant="outlined" sx={{ maxWidth: 330, minWidth: 300, margin: '15px', backgroundColor: '#121212', border: '1px solid #A5A5A5;', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
      <CardContent sx={{margin: 5}}>
        <Typography align='center'>
          <Icon icon={skill.icon}/>
        </Typography>
        <Typography variant="h6" component="div" sx={{color: '#FFFFFF', fontFamily: "'Roboto', sans- serif" }} align='center'>
          {skill.title}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'right'}}>
        <KeyboardDoubleArrowRightIcon className='arrow-icon' />
      </CardActions>
    </Card>
  </React.Fragment>
)

export default function Skills() {
  const skills = useLoaderData();

  const skillList = skills.map((skill) => (
    <Link to={`${skill.id}`}>
      <SkillCard key={skill.id} skill={skill}  />
    </Link>
  ));

  return (
    <>
      <div className="card-container">
        {skillList}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

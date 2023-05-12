import React, {useState} from 'react';
import { Card, CardActions, CardContent, Typography, Box, Stack} from '@mui/material';
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

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant="outlined"
      sx={{
        maxWidth: 330,
        minWidth: 300,
        margin: '15px',
        backgroundColor: 'transparent',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-out',
      }}>
      <CardContent sx={{margin: 5}}>
        <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
          <Box style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', width: '50px', borderRadius: '15px'}}>
            <Icon icon={skill.icon} />
          </Box>
          <Typography
            align='center'
            variant="h6"
            component="div"
            sx={{
              color: '#FFFFFF',
              fontFamily: "'Roboto', sans- serif"
            }}
          >
            {skill.title}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'right'}}>
        <KeyboardDoubleArrowRightIcon className='arrow-icon' />
      </CardActions>
    </Card>
  )
}

export default function Skills() {
  const skills = useLoaderData();

  const skillList = skills.map((skill) => (
    <Link to={`${skill.id}`}>
      <SkillCard key={skill.id} skill={skill}  />
    </Link>
  ));

  return (
    <React.Fragment>
      <div className="card-container">
        {skillList}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </React.Fragment>
  )
}

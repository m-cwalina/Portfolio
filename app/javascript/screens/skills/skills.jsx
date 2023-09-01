import React, {useState, useEffect} from 'react';
import { Card, CardActions, CardContent, Typography, Box, Stack} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useLoaderData} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
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

const SkillCard = ({ skill, isLoading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isLoading) {
    return (
      <Stack spacing={2} justifyContent='center' alignItems='center'>
        <Skeleton variant="rectangular" width={300} height={250} />
      </Stack>
    )
  }

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant="outlined"
      sx={{
        maxWidth: '330px',
        minWidth: '300px',
        margin: '15px',
        backgroundColor: '#1e293b',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-out',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        margin: 'auto'
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
              color: '#cbd5e1',
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
  const [isLoading, setIsLoading] = useState(true);

  const skillList = skills.map((skill) => (
    <Link to={`${skill.id}`}>
      <SkillCard key={skill.id} skill={skill} isLoading={isLoading} />
    </Link>
  ));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer);
  }, [skills])

  return (
    <React.Fragment>
      <div className="skills-card-container">
        {skillList}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </React.Fragment>
  )
}

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useLoaderData, Link, Outlet } from "react-router-dom";
import ProjectImage from './ProjectImage';
import { Stack, Box } from '@mui/material';

export async function loader() {
  const URL = `/api/v1/projects`;
  try {
    let response = await fetch(URL);
    let projects = await response.json();
    return projects;
  } catch (error) {
    console.error(error);
  }
}

const Content = ({project, isLoading}) => {
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
        <Skeleton variant="text" width="100%" />
      </Stack>
    )
  }


  return (
    <Link to={`${project.id}`}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="outlined"
        sx={{
          maxWidth: 330,
          minWidth: 300,
          margin: '15px',
          backgroundColor: '#1e293b',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-out',
        }}>
        <CardContent sx={{padding: 0}}>
          <CardMedia
            sx={{ height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            src=''
          >
            <ProjectImage project={project} />
          </CardMedia>
          <Typography variant='h3' fontWeight='bold' align='center' color="#e2e8f0" padding='16px'>
            {project.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Projects() {
  const projects = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (projects.length > 0) {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [projects]);

  const projectCards = projects.map((project) => (
    <Content project={project} key={project.id} isLoading={isLoading} />
  ));

  return (
    <React.Fragment>
      <div className='cards-container'>
        {projectCards}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </React.Fragment>
  )
}

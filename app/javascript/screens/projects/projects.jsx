import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useLoaderData, Link, Outlet } from "react-router-dom";
import Image from './images'

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
      <Skeleton variant="rectangular" width={330} height={300} margin={15} />
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
          backgroundColor: 'transparent',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-out',
        }}>
        <CardContent sx={{padding: 0}}>
          <CardMedia
            sx={{ height: 240}}
            src=''
          >
            <Image image={project.image} />
          </CardMedia>
          <Typography variant='h3' fontWeight='bold' align='center' color="#FFFFFF" padding='16px'>
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
    if (projects.length > 0) {
      setIsLoading(false);
    }
  }, [projects]);

  const projectCards = projects.map((project) => (
    <Content project={project} key={project.id} isLoading={isLoading} />
  ));

  return (
    <>
      <div className='cards-container'>
        {projectCards}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

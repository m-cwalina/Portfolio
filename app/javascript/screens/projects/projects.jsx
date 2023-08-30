import React, { useState, useEffect } from 'react';
import { useLoaderData, Outlet } from "react-router-dom";
import ProjectCard from './projectsCard';
import { Box } from '@mui/material';

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
    <ProjectCard project={project} key={project.id} isLoading={isLoading} />
  ));

  return (
    <Box sx={{padding: '15px'}}>
      <div className='cards-container'>
        {projectCards}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </Box>
  )
}

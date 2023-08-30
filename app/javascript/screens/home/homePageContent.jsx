import React from 'react';
import Chart from './chart';
import TypeWriterEffect from './typeWriterEffect';
import ProjectsShow from './projectsShow';
import { useLoaderData } from "react-router-dom";
import { Box } from '@mui/material';

export async function loader() {
  const URL = `/api/v1/projects`;
  try {
    let response = await fetch(URL);
    let projects = await response.json();
    return projects.slice(0, 3);
  } catch (error) {
    console.error(error);
  }
}

export default function HomePageContent() {
  const projects = useLoaderData();

  return (
    <React.Fragment>
      <TypeWriterEffect />
      <Box sx={{padding: '20px'}}>
        <Chart />
      </Box>
      <ProjectsShow projects={projects} />
    </React.Fragment>
  )
}

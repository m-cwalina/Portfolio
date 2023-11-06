import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Box } from '@mui/material';
import TitleSection from '../fortefans/TitleSection';
import ReactSection from './ReactSection';
import ExtraSection from './ExtraSection';
import RubySection from './RubySection';

export async function loader({ params }) {
  const URL = `/api/v1/projects/${params.projectId}`;
  try {
    let response = await fetch(URL);
    let project = await response.json();
    return project;
  } catch (error) {
    console.log(error);
  }
}

export default function ConnectGolf() {
  const project = useLoaderData();

  return (
    <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <TitleSection project={project} />
      <ReactSection />
      <RubySection />
      <ExtraSection project={project} />
    </Box>
  )
}

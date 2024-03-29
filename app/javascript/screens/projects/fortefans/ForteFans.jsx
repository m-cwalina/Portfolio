import React from 'react'
import { useLoaderData } from "react-router-dom";
import { Typography, Box } from '@mui/material';
import TitleSection from './TitleSection';
import ReactNativeSection from './ReactNativeSection';
import ReduxSection from './ReduxSection';
import RubySection from './RubySection';
import ExtraSection from './ExtraSection'

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

export default function ForteFans () {
  const project = useLoaderData();

  return (
    <Box sx={{paddingLeft: '15px', paddingRight: '15px'}}>
      <TitleSection project={project} />
      <ReactNativeSection />
      <ReduxSection />
      <RubySection />
      <ExtraSection project={project} />
    </Box>
  )
}

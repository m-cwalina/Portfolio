import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Card, CardContent, Typography, Box, Stack, CardMedia} from '@mui/material';
import CodeImage from './codeImage'
import Icon from '../skills/icons';

export async function loader({ params }) {
  const URL = `/api/v1/projects/${params.projectId}`;
  try {
    let response = await fetch(URL);
    let project = await response.json();
    return project;
  } catch (error) {
    console.error(error);
  }
}

const ProjectDetailCard = ({project}) => (
  <Card
    variant="outlined"
    sx={{ minWidth: 1100,
      backgroundColor: '#121212',
      border: '3px solid #FFFFFF;',
      boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}
    >
    <CardContent>
      <Typography variant='h1' align='center' sx={{ fontWeight: 'bold'}} color='#54C7CF'>
        {project.title}
      </Typography>
      <Typography variant='body1' align='center' sx={{ fontWeight: 'bold', padding: '30px'}} color="#A5A5A5">
        {project.description}
      </Typography>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Languages
      </Typography>
      <Box align='center' sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', margin: 'auto', width: '100%'}}>
        <ProjectDetailIcons languages={project.languages} />
      </Box>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Code Snippet
      </Typography>
      <CardMedia
        sx={{ height: 240 }}
        src=''
      >
        <CodeImage image={project.code_snippet} />
      </CardMedia>
    </CardContent>
  </Card>
)

const ProjectDetailIcons = ({languages}) => (
  languages.map((language) =>(
    <Stack direction='column' spacing={0.5} align='center'>
      <Typography ><Icon icon={language.icon} /></Typography>
      <Typography color='#FFFFFF'>{language.title}</Typography>
    </Stack>
  ))
)

export default function projectDetails() {
  const project = useLoaderData();

  return (
    <ProjectDetailCard project={project} />
  )
}

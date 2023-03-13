import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import { Card, CardContent, CardActions, Typography, Box, Stack, CardMedia} from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CodeImage from './codeImage';
import Icon from '../skills/icons';
import ProjectIcon from '../../icons/project.png';
import GitHubLinkIcon from '../../icons/gitlink.png';

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
          overflow: 'auto',
          backgroundColor: '#121212',
          border: '3px solid #FFFFFF;',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}
    >
    <CardActions sx={{ display: 'flex', justifyContent: 'left' }}>
      <Link to={'/projects'}><KeyboardDoubleArrowLeftIcon className='arrow-icon' /></Link>
    </CardActions>
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
      <Box align='center'
           sx={{display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                padding: '30px',
                gridGap: '10px',
                margin: 'auto',
                width: '100%'}}
      >
        <ProjectDetailIcons languages={project.languages} />
      </Box>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Code Snippet
      </Typography>
      <CardMedia
        sx={{
          height: 240,
          backgroundColor: '#212020',
          margin: '30px'
           }}
        src=''
      >
        <CodeImage image={project.code_snippet} />
      </CardMedia>
      <Typography variant='body1' align='justify' sx={{ fontWeight: 'bold', padding: '30px' }} color="#A5A5A5">
        {project.code_snippet_text}
      </Typography>
      <ProjectDetailExtras project={project}/>
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

const ProjectDetailExtras = ({project}) => (
  <Box align='center'
    sx={{
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '30px',
      gridGap: '10px',
      margin: 'auto',
      width: '100%'
    }}
  >
    <Stack spacing={2}>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Project Link
      </Typography>
      <Typography><a href={project.link}><img src={ProjectIcon} className='icons'></img></a></Typography>
    </Stack>
    <Stack spacing={2}>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Credentials
      </Typography>
      <Typography variant='body1' sx={{ fontWeight: 'bold' }} color="#A5A5A5">
        Username: {project.username}
      </Typography>
      <Typography variant='body1' sx={{ fontWeight: 'bold' }} color="#A5A5A5">
        Password: {project.password}
      </Typography>
    </Stack>
    <Stack spacing={2}>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }} color="#FFFFFF">
        Github Repo
      </Typography>
      <Typography>
        <a href={project.git}><img src={GitHubLinkIcon} className='icons'></img></a>
      </Typography>
    </Stack>
  </Box>
)

export default function projectDetails() {
  const project = useLoaderData();

  return (
    <ProjectDetailCard project={project} />
  )
}

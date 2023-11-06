import React from 'react';
import { useLoaderData } from "react-router-dom";
import { CardContent, Typography, Box, Stack, CardMedia } from '@mui/material';
import CodeImage from '../codeImage';
import Icon from '../../skills/Icons';
import ProjectIcon from '../../../icons/project.png';
import GitHubLinkIcon from '../../../icons/gitlink.png';
import ProjectDetailChart from '../projectDetailChart';

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

const ProjectDetailCard = ({ project }) => (
  <Box sx={{ minWidth: 1100, overflow: 'auto', }}>
    <CardContent>
      <Typography
        variant='h1'
        align='center'
        color='#EDF0F5'
        sx={{ fontWeight: 'bold' }}>
        {project.title}
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='#EDF0F5'
        sx={{ fontWeight: 'bold', padding: '30px' }}>
        {project.description}
      </Typography>
      <Box><ProjectDetailChart project={project} /></Box>
      <Box
        align='center'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          padding: '30px',
          gridGap: '10px',
          margin: 'auto',
          width: '100%'
        }}>
        <ProjectDetailIcons languages={project.languages} />
      </Box>
      <Typography
        variant='h4'
        align='center'
        sx={{ fontWeight: 'bold' }}>
        Code
      </Typography>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#212020',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          margin: '30px'
        }}>
        <Box sx={{ flex: '0 0 35%', padding: 3 }}>
          <Typography variant='body1' align='justify' color='#FFFFFF'>
            {project.code_snippet_text}
          </Typography>
        </Box>
        <Box sx={{ flex: '0 0 65%' }}>
          <CardMedia
            sx={{ height: '100%', width: '100%' }}
            src=''>
            <CodeImage image={project.code_snippet} />
          </CardMedia>
        </Box>
      </Box>
      <ProjectDetailExtras project={project} />
    </CardContent>
  </Box>
)

const ProjectDetailIcons = ({ languages }) => (
  languages.map((language) => (
    <Stack direction='column' spacing={0.5} justifyContent="center" alignItems="center">
      <Box style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', width: '50px', borderRadius: '15px' }}>
        <Typography ><Icon icon={language.icon} /></Typography>
      </Box>
      <Typography fontWeight='bold'>{language.title}</Typography>
    </Stack>
  ))
)

const ProjectDetailExtras = ({ project }) => (
  <Box
    align="center"
    sx={{
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '30px',
      gridGap: '10px',
      margin: 'auto',
      width: '100%',
    }}
  >
    <Stack spacing={2}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        Project Link
      </Typography>
      {project.link ? (
        <Typography>
          <a href={project.link}>
            <img src={ProjectIcon} className="icons" alt="Project Link Icon" />
          </a>
        </Typography>
      ) : (
        <Typography>
          No Project Link
        </Typography>
      )}
    </Stack>
    <Stack spacing={2}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        Credentials
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        Username: {project.username}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        Password: {project.password}
      </Typography>
    </Stack>
    <Stack spacing={2}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        Github Repo
      </Typography>
      {project.git ? (
        <Typography>
          <a href={project.git}>
            <img src={GitHubLinkIcon} className="icons" alt="GitHub Repo Icon" />
          </a>
        </Typography>
      ) : (
        <Typography>
          None public GitHub
        </Typography>
      )}
    </Stack>
  </Box>
);

export default function ConnectGolf() {
  const project = useLoaderData();

  return (
    <ProjectDetailCard project={project} />
  )
}

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
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
        }}>
    <CardActions sx={{ display: 'flex', justifyContent: 'left' }}>
      <Link to={'/projects'}><KeyboardDoubleArrowLeftIcon className='arrow-icon' /></Link>
    </CardActions>
    <CardContent>
      <Typography variant='h1' align='center' sx={{ fontWeight: 'bold'}}>
        {project.title}
      </Typography>
      <Typography variant='body1' align='center' sx={{ fontWeight: 'bold', padding: '30px'}}>
        {project.description}
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
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }}>
        Code
      </Typography>
      <CardMedia
        sx={{
          backgroundColor: '#212020',
          margin: '30px'
           }}
        src=''
      >
        <CodeImage image={project.code_snippet} />
      </CardMedia>
      <Box
        sx={{
          backgroundColor: '#071008',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          padding: 3
        }}
      >
        <Typography variant='body1' align='justify' sx={{ fontWeight: 'bold', padding: '30px' }} color='#FFFFFF'>
        {project.code_snippet_text}
      </Typography>
      </Box>
      <ProjectDetailExtras project={project}/>
    </CardContent>
  </Card>
)

const ProjectDetailIcons = ({languages}) => (
  languages.map((language) =>(
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

export default function projectDetails() {
  const project = useLoaderData();

  return (
    <ProjectDetailCard project={project} />
  )
}

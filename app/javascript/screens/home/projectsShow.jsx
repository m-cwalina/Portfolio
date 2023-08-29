import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ProjectImage from '../projects/ProjectImage';
import { Link } from "react-router-dom";

export default function ProjectsShow({projects}) {

  const ProjectCard = ({ project }) => {
    return (
      <Card
        variant="outlined"
        sx={{
          maxWidth: 330,
          minWidth: 300,
          margin: '15px',
          backgroundColor: '#334155',
          borderWidth: '1px',
          borderColor: '#e2e8f0',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        }}>
        <CardContent sx={{ padding: 0 }}>
          <CardMedia
            sx={{ height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            src=''>
            <ProjectImage project={project} />
          </CardMedia>
          <Typography variant='h3' fontWeight='bold' align='center' color="#cbd5e1" padding='16px'>
            {project.title}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  const projectCards = projects.map((project) => (
    <ProjectCard project={project} key={project.id}/>
  ));

  return (
    <Box
      width='100%'
      marginTop='150px'
      padding='50px'
      sx={{ backgroundColor: '#1e293b' }}>
      <Typography
        component='div'
        align='center'
        variant='h2'
        margin='45px'
        sx={{ fontFamily: "'Roboto', sans-serif",
              fontWeight: 800, color: '#cbd5e1' }}>
        Projects
      </Typography>

      <Box display='flex'>
        {projectCards}
      </Box>


      <Typography
        component='div'
        align='justify'
        variant='h6'
        marginTop='75px'
        sx={{ fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
              width: '65%',
              color: '#e2e8f0'}}>
        I love to develop across the stack. My strongest skills being developing RESTful APIs in Ruby/Rails, building out a UI/UX in React and harnessing Redux for state managment. I develop scalable API endpoints using ActiveRecord for best possible O(n) queries, models to handle business logic, Service Objects for external API calls and validations to secure incoming data. To build beautiful UIs I use React to develop resuable components and Redux/Toolkit to move state logic out of my components, Thunks for Async API requests, and to update my state tree for less API calls.
      </Typography>

      <Link to='/projects'>
        <Box
          marginTop='75px'
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <Typography
            sx={{ color: '#cbd5e1', fontWeight: 'bold' }}
            variant='h4'>
            Learn More
          </Typography>
          <ArrowForwardIosOutlinedIcon fontSize='large' sx={{color: '#cbd5e1'}} />
        </Box>
      </Link>

    </Box>
  )
}

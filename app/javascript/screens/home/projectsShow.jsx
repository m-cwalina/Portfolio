import React from 'react';
import { Typography, Box } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from "react-router-dom";
import ProjectsShowCard from './projectsShowCard';

export default function ProjectsShow({projects}) {

  const projectCards = projects.map((project) => (
    <ProjectsShowCard project={project} key={project.id}/>
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

      <div className='cards-container'>
        {projectCards}
      </div>

        <Typography
          component='div'
          align='justify'
          variant='h6'
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 350,
            width: '650px',
            color: '#e2e8f0',
            marginTop: '75px'
          }}
        >
          <span style={{ fontSize: '1.9em', color: '#ff8c00', fontWeight: 'bold' }}>
            I love to develop across the stack.
          </span>
          I build RESTful APIs using OOP, construct an UI/UX in React.js and harness Redux for state management. I develop scalable API endpoints using the best possible O(n) queries, models to handle business logic, Service Objects for external API calls and validations to secure incoming data. To develop beautiful UIs I use React.js to develop reusable components and Redux/Toolkit to move state logic out of my components, Thunks for Async API requests, and to update my state tree for an efficient frontend.
        </Typography>

      <Link to='/projects'>
        <Box
          marginTop='75px'
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <Typography
            sx={{ color: '#ff8c00', fontWeight: 'bold' }}
            variant='h4'>
            Learn More
          </Typography>
          <ArrowForwardIosOutlinedIcon fontSize='large' sx={{ color: '#ff8c00' }} />
        </Box>
      </Link>

    </Box>
  )
}

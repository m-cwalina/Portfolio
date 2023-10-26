import React, { useState } from 'react';
import ProjectsChart from './projectsChart';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ProjectImage from '../projects/ProjectImage';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

export default function ProjectsCard({ project, isLoading }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => { setIsHovered(true);};
  const handleMouseLeave = () => { setIsHovered(false); };
  console.log(project.title)

  if (isLoading) {
    return (
      <Stack spacing={2} justifyContent='center' alignItems='center'>
        <Skeleton variant="rectangular" width={300} height={250} />
        <Skeleton variant="text" width="100%" />
      </Stack>
    )
  }

  return (
    <Link to={`${project.title}/${project.id}`}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="outlined"
        sx={{
          maxWidth: '430px',
          minWidth: '430px',
          backgroundColor: '#1e293b',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-out',
          margin: 'auto',}}>
        <CardContent sx={{ padding: '5px' }}>

          <Box
            display='flex'
            alignItems='center'
            justifyContent='left'>
            <Box marginRight='8px' sx={{ height: '120px', width: '120px' }}>
              <ProjectImage project={project} />
            </Box>
            <Box
              display='flex'
              justifyContent='left'
              alignItems='left'
              flexDirection='column'>
              <Typography
                variant='h3'
                fontWeight='bold'
                align='left'
                color="#cbd5e1">
                {project.title}
              </Typography>
              <Typography
                variant='h6'
                align='left'
                color="#94a3b8">
                {project.short_description}
              </Typography>
            </Box>
          </Box>

          <Box display='flex' justifyContent='space-between'>
            <Box display='flex' flexDirection='column' width='120px' justifyContent='center'>
              <Box
                display='flex'
                justifyContent='left'
                alignItems='center'
                width='120px'
                marginTop='5px'>
                <StarOutlineIcon fontSize='12px' sx={{ color: '#64748b', marginRight: '3px' }} />
                <Typography
                  variant='body'
                  align='center'
                  fontSize='20px'
                  color="#64748b">
                  {project.rank}
                </Typography>
              </Box>

              <Box
                display='flex'
                justifyContent='left'
                alignItems='center'
                width='120px'
                marginTop='5px'>
                <TimelapseIcon fontSize='10px' sx={{ color: '#64748b', marginRight: '3px' }} />
                <Typography
                  variant='body'
                  align='center'
                  fontSize='20px'
                  color="#64748b">
                  {project.duration}
                </Typography>
              </Box>

              <Box
                display='flex'
                justifyContent='left'
                alignItems='center'
                width='120px'
                marginTop='5px'>
                <AlignVerticalBottomIcon fontSize='10px' sx={{ color: '#64748b', marginRight: '3px' }} />
                <Typography
                  variant='body'
                  align='center'
                  fontSize='20px'
                  color="#64748b">
                  {project.difficulty}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: '300px' }}>
              <ProjectsChart project={project} />
            </Box>
          </Box>

        </CardContent>

      </Card>
    </Link>
  )
}

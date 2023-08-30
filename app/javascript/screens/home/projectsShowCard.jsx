import React from 'react';
import ProjectsShowChart from './projectsShowChart';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ProjectImage from '../projects/ProjectImage';
import { Typography, Box, Card, CardContent } from '@mui/material';

export default function ProjectsShowCard({project}) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 330,
        margin: '15px',
        backgroundColor: '#1e293b',
        borderWidth: '1px',
        borderColor: '#e2e8f0',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
      }}>

      <CardContent sx={{ padding: '5px' }}>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='left'>
          <Box marginRight='8px' sx={{ height: '90px', width: '90px' }}>
            <ProjectImage project={project} />
          </Box>
          <Box
            display='flex'
            justifyContent='left'
            alignItems='left'
            flexDirection='column'>
            <Typography
              variant='h4'
              fontWeight='bold'
              align='left'
              color="#cbd5e1">
              {project.title}
            </Typography>
            <Typography
              variant='body'
              align='left'
              color="#94a3b8">
              {project.short_description}
            </Typography>
          </Box>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' flexDirection='column' width='90px' justifyContent='center'>
            <Box
              display='flex'
              justifyContent='left'
              alignItems='center'
              width='90px'
              marginTop='5px'>
              <StarOutlineIcon fontSize='12px' sx={{ color: '#64748b', marginRight: '3px' }} />
              <Typography
                variant='body'
                align='center'
                color="#64748b">
                {project.rank}
              </Typography>
            </Box>

            <Box
              display='flex'
              justifyContent='left'
              alignItems='center'
              width='90px'
              marginTop='5px'>
              <TimelapseIcon fontSize='10px' sx={{ color: '#64748b', marginRight: '3px' }} />
              <Typography
                variant='body'
                align='center'
                color="#64748b">
                {project.duration}
              </Typography>
            </Box>

            <Box
              display='flex'
              justifyContent='left'
              alignItems='center'
              width='90px'
              marginTop='5px'>
              <AlignVerticalBottomIcon fontSize='10px' sx={{ color: '#64748b', marginRight: '3px' }} />
              <Typography
                variant='body'
                align='center'
                color="#64748b">
                {project.difficulty}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: '220px' }}>
            <ProjectsShowChart project={project} />
          </Box>
        </Box>

      </CardContent>
    </Card>
  )
}

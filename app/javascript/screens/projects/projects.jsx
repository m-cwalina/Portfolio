import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLoaderData, Link, Outlet } from "react-router-dom";
import Image from './images'

export async function loader() {
  const URL = `/api/v1/projects`;
  try {
    let response = await fetch(URL);
    let projects = await response.json();
    return projects;
  } catch (error) {
    console.error(error);
  }
}

const Content = ({project}) => (
  <React.Fragment>
    <Card sx={{ maxWidth: 400, backgroundColor: '#212020', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
       <CardContent sx={{padding: 0}}>
          <CardMedia
            sx={{ height: 240}}
            src=''
          >
            <Image image={project.image}/>
          </CardMedia>
          <Typography gutterBottom variant='h3' align='center' color="#FFFFFF" padding='16px'>
            {project.title}
          </Typography>
       </CardContent>
      <CardActions>
        <Link to={`${project.id}`}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  </React.Fragment>
)

export default function Projects() {
  const projects = useLoaderData();

  const projectCards = projects.map((project) => (
    <Content project={project} key={project.id} />
  ));

  return (
    <>
      <div className='cards-container'>
        {projectCards}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

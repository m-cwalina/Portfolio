import React from 'react';
import { Card, CardActions, CardContent, Typography, Button, Box } from '@mui/material';
import {useLoaderData} from "react-router-dom";

export async function loader() {
  const URL = `/api/v1/skills`;
  try {
    let response = await fetch(URL);
    let skills = await response.json();
    console.log(skills)
    return skills;
  } catch (error) {
    console.error(error);
  }
}

let SkillCard = ({ skill }) => (
  <React.Fragment>
    <Card variant="outlined" sx={{ maxWidth: 400, minWidth: 300, margin: '15px'  }}>
      <CardContent>
        <Typography variant="h2" component="div">
          {skill.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
  </Card>
  </React.Fragment>
);

export default function Skills() {
  const skills = useLoaderData();

  let skillList = skills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ));

  return (
    <Box sx={{ minWidth: 275, display: 'flex', margin: "10px" }}>
      {skillList}
    </Box>
  )
}

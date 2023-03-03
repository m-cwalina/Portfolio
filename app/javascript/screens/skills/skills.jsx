import React from 'react';
import { Card, CardActions, CardContent, Typography, Button, Box, IconButton, Tooltip } from '@mui/material';
import {useLoaderData} from "react-router-dom";
import JavascriptIcon from '@mui/icons-material/Javascript';

export async function loader() {
  const URL = `/api/v1/skills`;
  try {
    let response = await fetch(URL);
    let skills = await response.json();
    return skills;
  } catch (error) {
    console.error(error);
  }
}

export default function Skills() {
  const skills = useLoaderData();

  function Title() {
    return (
      <div>
        List of Items
        <Tooltip title={<h3>.....</h3>}>
          <IconButton aria-label="help" color="primary">
            <JavascriptIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h2" component="div">
          <JavascriptIcon />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{maxWidth: 400}}>{card}</Card>
    </Box>
  )
}

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Banner() {
  return (
    <div className="title-container">
      <h1 className="title">Matthew Cwalina</h1>
      <h2 className="title-description">Full Stack Developer</h2>
      <div className='social-icons-container'>
        <a href='https://github.com/m-cwalina'><GitHubIcon className='social-icon' /></a>
        <a href='https://www.linkedin.com/in/matthew-cwalina/'><LinkedInIcon className='social-icon' /></a>
      </div>
    </div>
  )
}

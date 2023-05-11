import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typewriter from 'typewriter-effect';



export default function Banner() {
  return (
    <div className="title-container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<h1 style="font-size: 100px; color: #fafaf9">Matthew Cwalina</h1>')
            .pauseFor(500)
            .typeString('<h2 style="font-size: 80px; color: #002851; justify-content: center; display: flex">Full Stack Developer</h2>')
            .start();
        }}
      />
      <div className='social-icons-container'>
        <a href='https://github.com/m-cwalina'><GitHubIcon className='social-icon' /></a>
        <a href='https://www.linkedin.com/in/matthew-cwalina/'><LinkedInIcon className='social-icon' /></a>
      </div>
    </div>
  )
}

import React from "react";
import Logo from './logo.png'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { Link, Outlet } from "react-router-dom";
import { Stack, Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <div className='navbar'>
        <Stack spacing={9} direction='row' p={2}>
          <Link to={'/'}>
            <div className='icon-link'>
              <RoofingOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>Home</p>
            </div>
          </Link>

          <Link to={'/projects'}>
            <div className='icon-link'>
              <AccountTreeOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>Projects</p>
            </div>
          </Link>

          <Link to={'/skills'}>
            <div className='icon-link'>
              <CodeIcon className='navbar-icon' />
              <p className='navbar-text'>Skills</p>
            </div>
          </Link>

          <Link to={'/about'}>
            <div className='icon-link'>
              <AccountCircleOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>About</p>
            </div>
          </Link>

          <Link to={'/contact'}>
            <div className='icon-link'>
              <ConnectWithoutContactIcon className='navbar-icon' />
              <p className='navbar-text'>Contact</p>
            </div>
          </Link>
        </Stack>
      </div>
      <div className="container"><Outlet/></div>
    </Box>
  )
}

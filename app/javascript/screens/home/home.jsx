import React from "react";
import Logo from './logo.png'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { useLocation, Outlet, NavLink } from "react-router-dom";
import { Stack, Box } from '@mui/material';

export default function Home() {
  const location = useLocation();
  const isActive = location.pathname === '/';

  return (
    <div id='content-wrapper'>
      <div className='navbar'>
        <Stack spacing={9} direction='row' p={2}>
          <NavLink to="/">
            <div className='icon-link'>
              <RoofingOutlinedIcon className='navbar-icon'/>
              <p className='navbar-text'>Home</p>
            </div>
          </NavLink>

          <NavLink to={'/projects'} activeClassName='active-link'>
            <div className='icon-link'>
              <AccountTreeOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>Projects</p>
            </div>
          </NavLink>

          <NavLink to={'/skills'} activeClassName='active-link'>
            <div className='icon-link'>
              <CodeIcon className='navbar-icon' />
              <p className='navbar-text'>Skills</p>
            </div>
          </NavLink>

          <NavLink to={'/about'} activeClassName='active-link'>
            <div className='icon-link'>
              <AccountCircleOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>About</p>
            </div>
          </NavLink>

          <NavLink to={'/contact'} activeClassName='active-link'>
            <div className='icon-link'>
              <ConnectWithoutContactIcon className='navbar-icon' />
              <p className='navbar-text'>Contact</p>
            </div>
          </NavLink>
        </Stack>
      </div>
      <div className="container"><Outlet/></div>
    </div>
  )
}

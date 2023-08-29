import React from "react";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { useLocation, Outlet, NavLink } from "react-router-dom";
import { Stack } from '@mui/material';

export default function Home() {
  const location = useLocation();
  const isActive = location.pathname === '/';

  return (
    <div id='content-wrapper'>
      <div className='navbar'>
        <Stack spacing={9} direction='row' p={2}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <div className={`icon-link ${isActive ? 'active-link' : ''}`}>
                <RoofingOutlinedIcon className='navbar-icon' />
                <p className='navbar-text'>Home</p>
              </div>
            )}
          </NavLink>

          <NavLink to='/projects'>
            {({ isActive }) => (
              <div className={`icon-link ${isActive ? 'active-link' : ''}`}>
                <AccountTreeOutlinedIcon className='navbar-icon' />
                <p className='navbar-text'>Projects</p>
              </div>
            )}
          </NavLink>

          <NavLink to='/skills'>
            {({ isActive }) => (
              <div className={`icon-link ${isActive ? 'active-link' : ''}`}>
                <CodeIcon className='navbar-icon' />
                <p className='navbar-text'>Skills</p>
              </div>
            )}
          </NavLink>

          <NavLink to='/about'>
            {({ isActive }) => (
              <div className={`icon-link ${isActive ? 'active-link' : ''}`}>
                <AccountCircleOutlinedIcon className='navbar-icon' />
                <p className='navbar-text'>About</p>
              </div>
            )}
          </NavLink>

          <NavLink to='/contact'>
            {({ isActive }) => (
              <div className={`icon-link ${isActive ? 'active-link' : ''}`}>
                <ConnectWithoutContactIcon className='navbar-icon' />
                <p className='navbar-text'>Contact</p>
              </div>
            )}
          </NavLink>
        </Stack>
      </div>
      <div><Outlet/></div>
    </div>
  )
}

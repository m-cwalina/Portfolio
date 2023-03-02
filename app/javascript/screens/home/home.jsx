import React, { useState } from "react";
import Logo from './logo.png'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <div className='app'>
      <div className='navbar'>

        <div className="logo-container">
          <Link to={'/'}>
            <img className="logo" src={Logo}></img>
          </Link>
        </div>

        <div className='links'>
          <Link to={'/about'}>
            <div className='icon-link'>
              <AccountCircleOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>About</p>
            </div>
          </Link>

          <Link to={'/projects'}>
            <div className='icon-link'>
              <AccountTreeOutlinedIcon className='navbar-icon' />
              <p className='navbar-text'>Projects</p>
            </div>
          </Link>

          <Link to={'/contact'}>
            <div className='icon-link'>
              <ConnectWithoutContactIcon className='navbar-icon' />
              <p className='navbar-text'>Contact</p>
            </div>
          </Link>

          <Link to={'/skills'}>
            <div className='icon-link'>
              <CodeIcon className='navbar-icon' />
              <p className='navbar-text'>Skills</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="container"><Outlet/></div>

    </div>
  )
}

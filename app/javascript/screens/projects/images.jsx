import React from 'react';
import PortfolioPic from '../../images/portfolio.jpg';
import ConnectGolfPic from '../../images/connectgolf.jpg';
import PfandMePic from '../../images/pfandme.jpg';

export default function Image(project) {

  const Image = ({ image }) => {
    switch (image) {
      case 'ConnectGolf': return <img src={ConnectGolfPic} className='images'></img>
      case 'PfandMe': return <img src={PfandMePic} className='images'></img>
      case 'Portfolio': return <img src={PortfolioPic} className='images'></img>
      default: return null
    }
  }

  return (
    <Image image={project.image} />
  )
}

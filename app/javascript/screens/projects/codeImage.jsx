import React from 'react';
import ConnectGolfCode from '../../images/connectgolfcode.png';
import PfandMeCode from '../../images/pfandmecode.png';
import PortfolioCode from '../../images/portfoliocode.png';

export default function CodeImage(project) {

  const CodeImage = ({ image }) => {
    switch (image) {
      case 'ConnectGolf': return <img src={ConnectGolfCode} className='images'></img>
      case 'PfandMe': return <img src={PfandMeCode} className='images'></img>
      case 'Portfolio': return <img src={PortfolioCode} className='images'></img>
      default: return null
    }
  }

  return (
    <CodeImage image={project.image} />
  )
}

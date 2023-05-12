import React from 'react';
import ConnectGolfCode from '../../images/connectgolfcode.png';
import PfandMeCode from '../../images/pfandmecode.png';
import PortfolioCode from '../../images/portfoliocode.png';
import ChartsCode from '../../images/chartscode.png';
import ForteFansCode from '../../images/fortefanscode.png'

export default function CodeImage(project) {

  const CodeImage = ({ image }) => {
    switch (image) {
      case 'ConnectGolf': return <img src={ConnectGolfCode} className='code-images'></img>
      case 'PfandMe': return <img src={PfandMeCode} className='code-images'></img>
      case 'Portfolio': return <img src={PortfolioCode} className='code-images'></img>
      case 'Charts': return <img src={ChartsCode} className='code-images'></img>
      case 'ForteFans': return <img src={ForteFansCode} className='code-images'></img>
      default: return null
    }
  }

  return (
    <CodeImage image={project.image} />
  )
}

import React from 'react';
import ConnectGolfCode from '../../images/connectgolfcode.jpg';
import PfandMeCode from '../../images/pfandmecode.jpg';
import PortfolioCode from '../../images/portfoliocode.jpg';

export default function CodeImage(project) {

  const CodeImage = ({ image }) => {
    switch (image) {
      case 'friendship_model': return <img src={ConnectGolfCode}></img>
      case 'appointments_controller': return <img src={PfandMeCode}></img>
      case 'skills.jsx': return <img src={PortfolioCode}></img>
      default: return null
    }
  }

  return (
    <CodeImage image={project.code_snippet} />
  )
}

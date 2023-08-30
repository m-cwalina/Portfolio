import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PortfolioPic from '../../images/portfolio.jpg';
import ConnectGolfPic from '../../images/connectgolf.jpg';
import PfandMePic from '../../images/pfandme.jpg';
import ChartsPic from '../../images/charts.jpg';
import ForteFans from '../../images/fortefans.png';

export default function ProjectImage({ project }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = getImageSrc(project.image);
    img.onload = () => {
      setIsLoading(false);
    };
  }, [project]);

  const getImageSrc = (image) => {
    switch (image) {
      case 'ConnectGolf': return ConnectGolfPic;
      case 'PfandMe': return PfandMePic;
      case 'Portfolio': return PortfolioPic;
      case 'Charts': return ChartsPic;
      case 'ForteFans': return ForteFans;
      default: return null;
    }
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress size={100} style={{ color: '#164e63' }} />
      ) : (
        <div className="imageWrapper">
          <img src={getImageSrc(project.image)} className="images" alt={project.image} />
          <div className="overlay"></div>
        </div>
      )}
    </>
  );
}

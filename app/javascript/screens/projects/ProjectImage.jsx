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
        <CircularProgress size={100} />
      ) : (
        <img src={getImageSrc(project.image)} className='images' alt={project.image} />
      )}
    </>
  );
}

// import React from 'react';
// import PortfolioPic from '../../images/portfolio.jpg';
// import ConnectGolfPic from '../../images/connectgolf.jpg';
// import PfandMePic from '../../images/pfandme.jpg';
// import ChartsPic from '../../images/charts.jpg';
// import ForteFans from '../../images/fortefans.png';

// export default function Image(project) {

//   const Image = ({ image }) => {
//     switch (image) {
//       case 'ConnectGolf': return <img src={ConnectGolfPic} className='images'></img>
//       case 'PfandMe': return <img src={PfandMePic} className='images'></img>
//       case 'Portfolio': return <img src={PortfolioPic} className='images'></img>
//       case 'Charts': return <img src={ChartsPic} className='images'></img>
//       case 'ForteFans': return <img src={ForteFans} className='images'></img>
//       default: return null
//     }
//   }

//   return (
//     <Image image={project.image} />
//   )
// }

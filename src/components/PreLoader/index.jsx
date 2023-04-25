import React from 'react';

import './preloader.scss';
import {preLoaderAnimation} from "../../assets/animations";

const PreLoader = () => {
  React.useEffect(() => {
    preLoaderAnimation();
  }, [])
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Creator,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default PreLoader;

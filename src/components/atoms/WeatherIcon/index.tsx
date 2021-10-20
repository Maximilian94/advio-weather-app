import React from 'react';
import './style.css';

import gif from '../../../images/weather-icons/icons8-dia-parcialmente-nublado.gif';

const Main: React.FC = () => {
  return <img src={gif} alt="weather" />;
};

export default Main;

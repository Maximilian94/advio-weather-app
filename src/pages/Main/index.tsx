import React from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { Temperature, WeatherIcon } from '../../components/atoms';

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <InputsData />
      <Temperature title="3,5°C" />
      <WeatherIcon />
    </div>
  );
};

export default Main;

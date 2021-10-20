import React from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { SunRiseSunSet } from '../../components/molecules';
import { Temperature, WeatherIcon } from '../../components/atoms';

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <InputsData />
      <Temperature title="3,5°C" />
      <WeatherIcon />
      <SunRiseSunSet />
    </div>
  );
};

export default Main;

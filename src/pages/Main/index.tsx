import React from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { SunRiseSunSet } from '../../components/molecules';
import { Temperature, WeatherIcon } from '../../components/atoms';

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <InputsData />
      <Temperature title="Nome" />
      <WeatherIcon />
      <SunRiseSunSet />
    </div>
  );
};

export default Main;

import React from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { SunRiseSunSet } from '../../components/molecules';
import { Temperature, WeatherIcon } from '../../components/atoms';

// import { useWeather } from '../../hooks';
import { useWeather } from '../../context/weatherContext';

const Main: React.FC = () => {
  const { weather } = useWeather();
  return (
    <div className="main-page">
      <InputsData />
      <Temperature title={weather ? weather.main.temp : undefined} />
      <WeatherIcon />
      <SunRiseSunSet />
    </div>
  );
};

export default Main;

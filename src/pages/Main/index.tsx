import React, { useEffect, useState } from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { SunRiseSunSet } from '../../components/molecules';
import { Temperature, WeatherIcon } from '../../components/atoms';

import { getWeather } from '../../services/weatherApi';

const Main: React.FC = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await getWeather();
      setData(response);
    }
    fetchData();
  }, []);

  console.log(data);

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

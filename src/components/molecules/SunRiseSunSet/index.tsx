import React from 'react';
import { SunIfo } from '../../atoms';
import './style.css';

import { useWeather } from '../../../context/weatherContext';

const Main: React.FC = () => {
  const { weather } = useWeather();

  const zeroLeftIfNeeded = (num: number, size: number) => {
    let s = `${num}`;
    while (s.length < size) s = `0${s}`;
    return s;
  };

  const convertUnixTimeToTime = (unixTime: number) => {
    if (!weather) return 'Loading';
    const utc = new Date(unixTime * 1000);
    const hours = utc.getUTCHours();
    const min = utc.getUTCMinutes();
    return `${zeroLeftIfNeeded(hours, 2)}:${min}`;
  };

  return (
    <div className="sunrise-sunset">
      <SunIfo
        sunType="Sunrise"
        time={weather ? convertUnixTimeToTime(weather?.sys.sunrise) : 'Loading'}
      />
      <SunIfo
        sunType="Sunset"
        time={weather ? convertUnixTimeToTime(weather?.sys.sunset) : 'Loading'}
      />
    </div>
  );
};

export default Main;

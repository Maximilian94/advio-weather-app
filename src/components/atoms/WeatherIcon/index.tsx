import React from 'react';
import './style.css';

import { useWeather } from '../../../context/weatherContext';
import clearNight from '../../../images/weather-icons/night.svg';
import fewCloudNight from '../../../images/weather-icons/cloudy-night-1.svg';
import scatteredCloudNight from '../../../images/weather-icons/cloudy-night-2.svg';
import brokenCloudNight from '../../../images/weather-icons/cloudy-night-3.svg';
import rainNight from '../../../images/weather-icons/rainy-5.svg';
import showerRainNight from '../../../images/weather-icons/rainy-7.svg';
import thunderstorm from '../../../images/weather-icons/thunder.svg';
import snowNight from '../../../images/weather-icons/snowy-5.svg';
import clearDay from '../../../images/weather-icons/day.svg';
import fewCloudDay from '../../../images/weather-icons/cloudy-day-1.svg';
import scatteredCloudDay from '../../../images/weather-icons/cloudy-day-2.svg';
import brokenCloudDay from '../../../images/weather-icons/cloudy-day-3.svg';
import rainDay from '../../../images/weather-icons/rainy-1.svg';
import showerRainDay from '../../../images/weather-icons/rainy-3.svg';
import snowDay from '../../../images/weather-icons/snowy-2.svg';
import allWeather from '../../../images/weather-icons/weather.svg';

const icons: any = {
  '01n': clearNight,
  '02n': fewCloudNight,
  '03n': scatteredCloudNight,
  '04n': brokenCloudNight,
  '09n': showerRainNight,
  '10n': rainNight,
  '11n': thunderstorm,
  '13n': snowNight,
  '01d': clearDay,
  '02d': fewCloudDay,
  '03d': scatteredCloudDay,
  '04d': brokenCloudDay,
  '09d': showerRainDay,
  '10d': rainDay,
  '11d': thunderstorm,
  '13d': snowDay,
  noInfo: allWeather,
};

const Main: React.FC = () => {
  const { weather } = useWeather();

  const getIcon = () => {
    if (!weather) return icons.noInfo;
    const icon: string = weather?.weather[0].icon;
    return icons[icon] || icons.noInfo;
  };
  return <img src={getIcon()} alt="weather" className="weather-icon" />;
};

export default Main;

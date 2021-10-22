import React from 'react';
import './style.css';

import { useWeather } from '../../../context/weatherContext';

interface TitleProps {
  title: number | undefined;
}

const Temperature: React.FC<TitleProps> = ({ title }) => {
  const { isTempUnitCelsius } = useWeather();

  const fahrenheitFormula = (kelvin: number) => {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  };

  const getTemperature = () => {
    if (isTempUnitCelsius && title !== undefined) {
      return `${Math.round(title - 273.15)} °C`;
    }
    if (title !== undefined) {
      return `${Math.round(fahrenheitFormula(title))} °F`;
    }
    return undefined;
  };
  return <span className="temperature">{getTemperature() || 'Loading '}</span>;
};

export default Temperature;

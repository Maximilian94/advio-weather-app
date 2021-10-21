import React from 'react';
import './style.css';

import { useWeather } from '../../../context/weatherContext';

import { Switch, TemperatureUnit } from '../../atoms';

//  Inspiration on https://upmostly.com/tutorials/build-a-react-switch-toggle-component
const TemperatureSelector: React.FC = () => {
  const { isTempUnitCelsius, setIsTempUnitCelsius } = useWeather();
  return (
    <div className="switch-content">
      <TemperatureUnit title="°C" />
      <Switch
        isTempUnitCelsius={isTempUnitCelsius}
        handleChange={setIsTempUnitCelsius}
      />
      <TemperatureUnit title="°F" />
    </div>
  );
};

export default TemperatureSelector;

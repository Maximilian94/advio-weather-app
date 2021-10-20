import React from 'react';
import './style.css';

interface TitleProps {
  title: string;
}

//  Inspiration on https://upmostly.com/tutorials/build-a-react-switch-toggle-component
const TemperatureUnit: React.FC<TitleProps> = ({ title }) => {
  return <span className="temperature-unit">{title}</span>;
};

export default TemperatureUnit;

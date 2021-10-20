import React from 'react';
import './style.css';

interface SunInfoProps {
  sunType: 'Sunrise' | 'Sunset';
  time: string;
}

const Main: React.FC<SunInfoProps> = ({ sunType, time }) => {
  return <span className="sun-info">{`${sunType}: ${time}`}</span>;
};

export default Main;

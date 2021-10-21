import React from 'react';
import './style.css';

interface TitleProps {
  title: number | undefined;
}

const Temperature: React.FC<TitleProps> = ({ title }) => {
  return <span className="temperature">{title || 'Loading '}</span>;
};

export default Temperature;

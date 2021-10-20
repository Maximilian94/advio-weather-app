import React from 'react';
import './style.css';

interface TitleProps {
  title: string;
}

const Temperature: React.FC<TitleProps> = ({ title }) => {
  return <span className="temperature">{title}</span>;
};

export default Temperature;

import React from 'react';
import { SunIfo } from '../../atoms';
import './style.css';

const Main: React.FC = () => {
  return (
    <div className="sunrise-sunset">
      <SunIfo sunType="Sunrise" time="06:45" />
      <SunIfo sunType="Sunset" time="18:52" />
    </div>
  );
};

export default Main;

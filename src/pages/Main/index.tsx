import React from 'react';
import './style.css';

import { InputsData } from '../../components/organisms';
import { Temperature } from '../../components/atoms';

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <InputsData />
      <Temperature title="3,5°C" />
    </div>
  );
};

export default Main;

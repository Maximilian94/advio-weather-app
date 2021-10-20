import React from 'react';
import './style.css';

import { DropDown } from '../../molecules';

const InputsData: React.FC = () => {
  return (
    <div className="inputs-data">
      <DropDown />
      <p>Switcher</p>
    </div>
  );
};

export default InputsData;

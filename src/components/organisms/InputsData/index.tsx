import React from 'react';
import './style.css';

import { DropDown, Switch } from '../../molecules';

const InputsData: React.FC = () => {
  return (
    <div className="inputs-data">
      <DropDown />
      <Switch />
    </div>
  );
};

export default InputsData;

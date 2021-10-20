import React, { useState } from 'react';
import './style.css';

import { DropDownOption } from '../../atoms';

import arrowDown from '../../../images/arrow-down-sign-to-navigate.png';

const DropDown: React.FC = () => {
  const [listVisible, setListVisible] = useState(false);
  const options = ['Lisbon', 'teste 2', 'TESTE 3'];
  const [selectedCity, setSelectedCity] = useState(options[0]);

  const selectCity = (city: string) => {
    setSelectedCity(city);
    setListVisible(false);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-selected"
        onClick={() => setListVisible(!listVisible)}
      >
        <span>{selectedCity}</span>
        <img src={arrowDown} alt="arrow down" />
      </button>
      {listVisible ? (
        <div className="dropdown-list">
          {options.map(title => (
            <DropDownOption
              title={title}
              onClick={selectCity}
              isSelected={selectedCity === title}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;

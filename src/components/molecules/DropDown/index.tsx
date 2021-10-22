import React, { useEffect, useState } from 'react';
import './style.css';

import { useWeather } from '../../../context/weatherContext';

import { DropDownOption } from '../../atoms';

import arrowDown from '../../../images/arrow-down-sign-to-navigate.png';

const DropDown: React.FC = () => {
  const [listVisible, setListVisible] = useState(false);
  const options = ['Lisbon', 'New York', 'London', 'Sao Paulo'];
  const [selectedCity, setSelectedCity] = useState(options[0]);
  const { updateWeather } = useWeather();

  const selectCity = (city: string) => {
    setSelectedCity(city);
    setListVisible(false);
  };

  useEffect(() => {
    updateWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-selected"
        data-cy="dropdown-selected"
        onClick={() => setListVisible(!listVisible)}
      >
        <span>{selectedCity}</span>
        <img src={arrowDown} alt="arrow down" />
      </button>
      {listVisible ? (
        <div className="dropdown-list" data-cy="dropdown-list">
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

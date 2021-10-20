import React from 'react';
import './style.css';

interface SwitchProps {
  isTempUnitCelsius: boolean;
  handleChange: Function;
}

//  Inspiration on https://upmostly.com/tutorials/build-a-react-switch-toggle-component
const Switch: React.FC<SwitchProps> = ({ isTempUnitCelsius, handleChange }) => {
  return (
    <label className="switch-label" htmlFor="react-switch-new">
      <input
        className="switch-checkbox"
        id="react-switch-new"
        type="checkbox"
        onClick={() => handleChange(!isTempUnitCelsius)}
        checked={!isTempUnitCelsius}
      />
      <span className="switch-button" />
    </label>
  );
};

export default Switch;

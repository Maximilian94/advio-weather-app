import React from 'react';
import './style.css';

interface TitleProps {
  title: string;
  onClick: Function;
  isSelected: Boolean;
}

const DropDownOption: React.FC<TitleProps> = ({
  title,
  onClick,
  isSelected,
}) => {
  return (
    <button
      type="button"
      className={`dropdown-list-item ${isSelected ? 'selected' : null}`}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

export default DropDownOption;

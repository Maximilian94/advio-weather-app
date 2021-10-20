import React from 'react';
import './style.css';

interface TitleProps {
  title: string;
}

const PageTitle: React.FC<TitleProps> = ({ title }) => {
  return <p className="page-title">{title}</p>;
};

export default PageTitle;

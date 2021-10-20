import React from 'react';
import './style.css';

import { PageTitle } from '../../atoms';

const Header: React.FC = () => {
  return (
    <header className="header">
      <PageTitle title="Weather app" />
    </header>
  );
};

export default Header;

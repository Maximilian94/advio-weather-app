import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Main } from './pages';
import { Header } from './components/organisms';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;

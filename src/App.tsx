import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Main } from './pages';

function App() {
  return (
    <Router>
      <p>Header</p>
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;

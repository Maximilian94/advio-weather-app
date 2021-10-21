import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Main } from './pages';
import { Header } from './components/organisms';

import { WeatherProvider } from './context/weatherContext';

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </WeatherProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Main } from './pages';
import { Header } from './components/organisms';

import { WeatherAPI } from './services';

function App() {
  useEffect(() => {
    const teste = async () => {
      const response = await WeatherAPI.getWeatherByLocalName();
      console.log(response.data);
    };
    teste();
  }, []);
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

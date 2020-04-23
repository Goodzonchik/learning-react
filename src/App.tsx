import React from 'react';
import Nav from './Shared/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import RocketContainer from './Rockets/RocketContainer';
import EventContainer from './Events/EventContainer';

import './App.css';
import Ships from './Ships/Ships';

export default function App() {
  return (
    <div className={'app'}>
      <Router>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/history'>
            <EventContainer />
          </Route>
          <Route path='/rockets'>
            <RocketContainer />
          </Route>
          <Route path='/ships'>
            <Ships />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

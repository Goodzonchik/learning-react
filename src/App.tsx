import React from 'react';
import Nav from './Shared/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import RocketContainer from './Rockets/RocketContainer';
import EventContainer from './Events/EventContainer';
import Ships from './Ships/Ships';
import Footer from './Shared/Footer/Footer';
import FeedBack from './FeedBack/FeedBack';

import './App.scss';

export default function App() {
  return (
    <div className='app'>
      <div className='content'>
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
            <Route path='/feedback'>
              <FeedBack />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

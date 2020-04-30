import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Nav from './Shared/Nav/Nav';
import About from './About';
import Footer from './Shared/Footer/Footer';
import Loader from './Shared/Loader';
import FeedBackContainer from './FeedBack/FeedBackContainer';

import './App.scss';
import NotFound from './NotFound';
import NextVersion from './NextVersion';

const RocketContainer = React.lazy(() => import('./Rockets/RocketContainer'));
const EventContainer = React.lazy(() => import('./Events/EventContainer'));
const Ships = React.lazy(() => import('./Ships/Ships'));

export default function App() {
  const initDarkModeValue =
    localStorage.getItem('darkMode') === 'true' ? true : false;
  const [darkMode, setDarkMode] = useState(initDarkModeValue);

  function setModeDark() {
    localStorage.setItem('darkMode', 'true');
    setDarkMode(true);
  }

  function setModeLight() {
    localStorage.setItem('darkMode', 'false');
    setDarkMode(false);
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className='content'>
        <Router>
          <div className={'header'}>
            <Nav />
            {darkMode ? (
              <button className='form-button' onClick={setModeLight}>
                Light
              </button>
            ) : (
              <button className='form-button' onClick={setModeDark}>
                Dark
              </button>
            )}
          </div>
          <Switch>
            <Redirect exact from='/' to='/about' />
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/history'>
              <Suspense fallback={<Loader />}>
                <EventContainer />
              </Suspense>
            </Route>
            <Route path='/rockets'>
              <Suspense fallback={<Loader />}>
                <RocketContainer />
              </Suspense>
            </Route>
            <Route path='/ships'>
              <Suspense fallback={<Loader />}>
                <Ships />
              </Suspense>
            </Route>
            <Route path='/feedback'>
              <FeedBackContainer />
            </Route>
            <Route path='/next'>
              <NextVersion />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

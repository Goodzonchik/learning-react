import React, { Suspense } from 'react';
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

const RocketContainer = React.lazy(() => import('./Rockets/RocketContainer'));
const EventContainer = React.lazy(() => import('./Events/EventContainer'));
const Ships = React.lazy(() => import('./Ships/Ships'));

export default function App() {
  return (
    <div className='app'>
      <div className='content'>
        <Router>
          <Nav />
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
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

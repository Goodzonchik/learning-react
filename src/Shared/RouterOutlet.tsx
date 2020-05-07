import React, { Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import About from '../About';
import Payloads from '../Payloads/Payloads';
import FeedBackContainer from '../FeedBack/FeedBackContainer';
import NextVersion from '../NextVersion';
import NotFound from '../NotFound';
import Loader from './Loader';

const RocketContainer = React.lazy(() => import('../Rockets/RocketContainer'));
const EventContainer = React.lazy(() => import('../Events/EventContainer'));
const Ships = React.lazy(() => import('../Ships/Ships'));

export default function RouterOutlet() {
  return (
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
      <Route path='/payloads'>
        <Suspense fallback={<Loader />}>
          <Payloads />
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
  );
}

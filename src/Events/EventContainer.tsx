import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Event from './Event';
import Events from './Events';

export default function EventContainer() {
  const match = useRouteMatch();

  return (
    <div className='entity-container'>
      <Switch>
        <Route path={`${match.path}/:eventId`}>
          <Event />
        </Route>
        <Route path={match.path}>
          <Events />
        </Route>
      </Switch>
    </div>
  );
}

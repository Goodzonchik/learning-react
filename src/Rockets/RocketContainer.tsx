import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Rocket from './Rocket/Rocket';
import Rockets from './Rockets';

export default function RocketContainer() {
  const match = useRouteMatch();

  return (
    <div className='entity-container'>
      <Switch>
        <Route path={`${match.path}/:rocketId`}>
          <Rocket />
        </Route>
        <Route path={match.path}>
          <Rockets />
        </Route>
      </Switch>
    </div>
  );
}

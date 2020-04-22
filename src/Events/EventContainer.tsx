import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Event from './Event';
import Events from './Events';

const styles = {
  container: {
    display: 'block',
    padding: '20px',
    width: '100%',
    height: '100%',
  },
};

export default function EventContainer() {
  const match = useRouteMatch();

  return (
    <div style={styles.container}>
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

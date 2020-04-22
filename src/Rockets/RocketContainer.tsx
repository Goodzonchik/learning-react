import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Rocket from './Rocket';
import Rockets from './Rockets';

const styles = {
  container: {
    display: 'block',
    padding: '20px',
    width: '100%',
    height: '100%',
  },
};

export default function RocketContainer() {
  const match = useRouteMatch();

  return (
    <div style={styles.container}>
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

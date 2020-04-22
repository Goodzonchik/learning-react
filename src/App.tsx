import * as React from 'react';
import Nav from './Core/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import RocketContainer from './Rockets/RocketContainer';
import EventContainer from './Events/EventContainer';

const styles = {
  app: {
    width: '1024px',
    minHeight: '100vh',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
};

export default function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/history'>
            <EventContainer />
          </Route>
          <Route path='/rocket'>
            <RocketContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

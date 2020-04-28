import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'block',
    padding: '1em',
    margin: '1em',
  },
  image: {
    width: '100%',
  },

  link: {
    width: '100%',
    margin: '1em 0',
    textAlign: 'center' as 'center',
    display: 'block',
    fontSize: '2em',
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h2>- Houston, we have a problem!</h2>
      <h2>- What happened?</h2>
      <h2>- We did not find the page.</h2>
      <h2>- Try to go to the main page at the link below...</h2>
      <img style={styles.image} src='/destroy.jpg' alt='destroy'></img>
      <NavLink style={styles.link} to={`/about`} activeClassName='active-link'>
        Go to Earth!
      </NavLink>
    </div>
  );
}

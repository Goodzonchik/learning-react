import React from 'react';
import { NavLink } from 'react-router-dom';

import './NotFound.scss';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>- Houston, we have a problem!</h2>
      <h2>- What happened?</h2>
      <h2>- We did not find the page.</h2>
      <h2>- Try to go to the main page at the link below...</h2>
      <img className='not-found__image' src='/destroy.jpg' alt='destroy'></img>
      <NavLink className='not-found__home-link' to={`/about`}>
        Go to Earth!
      </NavLink>
    </div>
  );
}

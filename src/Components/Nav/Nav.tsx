import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
  const links = [
    'About',
    'History',
    'Rockets',
    'Ships',
    'Payloads',
    'Next',
    'Feedback',
  ];

  const linkList = links.map((item) => (
    <li className='nav__link' key={item}>
      <NavLink to={`/${item}`} activeClassName='nav__link_active'>
        {item}
      </NavLink>
    </li>
  ));

  return <ul className='nav'>{linkList}</ul>;
}

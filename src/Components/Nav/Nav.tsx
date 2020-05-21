import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
  const links = [
    'about',
    'history',
    'rockets',
    'ships',
    'payloads',
    'feedback',
  ];

  const linkList = links.map((item) => (
    <li className='nav__link' key={item}>
      <NavLink to={`/${item}`} activeClassName='nav__link_active'>
        <span style={{ textTransform: 'capitalize' }}>{item}</span>
      </NavLink>
    </li>
  ));

  return <ul className='nav'>{linkList}</ul>;
}

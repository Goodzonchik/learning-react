import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  const links = [
    {
      url: 'about',
      title: 'About company',
    },
    { url: 'history', title: 'Events' },
    { url: 'rockets', title: 'Rockets' },
    { url: 'ships', title: 'Ships' },
  ];

  const linkList = links.map((item) => (
    <li className={'nav-link'} key={item.url}>
      <NavLink to={'/' + item.url} activeClassName='active-link'>
        {item.title}
      </NavLink>
    </li>
  ));

  return <ul className={'nav'}>{linkList}</ul>;
}

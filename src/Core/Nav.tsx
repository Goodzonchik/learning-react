import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    listStyleType: 'none',
    margin: '0',
  },
  navItem: {
    margin: '0.5rem 1rem',
    padding: '0.5rem',
    fontSize: '1.25rem',
  },
};

export default function Nav() {
  const links = [
    {
      url: 'about',
      title: 'About company',
    },
    { url: 'history', title: 'Events' },
    { url: 'rocket', title: 'Rockets' },
  ];

  return (
    <ul style={styles.nav}>
      {links.map((item) => (
        <li style={styles.navItem} key={item.url}>
          <NavLink to={'/' + item.url} activeClassName='active'>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

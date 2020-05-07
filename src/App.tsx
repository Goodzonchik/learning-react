import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Shared/Nav/Nav';
import Footer from './Shared/Footer/Footer';
import ThemeButton from './Shared/ThemeButton/ThemeButton';

import './App.scss';
import RouterOutlet from './Shared/RouterOutlet';

const initDarkModeValue =
  localStorage.getItem('darkMode') === 'true' ? true : false;

export default function App() {
  const [darkMode, setDarkMode] = useState(initDarkModeValue);

  function toogleTheme() {
    const newMode = !darkMode;
    localStorage.setItem('darkMode', newMode.toString());
    setDarkMode(newMode);
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className='content'>
        <Router>
          <div className={'header'}>
            <Nav />
            <ThemeButton isDarkMode={darkMode} changeMode={toogleTheme} />
          </div>
          <RouterOutlet />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import ThemeButton from './Components/ThemeButton/ThemeButton';

import './App.scss';
import RouterOutlet from './Components/RouterOutlet';

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
    <div className={darkMode ? 'app app__theme-dark' : 'app'}>
      <div className='content'>
        <Router>
          <div className='content__header'>
            <Nav />
            <ThemeButton
              customClassName='app__theme-dark'
              isDarkMode={darkMode}
              changeMode={toogleTheme}
            />
          </div>
          <RouterOutlet />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

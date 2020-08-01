import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import ThemeButton from './Components/ThemeButton/ThemeButton';
import RouterOutlet from './Components/RouterOutlet';

import './App.scss';

const initDarkModeValue =
  localStorage.getItem('darkMode') === 'true' ? true : false;

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

export default function App() {
  const [darkMode, setDarkMode] = useState(initDarkModeValue);

  function toogleTheme() {
    const newMode = !darkMode;
    localStorage.setItem('darkMode', newMode.toString());
    setDarkMode(newMode);
  }

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

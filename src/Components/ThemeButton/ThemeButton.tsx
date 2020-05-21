import React from 'react';

import './ThemeButton.scss';

interface ThemeButtonModel {
  isDarkMode: boolean;
  changeMode: () => void;
  customClassName?: string;
}

export default function ThemeButton({
  isDarkMode,
  changeMode,
  customClassName,
}: ThemeButtonModel) {
  return (
    <button
      className={
        isDarkMode ? `theme-button ${customClassName}` : 'theme-button'
      }
      onClick={changeMode}
    >
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
}

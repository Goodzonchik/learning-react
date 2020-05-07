import React from 'react';

interface ThemeButtonModel {
  isDarkMode: boolean;
  changeMode: () => void;
}

export default function ThemeButton({
  isDarkMode,
  changeMode,
}: ThemeButtonModel) {
  return (
    <button className='form-button' onClick={changeMode}>
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
}

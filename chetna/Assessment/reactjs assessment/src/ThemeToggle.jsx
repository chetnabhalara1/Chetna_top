import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeToggle() {
  const {Dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
       {Dark ? 'Dark' : 'light'} Mode
    </button>
  );
}

export default ThemeToggle;

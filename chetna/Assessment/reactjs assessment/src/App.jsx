import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function App() {
  const [Dark, setDark] = useState("");

  const toggleTheme = () => {
    setDark(color => !color);
  };

  return (
    <ThemeContext.Provider value={{ Dark, toggleTheme }}>
      <div style={{ background: Dark ? 'black' : 'white', color: Dark ? 'white' : 'black', height: '100vh', width: '220vh', textAlign: 'center' }}>
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;




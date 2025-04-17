import React, { useState } from 'react';
import BusFinder from './components/BusFinder';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#f9f9f9',
    color: darkMode ? '#f9f9f9' : '#121212',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '1rem',
    background: darkMode ? '#1e1e1e' : '#f2f2f2',
    fontWeight: 'bold',
    fontSize: '14px',
    color: darkMode ? '#aaa' : '#555'
  };

  return (
    <div style={appStyle}>
      <div style={{ padding: '10px', textAlign: 'right' }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div style={{ flex: 1 }}>
        <BusFinder />
      </div>

      <footer style={footerStyle}>
        Developed by Chandu Aika © 2025
      </footer>
    </div>
  );
}

export default App;


import React from 'react';
import BusFinder from './components/BusFinder';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <BusFinder />
      </div>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        background: '#f2f2f2',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#555'
      }}>
        Developed by Chandu Aika © 2025
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import world from './world.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={world} className="App-logo" alt="logo" />
        <p className="text">
          Hello World
        </p>
        
      </header>
    </div>
  );
}

export default App;

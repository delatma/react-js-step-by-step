import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={event => {alert("now you know how to handle onclick event")}}>
            HELLO WORLD
          </button>
          <p>Number: 0</p>
        </p>
      </header>
    </div>
  );
}

export default App;

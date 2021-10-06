import React from 'react';
import logo from './../img/logo.svg'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h4>ReactJS - Quiz</h4>
      </header>
    </div>
  );
}

export default App;

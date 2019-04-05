import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Net Ninja</h1>
        </header>
          <Ninjas />
      </div>
    );
  }
}

export default App;

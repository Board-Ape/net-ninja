import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    name: 'Ryu',
    age: 29,
    skill: 'Expert'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Net Ninja</h1>
        </header>
          <Ninjas 
            name={this.state.name}
            age={this.state.age}
            skill={this.state.skill}
          />
      </div>
    );
  }
}

export default App;

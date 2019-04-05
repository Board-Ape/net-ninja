import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Ryu', age: 29, skill: 'Expert' },
      { id: 2, name: 'Ken', age: 24, skill: 'Advanced' },
      { id: 3, name: 'Badum', age: 45, skill: 'Sifu' }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Net Ninja</h1>
        </header>
          <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;

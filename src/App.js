import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Ryu', age: 29, skill: 'Expert' },
      { id: 2, name: 'Ken', age: 24, skill: 'Advanced' },
      { id: 3, name: 'Badum', age: 45, skill: 'Sifu' }
    ]
  }

  addNinja = (ninja) => {
    const newState = [...this.state.ninjas, ninja]

    this.setState({
      ninjas: newState
    })
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Net Ninja</h1>
        </header>
          <Ninjas ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;

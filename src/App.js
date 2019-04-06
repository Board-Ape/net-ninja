import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('App: constructor()')
    this.state = {
      ninjas: [
        { id: 1, name: 'Ryu', age: 29, skill: 'Expert' },
        { id: 2, name: 'Ken', age: 24, skill: 'Advanced' },
        { id: 3, name: 'Badum', age: 45, skill: 'Sifu' }
      ]
    }
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    const newState = [...this.state.ninjas, ninja]

    this.setState({
      ninjas: newState
    })
  }

  deleteNinja = (id) => {
    const newState = this.state.ninjas.filter(ninja => ninja.id !== id)

    this.setState({
      ninjas: newState
    })
  }

  static getDerivedStateFromProps() {
    console.log('App: getDerivedStateFromProps()')
    return null
  }
  
  componentDidMount() {
    console.log('App: componentDidMount()')
  }

  shouldComponentUpdate() {
    console.log('App: shouldComponentUpdate()')
    return true
  }
 
  render() {
    console.log('App: render()')    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Net Ninja</h1>
        </header>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;

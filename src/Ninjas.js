import React, {Component} from 'react'

class Ninjas extends Component {
    state = {
        name: 'Ryu',
        age: 29,
        skill: 'Expert'
    }

    render () {
        return (
            <div className="ninjas">
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.skill}</p>
            </div>
        )
    }
}

export default Ninjas
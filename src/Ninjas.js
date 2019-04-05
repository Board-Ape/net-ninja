import React, {Component} from 'react'

class Ninjas extends Component {

    render () {
        return (
            <div className="ninjas">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.skill}</p>
            </div>
        )
    }
}

export default Ninjas
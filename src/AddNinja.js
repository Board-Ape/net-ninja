import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        skill: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addNinja(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="skill">Skill</label>
                    <input type="text" id="skill" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;
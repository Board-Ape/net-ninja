import React, {Component} from 'react';

class AddNinja extends Component {
    constructor(props) {
        super(props)
        console.log('AddNinja: constructor()')
        this.state = {
            name: '',
            age: '',
            skill: ''
        }
    }

    componentDidMount() {
        console.log('AddNinja: componentDidMount()')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('AddNinja: componentDidUpdate()')
        console.log(prevProps, prevState)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addNinja(this.state)

        this.setState({
            name: '',
            age: '',
            skill: ''
        })
    }

    render() {
        console.log('AddNinja: render()')
        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" onChange={this.handleChange} value={this.state.age}/>
                    <label htmlFor="skill">Skill</label>
                    <input type="text" id="skill" onChange={this.handleChange} value={this.state.skill}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;
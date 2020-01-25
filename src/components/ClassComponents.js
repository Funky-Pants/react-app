import React from 'react';

class ClassComponentExample extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "Hello"
        }
    }

    buttonOnClick = (event) =>{
        console.log('Clicked!');
        this.setState({
            title: "Set new Title",
            name: "Atanas"
        })
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <h2>{this.state.name}</h2>
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.description}</p>
            <button onClick={this.buttonOnClick} type="button" className="btn btn-outline-success">Click me</button>
        </div>;
    }
}

export default ClassComponentExample;
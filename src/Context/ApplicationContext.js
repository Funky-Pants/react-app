import React, { Component, createContext} from 'react';

const { Provider, Consumer} = createContext;

class ApplicationContextProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "Default title",
            counter: 1,
            movies: []
        }
    }

    setTitle = title => this.setState({ title })

    render = () => {
        return <Provider value={this.state.title}>
            ...this.state,
            setTitle: this.setTitle
        </Provider>
    }
}

export default {
    ApplicationContextProvider,
    ApplicationConsumer: Consumer
}
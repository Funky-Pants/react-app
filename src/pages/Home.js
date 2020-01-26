import React from 'react';
import {connect} from 'react-redux';
import QuantityInput from '../components/QuantityInput';
import setActionCount from '../Redux/Counter'

// import { func } from '../../node_modules/@types/prop-types';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counts: [1,2,3,4,5]
        }
        console.log(props.counterOne);
    }

    QuantityInputs = () =>{

        const counts = this.state.counts;

        const inputs = counts.map(element => {
            return <QuantityInput key={element} count={element}/>
        })

        return inputs;
    }

    changeCounts = () =>{
        this.setState({
            counts: [7, 2, 21312]
        })
    }

    changeGlobalCount = () => {
        this.props.setCounter(10);
    }

    render() {
        return <div>
            Home page
            {this.QuantityInputs()}
            <button onClick={this.changeCounts} type="button" className="btn btn-primary">Change counts</button>
            <button onClick={this.changeGlobalCount} type="button" className="btn btn-danger">Change global count</button>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counterOne
    }
};

const mapStateToDispatch = dispatch => {
    return {
        setCounter: count => dispatch(setActionCount(count))
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);


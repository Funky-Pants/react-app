import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import setActionCount from '../Redux/Counter'

// class Profile extends React.Component {

//     render() {
//         return <div>
//             Profile page

//             <h1>{this.props.counter}</h1>
//         </div>;
//     }
// }

const Profile = props => {
    const counter = useSelector(state => state.counterOne);
    const dispatch = useDispatch();

    const setCounter = count => dispatch(setActionCount(count))
    return <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(20)}  type="button" className="btn btn-danger">Change Global Counts</button>
    </div>
}

export default Profile;

// export default connect(state => ({counter: state.counterOne}))(Profile);
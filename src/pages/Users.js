import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this.props.getMovies();

    }

    render() {
        return <div>
            Users page
            <h1>{this.props.counter}</h1>
            <ul className="list-group">
                {this.props.movies.map(movie => {
                    return <li key={movie.id} className="list-group-item">{movie.title}</li>
                })}
            </ul>
            <input type="text" value={this.props.title} className="form-control" onChange={e => this.props.setTitle(e.target.payload)}/>
        </div>;
    }
}

function getGlobalMovies() {
    return dispatch => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then(response => response.json())
            .then(responseJson => {
                dispatch({
                    type: "FETCHED_MOVIES",
                    payload: responseJson.movies
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
  }

  const setActionTitle = title => {
      return {
          type: "SET_TITLE",
          payload: title
      }
  }

  const mapStateToProps = state => ({ movies: state.movies, counter: state.counterOne });
  const mapStateToDispatch = dispatch => {
      return {
          getMovies: () => dispatch(getGlobalMovies()),
          setActionTitle: title => dispatch (setActionTitle(title))
      }
  }
  
  export default connect(mapStateToProps, mapStateToDispatch)(Users);
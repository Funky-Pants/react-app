
import { combineReducers } from "redux";


const counter = function(count = 1, action){
    switch(action.type){
        case "INCREMENT_COUNT":{
            return action.payload + 1;
        }

        default: 
            return count;
    }
}

const title = function(count = "Default title", action){
    switch(action.type){
        case "SET_TITLE":{
            return action.payload;
        }

        default: 
            return title;
    }
}

const movies = function(movies = [], actions){
    switch(actions.type){
        case "FETCHED_MOVIES":{
            return [...actions.payload];
        }

        default: 
            return movies;
    }
}

export default combineReducers({
    counterOne: counter,
    movies,
    title
})
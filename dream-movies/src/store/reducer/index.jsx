import {GET_MOVIES} from "../actions";

const intialState = {
  allMovies: []
}

export default function reducer(state = intialState, action){

switch(action.type){
  case GET_MOVIES: 

  return{
    ...state,
    allMovies: action.data,
  }
  
  default:
    return state
}
}
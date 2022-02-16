
import { GET_CAPITULOS, GET_TEMPORADAS} from "../actions";


const initialState = {
  allTempTheSimp:[],
  allCapitulosTheSimp:[],
}

export default function reducer(state = initialState, action){

  switch(action.type){

    case GET_TEMPORADAS:
      return{
        ...state,
        allTempTheSimp: action.data
      }
      
    case GET_CAPITULOS:
      return{
        ...state,
        allCapitulosTheSimp: action.data
      }
    default:
      return state

  }

}
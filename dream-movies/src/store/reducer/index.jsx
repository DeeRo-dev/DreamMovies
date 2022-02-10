
import { GET_TEMP_THESIMPSONS, GET_CAPITULOS_THESIMPSONS} from "../actions";


const initialState = {
  allTempTheSimp:[],
  allCapitulosTheSimp:[],
}

export default function reducer(state = initialState, action){

  switch(action.type){

    case GET_TEMP_THESIMPSONS:
      return{
        ...state,
        allTempTheSimp: action.data
      }
    case GET_CAPITULOS_THESIMPSONS:
      return{
        ...state,
        allCapitulosTheSimp: action.payload
      }
    default:
      return state

  }

}
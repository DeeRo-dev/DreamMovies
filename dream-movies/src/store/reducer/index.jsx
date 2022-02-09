
import { GET_TEMP_THESIMPSONS, GET_CAPITULOS_THESIMPSONS} from "../actions";


const initialState = {
  allTempTheSimp:['fsdf'],
  allCapitulosTheSimp:[],
}

export default function reducer(state = initialState, action){

  switch(action.type){

    case GET_TEMP_THESIMPSONS:
      return{
        ...state,
        allCapitulosTheSimp: action.payload
      }
    case GET_CAPITULOS_THESIMPSONS:
      return{
        ...state,
        allTempTheSimp: action.data
      }
    default:
      return state

  }

}
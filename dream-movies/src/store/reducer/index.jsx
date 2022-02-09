
import { GET_CAPITULOS_THESIMPSONS} from "../actions";


const initialState = {

  allCapitulosTheSimp:[],
}

export default function reducer(state = initialState, action){

  switch(action.type){

    case GET_CAPITULOS_THESIMPSONS:
      return{
        ...state,
        allCapitulosTheSimp: action.payload
      }
  }

}
import axios from 'axios'

export const GET_CAPITULOS_THESIMPSONS = 'GET_CAPITULOS_THESIMPSONS';
export const  GET_TEMP_THESIMPSONS = ' GET_TEMP_THESIMPSONS';
let apiKey = 'b1862b40bc3477ded26344589e44acf0';

export function getTempSimp() {
  return async (dispatch) => {
    try {
      const json = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`);
    //  https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Jack+Reacher
      return dispatch({
        type: GET_TEMP_THESIMPSONS,
        data: json.data,
       
      });
    } catch (e) {
      console.log(e);
    }
  };
}

  //  export function getCapSimp() {
  //   return async (dispatch) => {
  //     try {
  //       const json = await axios.get(``);
  //       return dispatch({
  //         type: GET_CAPITULOS_THESIMPSONS,
  //         payload: json.data,
         
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  // }
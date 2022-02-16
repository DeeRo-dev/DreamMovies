import axios from 'axios'

export const GET_CAPITULOS = 'GET_CAPITULOS_THESIMPSONS';
export const  GET_TEMPORADAS = ' GET_TEMP_THESIMPSONS';
let apiKey = 'b1862b40bc3477ded26344589e44acf0';

export function getTemp(idSerie) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiKey}&language=es`);
      
      return dispatch({
        type: GET_TEMPORADAS,
        data: json.data,
       
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getCapitulo(idSerie, idCapitulo) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idCapitulo}?api_key=${apiKey}&language=es`);
      
      return dispatch({
        type: GET_CAPITULOS,
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
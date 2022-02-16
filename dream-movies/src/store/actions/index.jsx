import axios from 'axios'

export const  GET_TEMPORADAS = ' GET_TEMP_THESIMPSONS';
export const GET_ALL_CAPITULOS = 'GET_CAPITULOS_THESIMPSONS';
export const GET_ONE_CAPITULO = 'GET_ONE_CAPITULO';
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



export function getAllCapitulos(idSerie, idTemporada) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}?api_key=${apiKey}&language=es`);
      
      return dispatch({
        type: GET_ALL_CAPITULOS,
        data: json.data,
       
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getOneCapitulo(idSerie, idTemporada, idCapitulo) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}/episode/${idCapitulo}?api_key=${apiKey}&language=es`);
      
      return dispatch({
        type: GET_ONE_CAPITULO,
        data: json.data,
       
      });
    } catch (e) {
      console.log(e);
    }
  };
}



                                      /* ░░░░░░░▄▄████▄▄▄░░░░░░▄▄██████▄▄
                                      ░░░░░██▓▓▓▓▓▓▒▓▓██░░▓█▓▓▓▓▒░▒▒▓▓██
                                      ░░░██▓▓▓▓▓▓▓▓▓▒░▓▓███▓▓▓▓▓▒▒▒░░▒▓▓█
                                      ░░██▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓█▓▓▓▓▓▓▓▓▓▓▒░░▓▓█
                                      ░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓██▓▓▓▓▓▓▓▓▓▒░░▓▓█
                                      ░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░▒▓█
                                      ░█▓▓▓▓▓▓▓▓▓▓▓▓████░████▓▓▓▓▓▓▓▓▓▒░░▓██
                                      █▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░░██▓▓▓▓▓▓▓▓▓░░▓▓█
                                      █▓▓▓▓▓▓▓▓▓▓▓▓▓░░█░░░█░░▓▓▓▓▓▓▓▓▓▓▒░▓▓█▒
                                      █▓▓▓▓▓▓▓▓▓▓▓▓▓░█▒█░█▒█░▓▓▓▓▓▓▓▓▓▓▒▒▓▓█▒
                                      █▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▒▒▓██▒
                                      █▓▓▓▓▓▓▓▓▓▓▓▓▓▓░▒██░░░▓▓▓▓▓▓▓▓▓▓▓▒▓▓█▓▒
                                      ░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓█▓▒
                                      ░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░░█▓▓▓▓▓▓▓▓▓██▓▓▓▓█████▓▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░░░█▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░▓█▓▓▓▓▓▓▓▓██▒▒▓▒▒█▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░░░█▓▓▓▓▓▓▓▓██▒▒▒█▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░░░░██▓▓▓▓▓▓▓▓███▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░░░░░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░░░░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░░░░░░░░░░██▓▓▓▓▓▓▓▓▓▓▓▓██▓▒
                                      ░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓▓█▓▒
                                      ░░░░░░░░░░░░░░░██▓▓▓▓▓██▓▒
                                      ░░░░░░░░░░░░░░░░░█▓▓██▓▒
                                      ░░░░░░░░░░░░░░░░░░░█▓▒ */


                                                          
 
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
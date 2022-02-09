
export const GET_CAPITULOS_THESIMPSONS = 'GET_CAPITULOS_THESIMPSONS';


let apiKey = 'f8e07331';
export function getCapSimp(titulo) {
 
    return function (dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      // .then(console.log(response.json))
      .then(json =>{
        dispatch({
          type: GET_CAPITULOS_THESIMPSONS,
          payload: json
        })
      })
    }
   }; 
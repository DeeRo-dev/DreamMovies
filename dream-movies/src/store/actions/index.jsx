
export const GET_CAPITULOS_THESIMPSONS = 'GET_CAPITULOS_THESIMPSONS';


let apiKey = 'b1862b40bc3477ded26344589e44acf0';


   export function getCapSimp() {
    return async (dispatch) => {
      try {
        const json = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`);
        return dispatch({
          type: GET_CAPITULOS_THESIMPSONS,
          payload: json.data,
         
        });
      } catch (e) {
        console.log(e);
      }
    };
  }
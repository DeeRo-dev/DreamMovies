/* export function getMovies (titulo) {
 
    return function (dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: GET_MOVIES,
          payload: json
        })
      })
    }
   }; */
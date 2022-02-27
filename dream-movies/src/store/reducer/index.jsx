import {
  GET_ALL_CAPITULOS,
  GET_TEMPORADAS,
  GET_ONE_CAPITULO,
  GET_VIDEO_SERIE,
  GET_PELICULA,
  GET_PELICULA_VIDEO,
  SEARCH_PELICULA,
} from "../actions";

const initialState = {
  allTemps: [],
  allCapitulos: [],
  oneCapitulo: [],
  videoSerie: [],
  searchPelicula: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEMPORADAS:
      return {
        ...state,
        allTemps: action.data,
      };

    case GET_ALL_CAPITULOS:
      return {
        ...state,
        allCapitulos: action.data,
      };

    case GET_ONE_CAPITULO:
      return {
        ...state,
        oneCapitulo: action.data,
      };

    case GET_VIDEO_SERIE:
      return {
        ...state,
        videoSerie: action.data,
      };
    case GET_PELICULA_VIDEO:
      return {
        ...state,
        videoSerie: action.data,
      };

    case GET_PELICULA:
      return {
        ...state,
        oneCapitulo: action.data,
      };

    case SEARCH_PELICULA:
      return {
        ...state,
        searchPelicula: action.data,
      };

    default:
      return state;
  }
}
/*                   /"\
                                                        |\./|
                                                        |   |
                                                        |   |
                                                        |>~<|
                                                        |   |
                                                    /'\|   |/'\..
                                                /~\|   |   |   | \
                                                |  =[@]=   |   |  \
                                                |   |   |   |   |   \
                                                | ~   ~   ~   ~ |`   )
                                                |                   /
                                                \                 /
                                                  \               /
                                                  \    _____    /
                                                    |--//''`\--|
                                                    | (( +==)) |
                                                    |--\_|_//--|		  
                                          
                                        ________   __    __    _______   __    __
                                      |        | |  |  |  |  /       | |  |  /  /
                                      |  ------' |  |  |  |  |   ____| |  | /  /
                                      |  |___    |  |  |  |  |  |      |  |/  /
                                      |   ___|   |  |  |  |  |  |      |     / 
                                      |  |       |  |  |  |  |  |____  |     \
                                      |  |       |   --   |  |       | |  |\  \
                                      |__|       \________/   \______| |__| \__\ */

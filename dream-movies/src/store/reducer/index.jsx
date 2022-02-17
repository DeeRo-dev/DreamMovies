import { GET_ALL_CAPITULOS, GET_TEMPORADAS, GET_ONE_CAPITULO } from "../actions";

const initialState = {
  allTemps: [],
  allCapitulos: [],
  oneCapitulo: [],
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
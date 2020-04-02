import pokemonTypes from "../../../data/pokemon.types";

export const initialState = {
  pokemonTypes: pokemonTypes,
  pokemons: [],
  inputValue: "",
  type: "",
  typeDoesNotExist: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        pokemons: action.payload
      };
    case "FETCH_ERROR":
      return {};
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload
      };
    case "SET_TYPE_DOES_NOT_EXIST":
      return {
        ...state,
        typeDoesNotExist: action.payload
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload
      };

    default:
      return state;
  }
};

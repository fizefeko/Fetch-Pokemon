import pokemonTypes from "../../../data/pokemon.types";

export const initialState = {
  pokemonTypes: pokemonTypes,
  pokemons: [],
  inputValue: "",
  secondInputValue: "",
  type: "",
  secondType: "",
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
    case "SET_SECOND_INPUT_VALUE":
      return {
        ...state,
        secondInputValue: action.payload
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
    case "SET_SECOND_TYPE":
      return {
        ...state,
        secondType: action.payload
      };

    default:
      return state;
  }
};

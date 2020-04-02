export const initialState = {
  pokemonDetails: {},
  imgUrl: "",
  imageError: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMON_DETAILS":
      return {
        ...state,
        pokemonDetails: action.payload
      };
    case "SET_IMG_URL":
      return {
        ...state,
        imgUrl: action.payload
      };
    case "SET_IMAGE_ERROR":
      return {
        ...state,
        imageError: action.payload
      };
    default:
      return state;
  }
};

export const initialState = {
  name: "",
  types: [],
  imageUrl: "",
  pokeIndex: "",
  imageLoading: true,
  imageError: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };

    case "SET_TYPES":
      return {
        ...state,
        types: action.payload
      };
    case "SET_IMAGE_URL":
      return {
        ...state,
        imageUrl: action.payload
      };
    case "SET_POKE_INDEX":
      return {
        ...state,
        pokeIndex: action.payload
      };
    case "SET_IMAGE_LOADING":
      return {
        ...state,
        imageLoading: action.payload
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

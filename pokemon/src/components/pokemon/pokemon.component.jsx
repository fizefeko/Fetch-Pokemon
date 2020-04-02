import React, { useEffect, useReducer } from "react";
import { withRouter } from "react-router-dom";
import "./pokemon.styles.css";

import LoadingSpinner from "../Shared/loading-spinner/loading-spinner";

import { reducer, initialState } from "./pokemon.reducer";

const Pokemon = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //the useEffect hook in this case is imitating componentDidMount
  useEffect(() => {
    let types = [];
    const { name, url } = props.pokemon;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.types.map((el) => {
          return types.push(el.type.name);
        });
      });
    dispatch({ type: "SET_TYPES", payload: types });

    const pokeIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;

    dispatch({ type: "SET_NAME", payload: name });
    dispatch({ type: "SET_TYPES", payload: types });
    dispatch({ type: "SET_IMAGE_URL", payload: imageUrl });
    dispatch({ type: "SET_POKE_INDEX", payload: pokeIndex });
  }, []);

  const onCardClick = () => {
    props.history.push(`/pokemon/${state.pokeIndex}`);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (
    (state.types.includes(props.type) &&
      state.types.includes(props.secondType)) ||
    props.type === ""
  ) {
    return (
      <div className="card m-2" onClick={onCardClick}>
        <div className="card-header d-flex justify-content-between">
          <span>{state.pokeIndex}</span>
          {state.imageError ? (
            <span className="badge badge-danger">To Many Requests</span>
          ) : null}
        </div>
        <div className="card-body mx-auto">
          {state.imageLoading ? <LoadingSpinner /> : null}
          <img
            src={state.imageUrl}
            alt=""
            onLoad={() =>
              dispatch({ type: "SET_IMAGE_LOADING", payload: false })
            }
            onError={() => dispatch({ type: "SET_IMAGE_ERROR", payload: true })}
            className="card-ing-top rounded mx-auto w-100 m-0"
          />
          <h6 className="card-title text-center">
            {capitalizeFirstLetter(state.name)}
          </h6>
          <div className="text-center">
            <small>
              <strong>Types: </strong>
              {state.types.map((el) => el + ", ")}
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default withRouter(Pokemon);

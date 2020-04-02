import React, { useReducer, useEffect } from "react";

import PokemonList from "../../pokemon-list/pokemon-list.component";
import Filter from "../../Shared/filter/filter.component";
import { reducer, initialState } from "./main.reducer";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        return response.json();
      })
      .then((pokemons) => {
        dispatch({ type: "FETCH_SUCCESS", payload: pokemons.results });
      });
  }, [state]);

  const onInputChange = (event) => {
    dispatch({
      type: "SET_INPUT_VALUE",
      payload: event.target.value.toLowerCase()
    });
  };

  const onSecondInputChange = (event) => {
    dispatch({
      type: "SET_SECOND_INPUT_VALUE",
      payload: event.target.value.toLowerCase()
    });
  };
  const changeFilter = () => {
    dispatch({ type: "SET_TYPE_DOES_NOT_EXIST", payload: false });
    dispatch({ type: "SET_TYPE", payload: state.inputValue });
    dispatch({ type: "SET_SECOND_TYPE", payload: state.secondInputValue });
  };
  const cleanFilter = () => {
    dispatch({ type: "SET_TYPE", payload: "" });
    dispatch({ type: "SET_SECOND_TYPE", payload: "" });
    dispatch({ type: "SET_INPUT_VALUE", payload: "" });
    dispatch({ type: "SET_SECOND_INPUT_VALUE", payload: "" });
    dispatch({ type: "SET_TYPE_DOES_NOT_EXIST", payload: false });
  };

  return (
    <div className="container">
      <Filter
        onInputChange={onInputChange}
        inputValue={state.inputValue}
        onSecondInputChange={onSecondInputChange}
        secondInputValue={state.secondInputValue}
        changeFilter={changeFilter}
        cleanFilter={cleanFilter}
        type={state.type}
        typeDoesNotExist={state.typeDoesNotExist}
      />
      <PokemonList
        pokemons={state.pokemons}
        type={state.type}
        secondType={state.secondType}
      />
    </div>
  );
};

export default Main;

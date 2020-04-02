import React, { useReducer, useEffect } from "react";
import "./pokemon-details.styles.css";
import { reducer, initialState } from "./pokemon-details.reducer.js";

const inline = {
  height: "auto",
  transform: "none"
};

const PokemonDetails = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({ type: "SET_POKEMON_DETAILS", payload: response });
      });
    const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.match.params.id}.png?raw=true`;
    dispatch({ type: "SET_IMG_URL", payload: imgUrl });
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const { name, height, abilities } = state.pokemonDetails;

  let sprites = state.pokemonDetails.sprites;

  let initialStatsArray = state.pokemonDetails.stats;

  let transformedStatsArray = [];

  if (initialStatsArray) {
    initialStatsArray.map((el) => {
      return transformedStatsArray.push({
        points: el.base_stat,
        statName: el.stat.name
      });
    });
  }

  let pokemonSprites = [];

  for (var key in sprites) {
    pokemonSprites.push(sprites[key]);
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="card card-details p-0 col-lg-8" style={inline}>
        <div className="card-header d-flex justify-content-between">
          <span>
            <strong>{name ? capitalizeFirstLetter(name) : null}</strong>
          </span>
          <span>Height: {height}cm</span>
        </div>
        <div className="card-body row">
          <div className="col-md-3">
            <img className="profile-image" src={state.imgUrl} alt="poke" />
          </div>
          <div className="col-md-3">
            <h5>Abilities:</h5>
            <ul>
              {abilities
                ? abilities.map((el, idx) => (
                    <li key={idx}>{el.ability.name}</li>
                  ))
                : null}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Sprites:</h5>
            {pokemonSprites
              ? pokemonSprites.map((el, idx) => (
                  <img key={idx} className="pokemon-sprites" alt="" src={el} />
                ))
              : null}
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex flex-column">
            <h2 className="w-100 text-center pb-5">STATS</h2>
            {transformedStatsArray.map((el, idx) => (
              <div key={idx} className="d-flex pb-2">
                <div className="col-md-4 ">
                  <strong>{` ${el.statName}:`}</strong>
                </div>
                <div className="col-md-6 col-sm-4">
                  <div
                    className="stats-bar text-center"
                    style={{
                      width: `${el.points + 100}px`
                    }}
                  >
                    {el.points + " points"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;

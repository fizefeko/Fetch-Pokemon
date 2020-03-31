import React from "react";
import Pokemon from "../pokemon/pokemon.component";
const PokemonList = (props) => (
  <div className="card-list">
    <div className="d-flex flex-wrap justify-content-around">
      {props.pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} type={props.type} />
      ))}
    </div>
  </div>
);
export default PokemonList;

import React from "react";
import Pokemon from "../pokemon/pokemon.component";
const PokemonList = (props) => (
  <div className="card-list">
    <div className="row">
      {props.pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} type={props.type} />
      ))}
    </div>
  </div>
);
export default PokemonList;

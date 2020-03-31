import React from "react";
import Pokemon from "../pokemon/pokemon.component";
export const PokemonList = (props) => (
  <div className="card-list">
    <div className="row">
      {props.pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  </div>
);

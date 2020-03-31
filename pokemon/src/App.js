import React from "react";
import "./App.css";

import pokemonTypes from "./data/pokemon.types";

import PokemonList from "./components/pokemon-list/pokemon-list.component";
import Filter from "./components/filter/filter.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonTypes: pokemonTypes,
      pokemons: [],
      inputValue: "",
      type: "",
      typeDoesNotExist: false
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        return response.json();
      })
      .then((pokemons) => {
        this.setState({ pokemons: pokemons.results });
      });
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value.toLowerCase() });
  };
  changeFilter = () => {
    if (this.state.pokemonTypes.includes(this.state.inputValue)) {
      this.setState({ typeDoesNotExist: false });
      this.setState({ type: this.state.inputValue });
    } else {
      this.setState({ typeDoesNotExist: true });
    }
  };
  cleanFilter = () => {
    this.setState({ type: "" });
    this.setState({ inputValue: "" });
    this.setState({ typeDoesNotExist: false });
  };

  render() {
    // const filteredPokemons = this.state.pokemons.filter((pokemon) => {
    //   return pokemon.name.includes(this.state.letters);
    // });

    return (
      <div className="container">
        <Filter
          onInputChange={this.onInputChange}
          inputValue={this.state.inputValue}
          changeFilter={this.changeFilter}
          cleanFilter={this.cleanFilter}
          type={this.state.type}
          typeDoesNotExist={this.state.typeDoesNotExist}
        />
        <PokemonList pokemons={this.state.pokemons} type={this.state.type} />
      </div>
    );
  }
}

export default App;

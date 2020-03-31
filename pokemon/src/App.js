import React from "react";
import "./App.css";
import { PokemonList } from "./components/pokemon-list/pokemon-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      includes: "",
      desiredId: ""
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((pokemons) => {
        this.setState({ pokemons: pokemons.results });
      });
  }

  onSearchChange = (event) => {
    this.setState({ includes: event.target.value });
  };
  onIdChange = (event) => {
    this.setState({ desiredId: event.target.value });
  };
  render() {
    const { pokemons, includes, desiredId } = this.state;
    const filteredMonsters = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(includes.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="container">
        <div className="d-flex justify-content-center mb-5 ">
          <div className="row">
            <input
              className="form-control col-lg-3"
              placeholder="Includes"
              onChange={this.onSearchChange}
            ></input>
            <input
              className="form-control col-lg-3 ml-2"
              placeholder="Id"
              onChange={this.onIdChange}
            ></input>
            <button className="btn btn-outline-success ml-1">search</button>
          </div>
        </div>
        <PokemonList pokemons={filteredMonsters} />
      </div>
    );
  }
}

export default App;

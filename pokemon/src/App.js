import React from "react";
import "./App.css";
import PokemonList from "./components/pokemon-list/pokemon-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      type: ""
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

  onInputChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() {
    // const filteredPokemons = this.state.pokemons.filter((pokemon) => {
    //   return pokemon.name.includes(this.state.letters);
    // });

    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center mb-5 ">
          <div className="row mb-4">
            <input
              className="form-control col-lg-12"
              placeholder="Filter by type"
              onChange={this.onInputChange}
              type="text"
            ></input>
          </div>
        </div>
        <PokemonList pokemons={this.state.pokemons} type={this.state.type} />
      </div>
    );
  }
}

export default App;

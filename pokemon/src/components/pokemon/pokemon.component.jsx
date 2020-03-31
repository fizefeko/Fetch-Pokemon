import React from "react";
import "./pokemon.styles.css";
class Pokemon extends React.Component {
  state = {
    name: "",
    imageUrl: "",
    pokeIndex: ""
  };
  componentDidMount() {
    const { name, url } = this.props.pokemon;
    const pokeIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;
    this.setState({ name, imageUrl, pokeIndex });
  }
  render() {
    return (
      <div className="card w-15 m-2">
        <div className="card-header">
          <span>{this.state.pokeIndex}</span>
        </div>
        <div className="card-body mx-auto">
          <img
            src={this.state.imageUrl}
            alt=""
            className="card-ing-top rounded mx-auto"
          />
          <h6 className="card-title"> {this.state.name}</h6>
        </div>
      </div>
    );
  }
}

export default Pokemon;

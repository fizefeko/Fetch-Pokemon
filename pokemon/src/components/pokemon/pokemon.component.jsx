import React from "react";
import "./pokemon.styles.css";
import LoadingSpinner from "../loading-spinner/loading-spinner";
class Pokemon extends React.Component {
  state = {
    name: "",
    types: [],
    imageUrl: "",
    pokeIndex: "",
    imageLoading: true,
    imageError: false
  };
  componentDidMount() {
    let types = [];
    const { name, url } = this.props.pokemon;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.types.map((el) => {
          return types.push(el.type.name);
        });
      });

    this.setState({ types: types }, () => {
      // console.log(this.state.types);
      // console.log("---------------------------");
    });
    const pokeIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;
    this.setState({ name, types, imageUrl, pokeIndex });
  }
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    if (this.state.types.includes(this.props.type) || this.props.type === "") {
      return (
        <div className="card m-2">
          <div className="card-header d-flex justify-content-between">
            <span>{this.state.pokeIndex}</span>
            {this.state.imageError ? (
              <span className="badge badge-danger">To Many Requests</span>
            ) : null}
          </div>
          <div className="card-body mx-auto">
            {this.state.imageLoading ? <LoadingSpinner /> : null}
            <img
              src={this.state.imageUrl}
              alt=""
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ imageError: true })}
              className="card-ing-top rounded mx-auto w-100 m-0"
            />
            <h6 className="card-title text-center">
              {" "}
              {this.capitalizeFirstLetter(this.state.name)}
            </h6>
            <div className="text-center">
              <small>
                <strong>Types: </strong>
                {this.state.types.map((el) => el + ", ")}
              </small>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Pokemon;

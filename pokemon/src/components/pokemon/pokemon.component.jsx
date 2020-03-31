import React from "react";
import "./pokemon.styles.css";
class Pokemon extends React.Component {
  state = {
    name: "",
    types: [],
    imageUrl: "",
    pokeIndex: "",
    imageLoading: true
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
      console.log(this.state.types);
      console.log("---------------------------");
    });
    const pokeIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;
    this.setState({ name, types, imageUrl, pokeIndex });
  }
  render() {
    if (this.state.types.includes(this.props.type) || this.props.type === "") {
      return (
        <div className="card m-2" style={{ width: "15%", height: "220px" }}>
          <div className="card-header">
            <span>{this.state.pokeIndex}</span>
          </div>
          <div className="card-body mx-auto">
            {this.state.imageLoading ? (
              <div
                className="lds-default"
                style={{ width: "100px", height: "100px" }}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : null}
            <img
              src={this.state.imageUrl}
              alt=""
              onLoad={() => this.setState({ imageLoading: false })}
              className="card-ing-top rounded mx-auto w-100 m-0"
              style={{ width: "100px", height: "100px" }}
            />
            <h6 className="card-title text-center"> {this.state.name}</h6>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Pokemon;

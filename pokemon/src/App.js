import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Main from "./components/Pages/main/main.component";
import PokemonDetails from "./components/pokemon-details/pokemon-details.component";
import Header from "./components/Shared/header/header.component";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;

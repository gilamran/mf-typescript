import React from "react";
import ReactDOM from "react-dom";

import getList from "tsremote-mf/pokemonList";
import PokemonListView from "tsremote-mf/PokemonListView";
import "./index.css";

const App = () => (
  <div>
    <h1>TS-HOST</h1>
    <PokemonListView list={getList("Bulb")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

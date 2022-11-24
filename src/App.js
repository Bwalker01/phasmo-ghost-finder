import React, { Component } from "react";
import "./App.css";
import Headering from "./components/Header-Components.js";
import GhostTable from "./components/Table-Components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headering />
        <GhostTable />
      </div>
    );
  }
}

export default App;

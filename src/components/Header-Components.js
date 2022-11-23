import React, { Component } from "react";
import logo from "../phasmo-finder-logo.png";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null, loaded: false };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, loaded: true }));
  };

  render() {
    const { loading, msg, loaded } = this.state;

    return (
      <p>
        <button
          onClick={this.handleClick("fetch-full-table")}
          id="start-button">
          {loading ? "Loading..." : loaded ? "" : "START"}
        </button>
        <p id="start-button">{loaded ? "Loaded." : ""}</p>
        <br />
      </p>
    );
  }
}

class Headering extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="main-title">PHASMOFINDER</h1>
        <LambdaDemo />
      </header>
    );
  }
}

export default Headering;

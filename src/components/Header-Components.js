import React, { Component } from "react";
import logo from "../phasmo-finder-logo.png";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false }));
  };

  render() {
    const { loading } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")} id="start-button">
          {loading ? "Loading..." : "START"}
        </button>
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

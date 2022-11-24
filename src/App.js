import React, { Component } from "react";
import "./App.css";
import Headering from "./components/Header-Components";
import GhostTable from "./components/Ghost Table";
import EvidenceTable from "./components/Evidence Table";
import PhraseTable from "./components/Phrase Table";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: "ghosts" };
    this.updatePage = this.updatePage;
  }

  updatePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    let page;
    if (this.state.currentPage === "ghosts") {
      page = <GhostTable />;
    } else if (this.state.currentPage === "evidences") {
      page = <EvidenceTable />;
    } else if (this.state.currentPage === "phrases") {
      page = <PhraseTable />;
    } else {
      page = null;
    }
    return (
      <div className="App">
        <Headering updatePage={this.updatePage} />
        <div className="content">{page}</div>
      </div>
    );
  }
}

export default App;

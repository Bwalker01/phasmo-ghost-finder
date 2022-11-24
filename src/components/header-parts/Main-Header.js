import React, { Component } from "react";
class Headering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ghostIndex: true,
      evidenceIndex: false,
      phrasesIndex: false,
    };
  }

  renderGhostIndex = () => {
    this.setState({
      ghostIndex: true,
      evidenceIndex: false,
      phrasesIndex: false,
    });
    this.props.updatePage("ghosts");
  };

  renderEvidenceIndex = () => {
    this.setState({
      ghostIndex: false,
      evidenceIndex: true,
      phrasesIndex: false,
    });
    this.props.updatePage("evidences");
  };

  renderPhrases = () => {
    this.setState({
      ghostIndex: false,
      evidenceIndex: false,
      phrasesIndex: true,
    });
    this.props.updatePage("phrases");
  };

  render() {
    return (
      <div class="header">
        <button class="logo">Phasmofinder</button>
        <div class="heading-center"></div>
        <div class="header-right">
          <button
            onClick={this.renderGhostIndex}
            className={this.state.ghostIndex ? "active" : "inactive"}
            id="ghosts-button">
            GHOSTS
          </button>
          <button
            onClick={this.renderEvidenceIndex}
            className={this.state.evidenceIndex ? "active" : "inactive"}
            id="evidences-button">
            EVIDENCES
          </button>
          <button
            onClick={this.renderPhrases}
            className={this.state.phrasesIndex ? "active" : "inactive"}
            id="phrases-button">
            PHRASES
          </button>
          <a href="https://phasmophobia.fandom.com/wiki/Main_Page">
            <button id="wiki-button">WIKI</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Headering;

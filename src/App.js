/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
// const fetch = require('node-fetch');
import NavBar from './NavBar/NavBar';
import SeriesTitle from './SeriesTitle/SeriesTitle';
import DisplayEpisode from './Episode/DisplayEpisode';

class App extends Component {
  constructor(props) {
    super(props);
    this.seriesName = 'Friends';
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SeriesTitle seriesName={this.seriesName} />
        <DisplayEpisode />
      </div>
    );
  }
}

export default App;

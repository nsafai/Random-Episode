/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
// const fetch = require('node-fetch');
import NavBar from './NavBar/NavBar';
import DisplayEpisode from './Episode/DisplayEpisode';

const seriesName = 'Friends';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <DisplayEpisode name={seriesName} />
      </div>
    );
  }
}

export default App;

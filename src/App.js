/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import DisplayEpisode from './Episode/DisplayEpisode';

class App extends Component {
  render() {
    const seriesName = 'Friends';
    return (
      <div className="App">
        <DisplayEpisode name={seriesName} />
      </div>
    );
  }
}

export default App;

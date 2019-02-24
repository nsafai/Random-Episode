/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import DisplayEpisode from './Episode/DisplayEpisode';

// const omdb = require('omdb');

const seriesName = 'Friends';
// const OMDB_API_KEY = process.env.REACT_APP_OMDB_KEY; // Your API key.
const MOVIEDB_API_KEY = process.env.REACT_APP_MOVIEDB_KEY;
console.log(MOVIEDB_API_KEY);

const seasonQuery = `https://api.themoviedb.org/3/tv/1668?api_key=${MOVIEDB_API_KEY}&language=en-US`;
const episodeQuery = `https://api.themoviedb.org/3/tv/1668/season/1/episode/1?api_key=${MOVIEDB_API_KEY}&language=en-US`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seriesData: null, // used to hold data from OMDB API
    };
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

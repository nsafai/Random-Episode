/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import DisplayEpisode from './Components/Episode/DisplayEpisode';
import SeriesTile from './Components/Series/SeriesTile/SeriesTile';
import seriesList from './seriesList';

class App extends Component {
  constructor(props) {
    super(props);
    // find baseNetflixId by finding your show in the URL and getting the digits after /watch/xxxxx
    // find movieDbId here: https://developers.themoviedb.org/3/search/search-tv-shows

    this.series = seriesList;
  }

  render() {
    const seriesTiles = this.series.map(function (show, i) {
      return (
        <SeriesTile index={i} url={`/${show.url}`} name={show.name} imgUrl={show.imgUrl} />
      )   
    });

    const randomEpisode = this.series.map(function (show, i) {
      return (
        <Route path={`/${show.url}`} key={`route-${i}`} render={() => (
          <DisplayEpisode 
            seriesName={show.name}
            baseNetflixId={show.baseNetflixId}
            movieDbId={show.movieDbId}
            key={`show-${i}`}
          />
        )}/>
      )
    })

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" key="home" render={() => (
            <div>
              <h1 className="page-title">Random Episode</h1>
              <h2 className="page-subtitle">Choose a show:</h2>
              <div className="series-tiles">
                {seriesTiles}
              </div>
            </div>
          )}/>
          {randomEpisode} {/* contains its own Routes */}
        </div>
      </Router>
    );
  }
}

export default App;

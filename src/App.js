/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import DisplayEpisode from './Components/Episode/DisplayEpisode';
import SeriesTile from './Components/SeriesTile/SeriesTile';
import seriesList from './seriesList';

class App extends Component {
  constructor(props) {
    super(props);
    // find baseNetflixId by finding your show in the URL and getting the digits after /watch/xxxxx
    // find movieDbId here: https://developers.themoviedb.org/3/search/search-tv-shows

    this.series = seriesList;
  }

  render() {
    const seriesLinks = this.series.map(function (show, i) {
      return (
        <SeriesTile key={`link-${i}`} url={`/${show.url}`} name={show.name} />
        // <SeriesTile key={`link-${i}`} {...show} />

        // <Link to={`/${show.url}`} key={`link-${i}`}>
        //   <button>{show.name}</button>
        // </Link>
      )   
    });

    const seriesRoutes = this.series.map(function (show, i) {
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
          <Link to="/" key='home'>
            <button>All Series</button>
          </Link>
          {seriesLinks}
          {seriesRoutes}
        </div>
      </Router>
    );
  }
}

export default App;

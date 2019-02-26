/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import DisplayEpisode from './Episode/DisplayEpisode';

class App extends Component {
  constructor(props) {
    super(props);
    // find baseNetflixId by finding your show in the URL and getting the digits after /watch/xxxxx
    // find movieDbId here: https://developers.themoviedb.org/3/search/search-tv-shows
    this.series = [
      {
        name: 'Friends',
        url: 'friends',
        baseNetflixId: '70273996',
        movieDbId: '1668',
      }, 
      {
        name: 'The Office',
        url: 'the-office',
        baseNetflixId: '70069628',
        movieDbId: '2316',
      },
    ];
  }

  find(url) {
    this.series.find(p => p.url == url);
  }

  render() {
    const seriesLinks = this.series.map(function (show, i) {
      return (
        <Link to={`/${show.url}`} key={`link-${i}`}>
          <button>{show.name}</button>
        </Link>
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

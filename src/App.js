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
    this.series = [
      {
        name: 'Friends',
        url: 'friends',
      }, 
      {
        name: 'The Office',
        url: 'the-office',
      },
    ];
  }

  render() {
    const seriesTiles = this.series.map(function (d, idx) {
      return (
        <Link to={`/${d.url}`} key={idx}>
          <button>{d.name}</button>
        </Link>
      )   
    });

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Link to="/" key='home'>
            <button>All Series</button>
          </Link>
          {seriesTiles}
          
          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/friends" render={() => (
            <DisplayEpisode seriesName='Friends' baseNetflixID='70273996' />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;

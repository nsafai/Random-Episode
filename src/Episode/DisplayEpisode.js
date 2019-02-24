/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './DisplayEpisode.css';
import EpisodeImage from './EpisodeImage/EpisodeImage';
import SeriesTitle from './SeriesTitle/SeriesTitle';
import EpisodeDetails from './EpisodeDetails/EpisodeDetails';
import RandomEpNumGenerator from './RandomEpGenerator/RandomEpGenerator';
import Button from '../Button/Button';

// hard-coded to Friends for MVP
const baseNetflixID = 70273997;
const totalNumEpisodes = 236;

// generate random episode number
const randomEpNum = RandomEpNumGenerator(baseNetflixID, totalNumEpisodes);
const netflixUrl = 'https://www.netflix.com/watch/';
const randomEpUrl = netflixUrl.concat(randomEpNum);

// MOVIE_DB_SETUP
const MOVIEDB_API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

class DisplayEpisode extends Component {
  constructor(props) {
    super(props);
    this.name = 'Friends';
    this.epName = 'The One Where Ross Hugs Rachel';
    this.epSummary = `Monica and Chandler try to tell Rachel and Joey that they're moving in together. 
    Phoebe thinks that Ross didn't get the annulment because he still loves Rachel.`;
    // this.seasonQuery = `https://api.themoviedb.org/3/tv/1668?api_key=${MOVIEDB_API_KEY}&language=en-US`;
    // this.episodeQuery = `https://api.themoviedb.org/3/tv/1668/season/1/episode/1?api_key=${MOVIEDB_API_KEY}&language=en-US`;

    this.state = {
      seriesData: {}, // used to hold data from OMDB API
    };
  }

  componentWillMount() {
    fetch(`https://api.themoviedb.org/3/tv/1668?api_key=${MOVIEDB_API_KEY}&language=en-US`)
      .then(res => res.json())
      .then((json) => {
        this.setState({ seriesData: json });
        console.log(json);
        // return seriesData;
      })
      .catch((err) => {
        this.setState({ seriesData: {} });
        console.log('-- Error fetching --');
        console.log(err);
      });
  }

  render() {
    return (
      <div id="episode-container">
        <div>
          <SeriesTitle name={this.name} />
          <p>{this.state.seriesData.number_of_episodes}</p>
        </div>
        <div>
          {/* <p className="helper-text">Your random episode is:</p> */}
          <EpisodeImage imgUrl="https://m.media-amazon.com/images/M/MV5BMjAzMDI0MjY4MV5BMl5BanBnXkFtZTgwNTg2MzE1NTE@._V1_.jpg" />
          <EpisodeDetails epName={this.epName} epSummary={this.epSummary} />
        </div>
        <div className="buttons-bar">
          <Button url={randomEpUrl} text="Watch on Netflix" color="#c52525" />
          <Button url="/" text="Another Episode" />
        </div>
      </div>
    );
  }
}

export default DisplayEpisode;

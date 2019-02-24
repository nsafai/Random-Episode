/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './DisplayEpisode.css';
import EpisodeImage from './EpisodeImage/EpisodeImage';
import EpisodeDetails from './EpisodeDetails/EpisodeDetails';
import RandomEpNumGenerator, { RandomNetflixIdGenerator } from './RandomEpGenerator/RandomEpGenerator';
import Button from '../Button/Button';

// MOVIE_DB_SETUP
const MOVIEDB_API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

class DisplayEpisode extends Component {
  constructor(props) {
    super(props);
    this.movieDbId = 1668;
    this.seriesQuery = `https://api.themoviedb.org/3/tv/${this.movieDbId}?api_key=${MOVIEDB_API_KEY}&language=en-US`;

    this.state = {
      // used to hold data from OMDB API
      numEpisodes: [],
      seasons: [],
      // episodeData: [],
    };
  }

  componentWillMount() {
    fetch(this.seriesQuery)
      .then(res => res.json())
      .then((json) => {
        const epsPerSeason = [];
        const numEpisodes = json.number_of_episodes;

        for (let i = 1; i < json.seasons.length; i += 1) {
          epsPerSeason.push(json.seasons[i].episode_count);
        }

        this.setState({
          numEpisodes,
          epsPerSeason,
        });
        console.log(json);
      })
      .catch((err) => {
        this.setState({ seriesData: [] });
        console.log('-- Error fetching --');
        console.log(err);
      });
  }

  render() {
    const { numEpisodes, epsPerSeason } = this.state;

    // baseNetflixId is hard-coded to Friends for MVP
    const baseNetflixID = 70273996;

    // generate random episode number
    const randomEpNum = RandomEpNumGenerator(numEpisodes);
    const randomNetflixId = RandomNetflixIdGenerator(baseNetflixID, randomEpNum);
    const netflixUrl = 'https://www.netflix.com/watch/';
    const randomEpUrl = netflixUrl.concat(randomNetflixId);

    // Figure out season and episode number
    let epAccumulator = randomEpNum;
    // console.log(epsPerSeason);
    if (epsPerSeason !== undefined) {
      for (let s = 0; s < epsPerSeason.length; s += 1) {
        console.log(epsPerSeason[s]);
        console.log(epAccumulator);
        for (let e = 0; e < epsPerSeason[s]; e += 1) {
          console.log(epAccumulator);
          epAccumulator -= 1;
          if (epAccumulator === 0) {
            console.log('season ', s + 1, ' episode ', e + 1);
            break;
          }
        }
      }
    }
    // TODO: change with data fetched from specific episode
    const epName = 'The One Where Ross Hugs Rachel';
    const epSummary = `Monica and Chandler try to tell Rachel and Joey that they're moving in together. 
    Phoebe thinks that Ross didn't get the annulment because he still loves Rachel.`;

    // render components
    return (
      <div id="episode-container">
        <div>
          <EpisodeImage imgUrl="https://m.media-amazon.com/images/M/MV5BMjAzMDI0MjY4MV5BMl5BanBnXkFtZTgwNTg2MzE1NTE@._V1_.jpg" />
          <EpisodeDetails epName={epName} epSummary={epSummary} />
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

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
    // https://developers.themoviedb.org/3/find/find-by-id
    this.seriesQuery = `https://api.themoviedb.org/3/tv/${this.movieDbId}?api_key=${MOVIEDB_API_KEY}&language=en-US`;

    this.state = {
      epName: '',
      epSummary: '',
      randomEpUrl: '',
    };
  }

  componentWillMount() {
    fetch(this.seriesQuery)
      .then(res => res.json())
      .then((seriesJson) => {
        // baseNetflixId is hard-coded to Friends for MVP
        const baseNetflixID = 70273996;
        const numEpisodes = seriesJson.number_of_episodes;

        // generate random episode number
        const randomEpNum = RandomEpNumGenerator(numEpisodes);
        const randomNetflixId = RandomNetflixIdGenerator(baseNetflixID, randomEpNum);
        const netflixUrl = 'https://www.netflix.com/watch/';
        const randomEpUrl = netflixUrl.concat(randomNetflixId);

        // Figure out season and episode number
        const epsPerSeason = [];
        for (let i = 1; i < seriesJson.seasons.length; i += 1) {
          epsPerSeason.push(seriesJson.seasons[i].episode_count);
        }
        let epAccumulator = randomEpNum;
        if (epsPerSeason !== undefined) {
          for (let s = 0; s < epsPerSeason.length; s += 1) {
            for (let e = 0; e < epsPerSeason[s]; e += 1) {
              epAccumulator -= 1;
              if (epAccumulator === 0) {
                // found correct season and episode
                console.log('Season: ', s + 1, ' Episode ', e + 1);
                const season = s + 1;
                const episode = e + 1;
                // TODO: stop decrementing epAcculumator
                // TODO: change with data fetched from specific episode
                // https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
                const epQuery = `https://api.themoviedb.org/3/tv/1668/season/${season}/episode/${episode}?api_key=${MOVIEDB_API_KEY}&language=en-US`
                fetch(epQuery)
                  .then(res => res.json())
                  .then((epData) => {
                    console.log(epData);
                  });
                const epName = 'The One Where Ross Hugs Rachel';
                const epSummary = `Monica and Chandler try to tell Rachel and Joey that they're moving in together. 
                Phoebe thinks that Ross didn't get the annulment because he still loves Rachel.`;
                // add episode data to component state
                this.setState({
                  epName,
                  epSummary,
                  randomEpUrl,
                });
                break;
              }
            }
          }
        }

        console.log(json);
      })
      .catch((err) => {
        this.setState({ });
        console.log('-- Error fetching --');
        console.log(err);
      });
  }

  render() {
    const { epName, epSummary, randomEpUrl } = this.state;

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

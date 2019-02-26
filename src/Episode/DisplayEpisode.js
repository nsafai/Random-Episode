/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './DisplayEpisode.css';
import EpisodeImage from './EpisodeImage/EpisodeImage';
import EpisodeDetails from './EpisodeDetails/EpisodeDetails';
import GenerateRandomEpNum, { GenerateRandomNetflixId } from './RandomEpGenerator/RandomEpGenerator';
import Button from '../Button/Button';

// MOVIE_DB_SETUP
const MOVIEDB_API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

class DisplayEpisode extends Component {
  constructor(props) {
    super(props);

    // series specific variables 
    this.baseNetflixID = 70273996; // hard-coded to Friends for MVP
    this.movieDbId = 1668; // hard-coded to Friends for MVP
    // seriesQuery syntax comes from https://developers.themoviedb.org/3/find/find-by-id
    this.seriesQuery = `https://api.themoviedb.org/3/tv/${this.movieDbId}?api_key=${MOVIEDB_API_KEY}&language=en-US`;
    this.state = {
      epName: '',
      epSummary: '',
      epImgUrl: '',
      seasAndEp: '',
      randomEpUrl: '',
    };
    this.getRandomEpisode(this.seriesQuery); // get random episode once on load
  }

  getEpUrl(randomEpNum) {
    // generate random episode number
    const randomNetflixId = GenerateRandomNetflixId(this.baseNetflixID, randomEpNum);
    const netflixUrl = 'https://www.netflix.com/watch/';
    const randomEpUrl = netflixUrl.concat(randomNetflixId);
    return randomEpUrl;
  }

  getRandomEpisode(seriesQuery) {
    // first need to fetch some data about series like total amount of episodes.
    fetch(seriesQuery)
      .then(res => res.json())
      .then((seriesJson) => {
        console.log('HERE', seriesJson);
        const totalNumEpisodes = seriesJson.number_of_episodes;
        const randomEpNum = GenerateRandomEpNum(totalNumEpisodes);
        const randomEpUrl = this.getEpUrl(randomEpNum);
        // Figure out season and episode number
        const epsPerSeason = [];
        for (let i = 1; i < seriesJson.seasons.length; i += 1) {
          epsPerSeason.push(seriesJson.seasons[i].episode_count);
        }
        let epAccumulator = randomEpNum;
        if (epsPerSeason !== undefined) {
          for (let s = 1; s <= epsPerSeason.length; s += 1) {
            for (let e = 1; e <= epsPerSeason[s]; e += 1) {
              epAccumulator -= 1; // TODO: stop decrementing epAcculumator after reaches 0
              console.log(epAccumulator);
              if (epAccumulator === 0) {
                // found correct season and episode, save that into a seriesData object along with url to episode
                let seriesData = { season: s, episode: e, randomEpUrl }
                console.log('series data is: ', seriesData);
                // epQuery syntax comes from https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
                const epQuery = `https://api.themoviedb.org/3/tv/1668/season/${s}/episode/${e}?api_key=${MOVIEDB_API_KEY}&language=en-US`;
                // now that we have a random episode, get episode metadata, like episode name, image and summary
                this.fetchEpisodeData(epQuery, seriesData)();
              }
            }
          }
        }
      })
      .catch((errFetchingSeriesData) => {
        this.setState({ });
        console.log('-- Error fetching --', errFetchingSeriesData);
      });
  };

  fetchEpisodeData(epQuery, seriesData) {
    const {season, episode, randomEpUrl} = seriesData;
    fetch(epQuery)
      .then(res => res.json())
      .then((epData) => {
        const epName = epData.name;
        const epSummary = epData.overview;
        const epImgUrl = `https://image.tmdb.org/t/p/original/${epData.still_path}`;

        // got series data and episode data, add those to component state
        this.setState({
          epName,
          epSummary,
          epImgUrl,
          seasAndEp: `Season ${season}, Episode ${episode}`,
          randomEpUrl,
        });
      })
      .catch((errFetchingEpData) => {
        this.setState({ });
        console.log('-- Error fetching --', errFetchingEpData);
      });
  }

  componentWillMount() {
  }

  render() {
    const { epName, epSummary, epImgUrl, seasAndEp, randomEpUrl } = this.state;

    // render components
    return (
      <div id="episode-container">
        <div>
          <EpisodeImage imgUrl={epImgUrl} />
          <EpisodeDetails epName={epName} seasAndEp={seasAndEp} epSummary={epSummary} />
        </div>
        <div className="buttons-bar">
          <Button url={randomEpUrl} text="Watch on Netflix" color="#c52525" />
          <Button onClickFunc={() => this.getRandomEpisode(this.seriesQuery)} text="Another Episode" />
        </div>
      </div>
    );
  }
}

export default DisplayEpisode;

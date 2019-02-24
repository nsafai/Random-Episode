/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
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

const DisplayEpisode = ({
  name,
  epName = 'The one where',
  epSummary = 'this is the one where joey and rachel bla bla bla',
}) => (
  <div id="episode-container">
    <SeriesTitle name={name} />
    <div>
      <p className="helper-text">Your random episode is:</p>
      <EpisodeImage imgUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/22/12/friends.jpg" />
      <EpisodeDetails epName={epName} epSummary={epSummary} />
    </div>
    <div className="buttons-bar">
      <Button url={randomEpUrl} text="Watch on Netflix" color="#c52525" />
      <Button url="/" text="Another Episode" />
    </div>
  </div>
);

export default DisplayEpisode;

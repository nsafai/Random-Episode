/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './DisplayEpisode.css';
import EpisodeImage from './EpisodeImage/EpisodeImage';
import SeriesTitle from './SeriesTitle/SeriesTitle';
import EpisodeDetails from './EpisodeDetails/EpisodeDetails';
import Button from '../Button/Button';

const DisplayEpisode = ({
  name,
  epName = 'the one where',
  epSummary = 'this is the one where joey and rachel bla bla bla',
}) => (
  <div id="episode-container">
    <SeriesTitle name={name} />
    <div>
      <EpisodeImage imgUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/22/12/friends.jpg" />
      <EpisodeDetails epName={epName} epSummary={epSummary} />
    </div>
    <div className="buttons-bar">
      <Button url="http://netflix.com" text="Watch on Netflix" color="#c52525" />
      <Button url="http://netflix.com" text="Random Episode" />
    </div>
  </div>
);

export default DisplayEpisode;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './DisplayEpisode.css';
import EpisodeImage from './EpisodeImage/EpisodeImage';
import Button from '../Button/Button';

const DisplayEpisode = ({ name }) => (
  <div id="episode-container">
    <h1 className="episode-title">{name}</h1>
    <EpisodeImage imgUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/22/12/friends.jpg" />
    <div className="buttons-bar">
      <Button url="http://netflix.com" text="Watch on Netflix" color="#c52525" />
      <Button url="http://netflix.com" text="Random Episode" />
    </div>
  </div>
);

export default DisplayEpisode;

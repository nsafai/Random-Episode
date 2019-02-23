/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './EpisodeImage.css';

const EpisodeImage = ({ imgUrl }) => (
  <img className="episode-image" src={imgUrl} alt="episode preview image" />
);

export default EpisodeImage;

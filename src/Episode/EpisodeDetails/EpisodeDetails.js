/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './EpisodeDetails.css';

const EpisodeDetails = ({
  epName,
  epSummary,
}) => (
  <div className="epDetails">
    <h1 className="epName">{epName}</h1>
    <p className="epSummary">{epSummary}</p>
  </div>
);

export default EpisodeDetails;

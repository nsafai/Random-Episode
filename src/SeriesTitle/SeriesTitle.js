/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './SeriesTitle.css';

const SeriesTitle = ({ seriesName }) => (
  <div>
    <h1 className="page-title">Random Episode</h1>
    <h2 className="page-subtitle">{seriesName}</h2>
  </div>
);

export default SeriesTitle;

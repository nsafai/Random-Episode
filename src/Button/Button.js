/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

const Button = ({ url = 'http://netflix.com', text = 'button', color = '#054545' }) => (
  <a className="button" href={url} style={{ backgroundColor: color }} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Button;

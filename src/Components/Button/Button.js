/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

const Button = ({ url, onClickFunc, text = 'button', color = '#054545' }) => (
  <a className="button" href={url} style={{ backgroundColor: color }} onClick={onClickFunc} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Button;

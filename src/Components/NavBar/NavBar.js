/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li style={{ float: 'left' }}>
        <a className="brand" href="/">
          <img className="logo" src="./img/RandomLogo.png" alt="weblogo" />
          Random
          <br />
          Episode
        </a>
      </li>
      <li style={{ float: 'right' }}>
        <Link to="/" key='home'>
          All Shows
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <ul>
      <li className="brand" style={{ float: 'left' }}>
        <img className="logo" src="./img/RandomLogo.png" alt="weblogo" />
        <a href="/">
          Random
          <br />
          Episode
        </a>
      </li>
      {/* <li><a href="">About</a></li> */}
    </ul>
  </nav>
);

export default NavBar;

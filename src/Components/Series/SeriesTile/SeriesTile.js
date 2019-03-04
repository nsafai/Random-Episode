import React from 'react'
import { Link } from 'react-router-dom';
import './SeriesTile.css';

const SeriesTile = ({ url, name, imgUrl, index }) => {
  console.log(imgUrl);
  return (
    <Link to={`${url}`} key={`link-${index}`} style={{ textDecoration: 'none' }}>
        <div className="series-tile">
          <img className="series-tile-image" src={imgUrl} alt="series pic preview" />
          <h2 className="series-tile-name">{name}</h2>
        </div>
    </Link>
  )
}

export default SeriesTile;
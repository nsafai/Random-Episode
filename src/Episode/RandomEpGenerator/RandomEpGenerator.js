/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
// import React from 'react';

const RandomEpNumGenerator = (baseNetflixID, totalNumEpisodes) => {
  // generates a random number between 0 and (totalNumEpisodes - 1) inclusive of bounds.
  const randomOffset = Math.floor(Math.random() * totalNumEpisodes);
  // grab base URL of netflix
  const randomEpNum = parseInt(baseNetflixID, 10) + randomOffset;
  return randomEpNum;
};

export default RandomEpNumGenerator;

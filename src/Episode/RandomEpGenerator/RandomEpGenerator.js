/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
// import React from 'react';

const RandomEpNumGenerator = (totalNumEpisodes) => {
  // generates a random number between 0 and (totalNumEpisodes - 1) inclusive of bounds.
  const randomEpNum = Math.floor(Math.random() * totalNumEpisodes);
  // grab base URL of netflix
  return randomEpNum;
};

const RandomNetflixIdGenerator = (baseNetflixID, randomEpNum) => {
  const randomNetflixId = parseInt(baseNetflixID, 10) + randomEpNum;

  return randomNetflixId;
};

export { RandomNetflixIdGenerator };
export default RandomEpNumGenerator;

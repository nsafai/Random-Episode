/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
// import React from 'react';

const GenerateRandomEpNum = (totalNumEpisodes) => {
  // generates a random number between 0 and (totalNumEpisodes - 1) inclusive of bounds.
  const randomEpNum = Math.floor(Math.random() * totalNumEpisodes);
  // grab base URL of netflix
  return randomEpNum;
};

const GenerateRandomNetflixId = (baseNetflixID, randomEpNum) => {
  console.log('base netflix id: ', baseNetflixID);
  const randomNetflixId = parseInt(baseNetflixID, 10) + randomEpNum;
  console.log('generated netflix id: ', randomNetflixId);

  return randomNetflixId;
};

export { GenerateRandomNetflixId };
export default GenerateRandomEpNum;

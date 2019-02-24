/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
// import React from 'react';

export const RandomEpGenerator = (seriesBaseURLNum) => {
  const netflixUrl = 'https://www.netflix.com/watch/';
  const randomEpNum = parseInt(seriesBaseURLNum, 10) + 1;
  const randomEpUrl = netflixUrl.concat(randomEpNum);
  // const numEpsodes = 230;

  return randomEpUrl;
};

export default RandomEpGenerator;

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  {
    reactStrictMode: true,
  },
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  
]);

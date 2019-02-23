const SWplugin = require("sw-precache-webpack-plugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWplugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: `networkFirst`,
            urlPattern: /^https?.*/
          }
        ]
      })
    );
    return config;
  },
  target: "serverless"
};

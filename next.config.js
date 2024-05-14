const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/scss")],
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    if (!dev && !isServer) {
      // Set properties only if commons already exists
      // if (config.optimization.splitChunks.cacheGroups.commons) {
      //   config.optimization.splitChunks.cacheGroups.commons.minSize = 0;
      //   config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
      // }
    }
    return config;
  },
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/scss")],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       destination: "https://www.universeescort.com",
  //       permanent: true,
  //       basePath: false,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

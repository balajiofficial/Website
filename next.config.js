const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],
  images: {
    domains: ["github.com"],
  },
  reactStrictMode: true,
});

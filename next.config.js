/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Experimental appDir is disabled; this project uses the pages directory
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;

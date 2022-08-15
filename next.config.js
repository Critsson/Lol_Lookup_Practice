/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RIOT_API: process.env.RIOT_API,
  }
}

module.exports = nextConfig

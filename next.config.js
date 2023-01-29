/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  EDGE_CONFIG: process.env.EDGE_CONFIG,
}

module.exports = nextConfig

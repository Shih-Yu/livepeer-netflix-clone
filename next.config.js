/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tmdb.org', 'themoviedb.org'],
    loader: 'custom',
    path: '/',
  },
};

module.exports = nextConfig

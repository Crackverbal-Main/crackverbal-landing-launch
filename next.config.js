/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/landing-launch-page',
  assetPrefix: '/landing-launch-page',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['crackverbal-landing-launch.vercel.app', 'crackverbal.com'],
  },
  // Ensure static assets are handled correctly
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
  webpack: (config) => {
    config.output.publicPath = `/landing-launch-page/_next/`;
    return config;
  },
}

module.exports = nextConfig

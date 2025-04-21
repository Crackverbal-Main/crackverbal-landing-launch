/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/landing-launch-page',
  assetPrefix: '',  // Changed this to empty
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['crackverbal-landing-launch.vercel.app', 'crackverbal.com'],
  },
  // Remove the webpack config as it might be interfering
  async rewrites() {
    return [
      {
        source: '/landing-launch-page/:path*',
        destination: '/:path*',
      },
    ];
  },
}

module.exports = nextConfig

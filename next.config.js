/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/IQOSILUMAi',
  assetPrefix: '/IQOSILUMAi/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'visitfoods.github.io',
        pathname: '/IQOSILUMAi/**'
      }
    ],
    path: '/IQOSILUMAi/_next/image'
  },
  trailingSlash: true
}

module.exports = nextConfig 
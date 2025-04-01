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
        hostname: 'iqosilumai.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'visitfoods.github.io',
        pathname: '/IQOSILUMAi/**'
      }
    ]
  },
  trailingSlash: true
}

module.exports = nextConfig 
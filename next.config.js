/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/IQOSILUMAi',
  assetPrefix: '/IQOSILUMAi/',
  images: {
    unoptimized: true,
    domains: ['visitfoods.github.io']
  },
  trailingSlash: true
}

module.exports = nextConfig 
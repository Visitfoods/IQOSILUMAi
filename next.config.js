/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/IQOSILUMAi' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/IQOSILUMAi/' : '',
  images: {
    unoptimized: true,
    domains: ['visitfoods.github.io']
  },
  trailingSlash: true
}

module.exports = nextConfig 
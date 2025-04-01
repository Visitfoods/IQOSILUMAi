/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/IQOSILUMAi',
  assetPrefix: '/IQOSILUMAi/',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig 
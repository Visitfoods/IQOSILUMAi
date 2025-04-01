/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['iqosilumai.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iqosilumai.com',
        pathname: '/**'
      }
    ]
  },
  trailingSlash: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 
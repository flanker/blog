/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  experimental: {
    // app/global-not-found.tsx: needed because each language has its own root layout
    globalNotFound: true,
  },
}

module.exports = nextConfig
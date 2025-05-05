import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/portfolio-blog' : '',
  assetPrefix: isProd ? '/portfolio-blog/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

const path = require('path')

/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  // Enable static export
  output: 'export',
  // Serve under a sub-path when deploying to GitHub Pages project site
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // For static export, disable image optimization
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ensure proper module resolution for @ alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/stores': path.resolve(__dirname, 'stores'),
      '@/types': path.resolve(__dirname, 'types'),
      '@/hooks': path.resolve(__dirname, 'hooks'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/app': path.resolve(__dirname, 'app'),
      '@/config': path.resolve(__dirname, 'config'),
      '@/content': path.resolve(__dirname, 'content'),
    }
    
    // Ensure proper module resolution
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
    
    return config
  },
  // No rewrites/redirects in static export
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 
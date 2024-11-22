import { NextConfig } from 'next';
import { Configuration } from 'webpack';

// Define the configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'coin-images.coingecko.com', 'cdn2.thecatapi.com', 'cdn2.thedogapi.com'],
  },
  webpack: (config: Configuration, { isServer }: { isServer: boolean }): Configuration => {
    // Add custom webpack config changes
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};

export default nextConfig;

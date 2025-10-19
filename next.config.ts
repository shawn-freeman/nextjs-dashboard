import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // replaces experimental.ppr
    cacheComponents: true,
  }
};

export default nextConfig;

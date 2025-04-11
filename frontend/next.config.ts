import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/uploads',
        destination: 'http://localhost:4000/uploads',
      },
      {
        source: '/api/products',
        destination: 'http://localhost:4000/products',
      },
    ];
  },
};

export default nextConfig;

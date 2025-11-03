import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/awise-network',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

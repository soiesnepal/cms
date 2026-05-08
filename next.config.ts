<<<<<<< HEAD
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Add other config options here if needed
};

export default nextConfig;
=======
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
>>>>>>> d83fe136f157c2d4a2a11c9768d6b3470d4056be

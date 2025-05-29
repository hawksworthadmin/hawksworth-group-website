import path from "path";

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/common": path.resolve(__dirname, "common"),
      "@/utils": path.resolve(__dirname, "utils"),
      "@/hooks": path.resolve(__dirname, "hooks"),
      "@/data": path.resolve(__dirname, "data"),
    };
    return config;
  },
};

export default nextConfig;

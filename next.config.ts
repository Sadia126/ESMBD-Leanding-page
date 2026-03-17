import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // এটি আনস্প্ল্যাশের সব ছবি অ্যালাউ করবে
      },
    ],
  },
};

export default nextConfig;
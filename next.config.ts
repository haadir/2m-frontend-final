import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'avatars.steamstatic.com', // Steam avatar CDN
      'steamcdn-a.akamaihd.net', // Alternate Steam CDN
      'avatars.cloudflare.steamstatic.com', // Cloudflare variant
      'community.cloudflare.steamstatic.com', // Steam inventory images
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/medusa",
        destination: "/headless",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    }
  },
};

export default nextConfig;

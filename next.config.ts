import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ This skips ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    domains: ["localhost"],
  },
  // Disable devtools in development to reduce errors
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;

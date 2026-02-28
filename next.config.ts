import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ship-the-thing",
  assetPrefix: "/ship-the-thing/",
};

export default nextConfig;

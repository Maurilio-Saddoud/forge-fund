import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/ship-the-thing" : "",
  assetPrefix: isProd ? "/ship-the-thing/" : "",
};

export default nextConfig;

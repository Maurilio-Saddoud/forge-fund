import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "ship-the-thing";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions && repo ? `/${repo}` : "",
  assetPrefix: isGithubActions && repo ? `/${repo}/` : "",
};

export default nextConfig;

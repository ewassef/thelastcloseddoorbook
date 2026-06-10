import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-build",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

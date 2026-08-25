import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages serves the contents of `out/`.
  // Leave `distDir` at its default: Next 16 writes the export into it, so a
  // custom value silently moves the deploy artifact out from under the workflow.
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimizer; ship the files as authored.
    unoptimized: true,
  },
};

export default nextConfig;

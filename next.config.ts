import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: { unoptimized: true },
  output: "export",
  trailingSlash: true,
  generateEtags: false,
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

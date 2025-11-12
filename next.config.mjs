/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a static bundle that GitHub Pages can host directly.
  output: "export",
  // Allow overriding base path/asset prefix when the repo is served from a subdirectory.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? ""
};

export default nextConfig;

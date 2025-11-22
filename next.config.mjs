/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/reinforcelab";

const nextConfig = {
  // Emit a static bundle that GitHub Pages can host directly.
  output: "export",
  // Ensure static assets load when hosted from a subdirectory (e.g., GitHub Pages).
  basePath,
  assetPrefix: basePath
};

export default nextConfig;

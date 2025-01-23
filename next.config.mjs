/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Ensure URLs end with a trailing slash
};

export default nextConfig;

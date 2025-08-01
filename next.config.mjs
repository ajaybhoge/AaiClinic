/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Optional: Adds trailing slash to URLs for static hosting compatibility
  reactStrictMode: true, // Optional: Enables React's strict mode
}

export default {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}
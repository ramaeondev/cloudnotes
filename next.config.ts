/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable API routes
  experimental: {
    appDir: true,
  },
  // Optional: Disable API routes warning
  api: {
    externalResolver: true,
  },
}

module.exports = nextConfig
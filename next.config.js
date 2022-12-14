/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc", "images.pexels.com"],
  },
};

module.exports = nextConfig;

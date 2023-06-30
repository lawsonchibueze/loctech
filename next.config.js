/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["loctech-web-app-sandy.vercel.app", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;

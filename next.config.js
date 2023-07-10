/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["loctech-web-app-sandy.vercel.app", "res.cloudinary.com", "loctech-web-app.vercel.app", "a6e8z9v6.stackpathcdn.com"],
  },
};

module.exports = nextConfig;

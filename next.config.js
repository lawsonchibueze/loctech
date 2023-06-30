/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["loctech-web-app-sandy.vercel.app", "res.cloudinary.com"],
  },
  env: {
    GOOGLE_CLIENT_ID:
      "863918139486-k5bqo4p1i0dvog22hatndu3ivtrs0js1.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
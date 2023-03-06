/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

(module.exports = nextConfig),
  {
    env: {
      Tag_Manager: process.env.tag_manager,
    },
  };

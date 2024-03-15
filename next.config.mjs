/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['us-west-2.graphassets.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;

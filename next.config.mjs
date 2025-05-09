/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backend.navayetabriz.ir',
            port: '',
            pathname: '/uploads/**',
            search: '',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '5000',
            pathname: '/uploads/**',
            search: '',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/uploads/**',
            search: '',
          }
        ],
      }
    };

export default nextConfig;

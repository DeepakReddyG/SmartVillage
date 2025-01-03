/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/**', // This pattern allows images from Firebase Storage
        },
        {
          protocol: 'https',
          hostname: 'i.imghippo.com',
          port: '',
          pathname: '/files/**', // This pattern allows images from Firebase Storage
        }
      ],
    },
  };
  
  module.exports = nextConfig;
  
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: { unoptimized: true },
 
  headers: () => [
    {
      source: '/:api*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}
 
module.exports = nextConfig
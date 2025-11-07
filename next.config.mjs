/** @type {import('next').NextConfig} */
const nextConfig = {
codex/create-next.js-base-for-horsecamp-application
  reactStrictMode: true,
  experimental: {
    typedRoutes: true

  experimental: {
    serverActions: true,
main
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
codex/create-next.js-base-for-horsecamp-application
        hostname: '**'
      }
    ]
  }

        hostname: '**',
      },
    ],
  },
main
};

export default nextConfig;

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development"
});

const nextConfig = withPWA({
  // next config
  env: {
    APP_API_URL: process.env.APP_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sharm.fra1.digitaloceanspaces.com"
      }
    ]
  }
});
module.exports = nextConfig;

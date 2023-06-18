/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withInterceptStdout = require('next-intercept-stdout');

module.exports = withBundleAnalyzer({});

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      scrollRestoration: true,
    },
    images: { unoptimized: true },
    output: 'export',
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);

module.exports = nextConfig;

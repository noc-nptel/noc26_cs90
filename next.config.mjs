import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  allowedDevOrigins: ['192.168.1.6'],
  reactStrictMode: true,
};

export default withMDX(config);

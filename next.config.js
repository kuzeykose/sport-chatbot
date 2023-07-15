/** @type {import('next').NextConfig} */
const nextConfig = {};

const env = {
  OPENAI_KEY: process.env.REACT_APP_OPENAI_KEY,
};

module.exports = { nextConfig, env };

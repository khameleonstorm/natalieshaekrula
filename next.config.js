/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SMTP_USER: 'test@spyderdev.com',
    SMTP_PASSWORD: '#Terminator150'
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'localhost',
            'https://*.googleusercontent.com'
    ]}
}

module.exports = nextConfig

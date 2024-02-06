/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                port: '',
                pathname: '/300x400/343a40/6c757d'
            }
        ]
    }
};

export default nextConfig;

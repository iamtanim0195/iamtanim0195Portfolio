/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                port: '',
                pathname: '/**', // This allows all paths under i.ibb.co
            },
        ],
    },
};

export default nextConfig;

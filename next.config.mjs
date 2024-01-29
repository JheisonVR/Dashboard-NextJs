import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'alphacoders.com',
            },
            {
                protocol: 'https',
                hostname: 'avatarfiles.alphacoders.com',
            }

        ]

    }
};

export default nextConfig;

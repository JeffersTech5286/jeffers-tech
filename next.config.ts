import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

export default nextConfig;


// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
//
// module.exports = withBundleAnalyzer(nextConfig)

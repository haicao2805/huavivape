/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/products': { page: '/products' },
        };
    },
};

module.exports = {
    experimental: {
        images: {
            unoptimized: true,
        },
    },
};

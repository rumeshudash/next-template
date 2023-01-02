/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    options: {
        sourcemaps: "development", // possible values can be production, development, or none
    },
    webpack(config) {
        // For SVG images
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

module.exports = nextConfig;

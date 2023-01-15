/** @type {import('next').NextConfig} */
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['drive.google.com','shutterstock.com','www.uane.edu.mx']
  },
  webpack: (config, { isServer }) => {
    // console.log(process.env.ANALYZE)
    // if (!!process.env.ANALYZE) {
    //  config.plugins.push(
    //    new BundleAnalyzerPlugin({
    //      analyzerMode: 'server',
    //      analyzerPort: isServer ? 8888 : 8889,
    //      openAnalyzer: true,
    //    })
    //  )
    // } else {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      })
    // }
    return config
  },
}

module.exports = nextConfig

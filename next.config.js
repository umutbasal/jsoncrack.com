const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require('next-pwa')({
  dest: 'public'
})

/**
 * @type {import('next').NextConfig}
 */
const config = {
  output: "export",
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
};

const bundleAnalyzerConfig = withBundleAnalyzer(config);


module.exports = withPWA(bundleAnalyzerConfig);
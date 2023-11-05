/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.ecybd.org"],
  },

  webpack: (config) => {
    /**
     * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
     * Module parse failed: Unexpected character '�' (1:0)" error
     */
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    // You may not need this, it's just to support moduleResolution: 'node16'
    // config.resolve.extensionAlias = {
    //   ".js": [".js", ".ts", ".tsx"],
    // };
    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    removeConsole: true,
  },

  productionBrowserSourceMaps: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

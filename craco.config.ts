module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.121.66:8090",
      },
    },
  },
  // ...
  webpack: {
    alias: {
      /* ... */
    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ],
    },
    configure: {
      /* ... */
    },
  },
};

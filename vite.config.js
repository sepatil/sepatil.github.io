const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/theme.js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/css/style.css"; // fixed CSS filename
          }
          return "assets/[name][extname]"; // default for others
        },
      },
    },
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};

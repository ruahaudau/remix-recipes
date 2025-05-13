import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  plugins: [
    reactRouter(), 
    tsconfigPaths(),
  ],
  server: {
    watch: {
      ignored: [
        // Ignore the postgres-data directory
        '**/postgres-data/**',
        // You can add other paths to ignore here as well
      ],
    },
  },
});
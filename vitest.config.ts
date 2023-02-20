/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import svgrPlugin from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src"),
      "@tailwindConfig": path.resolve(__dirname, "tailwind.config.js"),
    },
  },
  optimizeDeps: {
    include: ["@tailwindConfig"],
  },
  plugins: [
    react({
      babel: {
        // plugins: ['twin', 'macros', 'styled-components'],
      },
    }),
    tsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 9003,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    // setupFiles: ['./src/testing/setupTests.ts'],
    exclude: [
      "./e2e",
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
  },
});
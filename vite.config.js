import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        cursor: resolve(__dirname, 'src/cursor-clone/index.html'),
        mintlify: resolve(__dirname, 'src/mintlify-clone/index.html'),
      },
    },
  },
});
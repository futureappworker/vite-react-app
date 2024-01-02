import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content) => {
          let resultContent = '';
          resultContent += '@import "./src/styles/variables.scss";';
          resultContent += '@import "./src/styles/global.scss";';
          resultContent += content;
          return resultContent;
        },
      },
    },
  },
});

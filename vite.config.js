import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const REPO_NAME = 'wikipedia-viewer';

export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [vue()]
});

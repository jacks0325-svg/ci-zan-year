import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ci-zan-year/',
  plugins: [react()],
});

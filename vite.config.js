import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 10000,
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    allowedHosts: ['.onrender.com'], // Allow all Render subdomains
  },
});

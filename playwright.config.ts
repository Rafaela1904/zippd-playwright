import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    baseURL: 'https://portal-dev.zippd.com',

    // ✅ FORCE Chrome to allow geolocation
    launchOptions: {
      args: [
        '--use-fake-ui-for-media-stream',     // auto-allow permissions
        '--use-fake-device-for-media-stream',
        '--disable-geolocation',              // disables prompt completely
      ],
    },

    permissions: ['geolocation'],
    geolocation: { latitude: 14.5995, longitude: 120.9842 }, // Philippines
    locale: 'en-US',
  },
});
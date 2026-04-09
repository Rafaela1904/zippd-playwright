import { test as base, chromium } from '@playwright/test';
import type { Page } from '@playwright/test';
import { handleInitialConsent } from '../helpers/handleInitialConsent';

export const test = base.extend<{
  page: Page;
}>({
  page: async ({}, use) => {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({
      permissions: ['geolocation'],
      geolocation: {
        latitude: 14.5995,
        longitude: 120.9842,
      },
    });

    // ✅ ADD THIS
await context.addCookies([
  {
    name: 'cookieConsent', // ⚠️ we may adjust this
    value: 'true',
    domain: 'portal-dev.zippd.com',
    path: '/',
  },
]);

await context.addCookies([
  {
    name: 'cookieAccept',
    value: 'true',
    domain: 'portal-dev.zippd.com',
    path: '/',
  },
]);

    const page = await context.newPage();

    await page.addInitScript(() => {
      const fakePosition: any = {
        coords: {
          latitude: 14.5995,
          longitude: 120.9842,
          accuracy: 100,
        },
        timestamp: Date.now(),
      };

      navigator.geolocation.getCurrentPosition = (success: any) => {
        success(fakePosition);
      };

      navigator.geolocation.watchPosition = (success: any) => {
        success(fakePosition);
        return 1;
      };
    });

    const initialUrl = process.env.BASE_URL || 'https://portal-dev.zippd.com';
    await page.goto(initialUrl, { waitUntil: 'domcontentloaded' }).catch(() => undefined);
    await handleInitialConsent(page);

    await use(page);

    await context.close();
    await browser.close();
  },
});
import { Page } from '@playwright/test';

export async function acceptCookies(page: Page) {
  try {
    const cookieButton = page.locator('button:has-text("Accept")');
    if (await cookieButton.isVisible({ timeout: 5000 })) {
      await cookieButton.click();
      console.log('Cookies accepted ✅');
    }
  } catch {}
}
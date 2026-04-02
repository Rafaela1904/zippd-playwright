import { Page } from '@playwright/test';

export async function handleInitialConsent(page: Page) {
  // Accept cookies
  try {
    const cookieButton = page.locator('button:has-text("Accept")');
    if (await cookieButton.isVisible({ timeout: 5000 })) {
      await cookieButton.click();
      console.log('Cookies accepted ✅');
    }
  } catch {}

  // Handle language dropdown
  try {
    await page.waitForURL(/languagePage/, { timeout: 3000 });
    const languageDropdown = page.locator('select#languageSelect');
    if (await languageDropdown.isVisible()) {
      await languageDropdown.selectOption({ label: process.env.DEFAULT_LANGUAGE || 'English' });
      console.log(`Language selected: ${process.env.DEFAULT_LANGUAGE} ✅`);

      const continueButton = page.locator('button:has-text("Continue")');
      await continueButton.click();
      console.log('Clicked Continue ✅');
    }
  } catch {}
}
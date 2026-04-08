import { Page } from '@playwright/test';

const consentSelectors = [
  'button:has-text("Accept")',
  'button:has-text("Accept all")',
  'button:has-text("Accept all cookies")',
  'button:has-text("Accept cookies")',
  'button:has-text("I accept")',
  'button:has-text("Agree")',
  'button#onetrust-accept-btn-handler',
  '[aria-label*="Accept"]',
  '[id*="accept"]',
];

export async function handleInitialConsent(page: Page) {
  // Wait a bit for the consent modal to appear
  await page.waitForTimeout(1000);
  
  for (const selector of consentSelectors) {
    try {
      const button = page.locator(selector);
      if (await button.isVisible({ timeout: 5000 })) {
        await button.click();
        console.log(`Cookies accepted with selector: ${selector} ✅`);
        // Wait for consent modal to disappear after clicking
        await page.waitForTimeout(2000);
        break;
      }
    } catch {
      // ignore and try next selector
    }
  }

  try {
    await page.waitForURL(/languagePage/, { timeout: 3000 });
    const languageDropdown = page.locator('select#languageSelect');
    if (await languageDropdown.isVisible()) {
      await languageDropdown.selectOption({ label: process.env.DEFAULT_LANGUAGE || 'English' });
      console.log(`Language selected: ${process.env.DEFAULT_LANGUAGE || 'English'} ✅`);

      const continueButton = page.locator('button:has-text("Continue")');
      await continueButton.click();
      console.log('Clicked Continue ✅');
    }
  } catch {}
}
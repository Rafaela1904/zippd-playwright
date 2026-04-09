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
  try {
    const acceptBtn = page.getByRole('button', { name: 'Accept' });

    if (await acceptBtn.isVisible({ timeout: 5000 })) {
      await acceptBtn.click();
      console.log('✅ Cookie accepted');

      // wait until popup disappears
      await acceptBtn.waitFor({ state: 'hidden' });
    }
  } catch {
    console.log('No cookie popup found');
  }
}
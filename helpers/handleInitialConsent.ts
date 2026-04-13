import { Page } from '@playwright/test';

export async function handleInitialConsent(page: Page) {
  try {
    const acceptBtn = page.getByRole('button', { name: 'Accept' });

    if (await acceptBtn.isVisible({ timeout: 5000 })) {
      await acceptBtn.click();
      console.log('✅ Cookie accepted');

      // wait until popup is gone
      await acceptBtn.waitFor({ state: 'hidden' });
    }
  } catch {
    console.log('No cookie popup found');
  }
}
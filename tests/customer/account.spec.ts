import { test, expect } from '@playwright/test';

test('Customer account page loads', async ({ page }) => {
  await page.goto('/customer/account');
  await expect(page).toHaveURL(/customer\/account/);
});
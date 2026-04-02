import { test, expect } from '@playwright/test';

test('Customer delivery options page loads', async ({ page }) => {
  await page.goto('/customer/delivery-options');
  await expect(page).toHaveURL(/customer\/delivery-options/);
});
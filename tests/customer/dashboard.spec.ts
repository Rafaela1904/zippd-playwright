import { test, expect } from '@playwright/test';

test('Customer dashboard page loads', async ({ page }) => {
  await page.goto('/customer/dashboard');
  await expect(page).toHaveURL(/customer\/dashboard/);
});
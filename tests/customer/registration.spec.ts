import { test, expect } from '@playwright/test';

test('Customer registration page loads', async ({ page }) => {
  await page.goto('/customer/registration');
  await expect(page).toHaveURL(/customer\/registration/);
});
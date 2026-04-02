import { test, expect } from '@playwright/test';

test('Driver registration page loads', async ({ page }) => {
  await page.goto('/driver/registration');
  await expect(page).toHaveURL(/driver\/registration/);
});
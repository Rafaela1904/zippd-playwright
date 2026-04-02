import { test, expect } from '@playwright/test';

test('Driver dashboard page loads', async ({ page }) => {
  await page.goto('/driver/dashboard');
  await expect(page).toHaveURL(/driver\/dashboard/);
});
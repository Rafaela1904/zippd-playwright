import { test, expect } from '@playwright/test';

test('Customer orders page loads', async ({ page }) => {
  await page.goto('/customer/orders');
  await expect(page).toHaveURL(/customer\/orders/);
});
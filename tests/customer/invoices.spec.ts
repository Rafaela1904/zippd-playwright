import { test, expect } from '@playwright/test';

test('Customer invoices page loads', async ({ page }) => {
  await page.goto('/customer/invoices');
  await expect(page).toHaveURL(/customer\/invoices/);
});
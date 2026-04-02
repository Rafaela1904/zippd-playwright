import { test } from '../hooks';
import { expect } from '@playwright/test';
import { CustomerLoginPage } from '../../pages/customer/login.page';
import { CustomerDashboardPage } from '../../pages/customer/dashboard.page';

test('Customer can log in with real credentials', async ({ page }) => {
  const loginPage = new CustomerLoginPage(page);
  await loginPage.goto();

  const email = process.env.CUSTOMER_EMAIL;
  const password = process.env.CUSTOMER_PASSWORD;

  if (!email || !password) {
    throw new Error('CUSTOMER_EMAIL and CUSTOMER_PASSWORD environment variables are required');
  }

  await loginPage.login(email as string, password as string);

  await page.waitForLoadState('networkidle');

  const dashboard = new CustomerDashboardPage(page);
  await expect(dashboard.welcomeText).toBeVisible({ timeout: 8000 });
});
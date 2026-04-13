import { test } from '../hooks';
import { expect } from '@playwright/test';
import { CustomerLoginPage } from '../../pages/customer/login.page';
import { CustomerDashboardPage } from '../../pages/customer/dashboard.page';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

test('Customer can log in with real credentials', async ({ page }) => {
  const loginPage = new CustomerLoginPage(page);

  await loginPage.goto();

  // ✅ Handle cookie FIRST
  await handleInitialConsent(page);

  // ✅ Wait for Flutter/UI to stabilize
  await page.waitForTimeout(2000);

  // ✅ Handle AGAIN (your site shows it twice)
  await handleInitialConsent(page);

  const email = process.env.CUSTOMER_EMAIL;
  const password = process.env.CUSTOMER_PASSWORD;

  if (!email || !password) {
    throw new Error('CUSTOMER_EMAIL and CUSTOMER_PASSWORD environment variables are required');
  }

  await loginPage.login(email, password);

  // ✅ Wait for navigation instead of networkidle
  await page.waitForURL('**/dashboard', { timeout: 10000 });

  const dashboard = new CustomerDashboardPage(page);
  await expect(dashboard.welcomeText).toBeVisible();
});
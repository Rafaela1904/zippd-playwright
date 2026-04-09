import { test } from '../hooks';
import { expect } from '@playwright/test';
import { CustomerLoginPage } from '../../pages/customer/login.page';
import { CustomerDashboardPage } from '../../pages/customer/dashboard.page';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

test('Customer can log in with real credentials', async ({ page }) => {
  const loginPage = new CustomerLoginPage(page);

  await loginPage.goto();

  // ✅ Handle first cookie popup
  await handleInitialConsent(page);

  await page.waitForLoadState('networkidle');

  // ✅ Handle second popup (important in your case)
  await handleInitialConsent(page);

  const email = process.env.CUSTOMER_EMAIL;
  const password = process.env.CUSTOMER_PASSWORD;

  if (!email || !password) {
    throw new Error('CUSTOMER_EMAIL and CUSTOMER_PASSWORD environment variables are required');
  }

  await loginPage.login(email, password);

  await page.waitForURL('**/dashboard', { timeout: 10000 });

  const dashboard = new CustomerDashboardPage(page);
  await expect(dashboard.welcomeText).toBeVisible();
});
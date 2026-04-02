import { test, expect } from '../hooks';
import { DriverLoginPage } from '../../pages/driver/login.page';
import { DriverDashboardPage } from '../../pages/driver/dashboard.page';

test('Driver can log in with real credentials', async ({ page }) => {
  const loginPage = new DriverLoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.DRIVER_EMAIL!, process.env.DRIVER_PASSWORD!);

  const dashboard = new DriverDashboardPage(page);
  await expect(dashboard.dashboardHeader).toBeVisible();
});
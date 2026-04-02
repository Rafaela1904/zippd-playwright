import { Page, Locator } from '@playwright/test';

export class DriverDashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeader = page.locator('text=Driver Dashboard');
  }
}
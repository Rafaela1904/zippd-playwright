import { Page, Locator } from '@playwright/test';

export class CustomerDashboardPage {
  readonly page: Page;
  readonly welcomeText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeText = page.locator('text=Welcome');
  }
}
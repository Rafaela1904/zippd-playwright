import { Page, Locator } from '@playwright/test';

export class CustomerOrdersPage {
  readonly page: Page;
  readonly ordersTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ordersTable = page.locator('table#orders');
  }

  async goto() {
    await this.page.goto('/customer/orders');
  }
}
import { Page, Locator } from '@playwright/test';

export class CustomerDeliveryOptionsPage {
  readonly page: Page;
  readonly optionsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionsContainer = page.locator('#delivery-options');
  }

  async goto() {
    await this.page.goto('/customer/delivery-options');
  }

  async isVisible() {
    return await this.optionsContainer.isVisible();
  }
}
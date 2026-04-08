import { Page, Locator } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class CustomerDeliveryOptionsPage {
  readonly page: Page;
  readonly optionsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.optionsContainer = page.locator('#delivery-options');
  }

  async goto() {
    await this.page.goto('/customer/delivery-options');
    await handleInitialConsent(this.page);
  }

  async isVisible() {
    return await this.optionsContainer.isVisible();
  }
}
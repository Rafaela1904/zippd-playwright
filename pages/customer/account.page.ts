import { Page, Locator } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class CustomerAccountPage {
  readonly page: Page;
  readonly accountInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountInfo = page.locator('#account-info');
  }

  async goto() {
    await this.page.goto('/customer/account');
    await handleInitialConsent(this.page);
  }

  async isVisible() {
    return await this.accountInfo.isVisible();
  }
}
import { Page, Locator } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class CustomerInvoicesPage {
  readonly page: Page;
  readonly invoicesTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoicesTable = page.locator('table#invoices');
  }

  async goto() {
    await this.page.goto('/customer/invoices');
    await handleInitialConsent(this.page);
  }

  async hasInvoices() {
    return await this.invoicesTable.isVisible();
  }
}
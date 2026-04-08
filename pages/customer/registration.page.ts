import { Page } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class CustomerRegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/customer/registration');
    await handleInitialConsent(this.page);
  }

  async register(name: string, email: string, password: string) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }
}
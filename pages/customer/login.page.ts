import { Page } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class CustomerLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/customer/login');
    await handleInitialConsent(this.page);
  }

  async login(email: string, password: string) {
  // ensure cookie is gone before typing
  await this.page.locator('#cookieAccept').waitFor({ state: 'hidden' });

  const emailInput = this.page.locator('input[name="email"]');
  await emailInput.click();
  await emailInput.fill('');
  await this.page.keyboard.type(email);

  const passwordInput = this.page.locator('input[name="password"]');
  await passwordInput.click();
  await passwordInput.fill('');
  await this.page.keyboard.type(password);

  await this.page.locator('button[type="submit"]').click();
}
}
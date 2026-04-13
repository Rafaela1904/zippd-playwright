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
  // make sure cookie is NOT blocking
  const cookieBtn = this.page.getByRole('button', { name: 'Accept' });
  if (await cookieBtn.isVisible().catch(() => false)) {
    await cookieBtn.click();
    await cookieBtn.waitFor({ state: 'hidden' });
  }

  await this.page.waitForTimeout(2000); // wait for UI

  // Click approximate position of email field
  await this.page.mouse.click(600, 300); // adjust position

  await this.page.keyboard.type(email);

  // Click password field
  await this.page.mouse.click(600, 380); // adjust position

  await this.page.keyboard.type(password);

  // Click login button
  await this.page.mouse.click(600, 500); // adjust
} }
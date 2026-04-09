import { Page } from '@playwright/test';
import { handleInitialConsent } from '../../helpers/handleInitialConsent';

export class DriverLoginPage {
  readonly page: Page;

  constructor(page: Page) { this.page = page; }

  async goto() {
    await this.page.goto('/driver/login');
    await handleInitialConsent(this.page);
  }

  async login(email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForURL('/driver/dashboard');
  }
}
import { Page } from '@playwright/test';

export class CustomerLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() { await this.page.goto('/customer/login'); }

  async login(email: string, password: string) {
    // Use the correct locators, not the actual email
    await this.page.pause();  // Playwright will open inspector
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }
}
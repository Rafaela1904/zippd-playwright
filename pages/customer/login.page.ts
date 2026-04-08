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
    console.log('EMAIL:', email);        // ✅ ADD HERE
  console.log('PASSWORD:', password);  // ✅ ADD HERE
    // Wait for email field to be visible and clickable
    await this.page.waitForSelector('input[name="email"]', { state: 'visible' });
    await this.page.click('input[name="email"]');
    await this.page.fill('input[name="email"]', email);
    
    await this.page.waitForSelector('input[name="password"]', { state: 'visible' });
    await this.page.click('input[name="password"]');
    await this.page.fill('input[name="password"]', password);
    
    await this.page.click('button[type="submit"]');
  }
}
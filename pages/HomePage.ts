import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async countNoticias() {
    await this.page.waitForSelector('.feed-post');
    return this.page.locator('.feed-post').count();
  }

  async clicarPrimeiraNoticia() {
    await this.page.locator('.feed-post').first().click();
  }

  async selecionarTime(time: string) {
    await this.page.getByRole('link', { name: new RegExp(`${time}`, 'i') }).first().click();
  }
}

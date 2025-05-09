import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Ao selecionar um time da Série A, redireciona para a página do time', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.selecionarTime('Flamengo');
  await expect(page).toHaveURL(/.*\/futebol\/times\/flamengo/);
});

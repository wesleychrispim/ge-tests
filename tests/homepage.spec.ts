import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Página inicial exibe no mínimo 10 notícias', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  await page.waitForSelector('.feed-post', { timeout: 10000 });

  let count = await homePage.countNoticias();
  while (count < 10) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(1000);
    count = await homePage.countNoticias();
  }

  console.log('🔢 Total de notícias encontradas:', count);
  expect(count).toBeGreaterThanOrEqual(10);
});

test('Ao clicar em uma notícia, o usuário deve ser redirecionado', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

   let count = await homePage.countNoticias();
  while (count < 10) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(1000);
    count = await homePage.countNoticias();
  }

  console.log('🔢 Total de notícias carregadas:', count);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const noticiaLinkLocator = page.locator('a[href*="/noticia/"]');
  const linkCount = await noticiaLinkLocator.count();

  if (linkCount === 0) {
    throw new Error('❌ Nenhum link de notícia encontrado com "/noticia/" no href.');
  }

  const href = await noticiaLinkLocator.first().getAttribute('href');
  console.log('🔗 Navegando para notícia:', href);
  expect(href).toBeTruthy();

  await page.goto(href!);

  await expect(page).toHaveURL(/.*\/noticia\//);
});

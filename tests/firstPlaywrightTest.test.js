const { test, expect } = require('playwright/test');

test('Test 01 - Visit Selenium Test Page', async ({ page }) => {
  await page.goto('https://automationintesting.com/selenium/testpage/');
  const pageTitle = await page.title();
  expect(pageTitle).toContain('Selenium Test Page');
  await expect(page).toHaveURL('https://automationintesting.com/selenium/testpage/');
});

test('Test 02 - Test Navigation', async ({ page }) => {
  await page.goto('https://automationintesting.com/selenium/testpage/');
  await page.click('a.nav-link[href="/blog"]');
  const pageTitle = await page.title();
  expect(pageTitle).toContain('The AiT Blog');
  await expect(page).toHaveURL('https://automationintesting.com/blog');
});

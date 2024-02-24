const { test, expect, describe } = require('playwright/test');

// These tests have been performed without Data or PageObjects files.

describe('SauceDemo Page Testing - Login Form', () => {
  
  test('Test 01 - Login with invalid user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.click('#login-button');
    expect(await page.locator('[data-test="error"]').isVisible()).toBe(true);
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Test 02 - Login with invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('invalid_pass');
    await page.click('#login-button');
    expect(await page.locator('[data-test="error"]').isVisible()).toBe(true);
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Test 03 - Login with invalid user and invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('invalid_pass');
    await page.click('#login-button');
    expect(await page.locator('[data-test="error"]').isVisible()).toBe(true);
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Test 04 - Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
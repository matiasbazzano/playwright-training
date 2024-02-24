const { test, expect, describe } = require('playwright/test');
import LoginPage from '../support/pageObjects/sauceDemoLogin.page.js';
import LoginData from '../data/loginData.js';
import GeneralData from '../data/generalData.js';
import BaseData from '../data/baseData.js';

describe('SauceDemo Page Testing - Login Form v2', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BaseData.baseUrl);
  });

  test('@Regression - Login with invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.invalidUser);
    await loginPage.passwordInput.fill(LoginData.validPassword);
    await loginPage.loginButton.click();
    const isErrorMessageVisible = await loginPage.errorMessage.isVisible();
    expect(isErrorMessageVisible).toBe(true);
    await expect(page).toHaveURL(BaseData.baseUrl);
  });

  test('@Regression - Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.validUser);
    await loginPage.passwordInput.fill(LoginData.invalidPassword);
    await loginPage.loginButton.click();
    const isErrorMessageVisible = await loginPage.errorMessage.isVisible();
    expect(isErrorMessageVisible).toBe(true);
    await expect(page).toHaveURL(BaseData.baseUrl);
  });

  test('@Regression - Login with invalid user and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.invalidUser);
    await loginPage.passwordInput.fill(LoginData.invalidPassword);
    await loginPage.loginButton.click();
    const isErrorMessageVisible = await loginPage.errorMessage.isVisible();
    expect(isErrorMessageVisible).toBe(true);
    await expect(page).toHaveURL(BaseData.baseUrl);
  });

  test('@Smoke - Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.validUser);
    await loginPage.passwordInput.fill(LoginData.validPassword);
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(GeneralData.productsUrl);
  });
});

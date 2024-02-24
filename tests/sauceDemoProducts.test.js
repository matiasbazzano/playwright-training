const { test, expect, describe } = require('playwright/test');
import LoginPage from '../support/pageObjects/sauceDemoLogin.page.js';
import ProductsPage from '../support/pageObjects/products.page.js';
import LoginData from '../data/loginData.js';
import GeneralData from '../data/generalData.js';
import BaseData from '../data/baseData.js';


describe('SauceDemo Page Testing - Products', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BaseData.baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.validUser);
    await loginPage.passwordInput.fill(LoginData.validPassword);
    await loginPage.loginButton.click();
  });

  test('@Smoke - Add 1 product to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('1');
  });

  test('@Smoke - Add 2 products to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('2');
  });

  test('@Smoke - Add 3 products to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shirtAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('3');
  });

  test('@Smoke - Add 4 products to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shirtAddToCartButton.click();
    await productsPage.jacketAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('4');
  });

  test('@Smoke - Add 5 products to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shirtAddToCartButton.click();
    await productsPage.jacketAddToCartButton.click();
    await productsPage.onesieAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('5');
  });

  test('@Smoke - Add 6 products to the cart and verify the Shopping Cart Badge', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shirtAddToCartButton.click();
    await productsPage.jacketAddToCartButton.click();
    await productsPage.onesieAddToCartButton.click();
    await productsPage.redShirtAddToCartButton.click();
    const cartItemCount = await productsPage.getCartItemCount();
    expect(cartItemCount).toBe('6');
  });

  test('@Smoke - Log out button', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.menuOptionsButton.click();
    await productsPage.logOutSidebarLink.click();
    await expect(page).toHaveURL(BaseData.baseUrl);
  });

  test('@Smoke - Shopping cart button', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.shoppingCartButton.click();
    await expect(page).toHaveURL(GeneralData.shoppingCartUrl);
  });
});

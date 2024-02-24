const { test, expect, describe } = require('playwright/test');
import LoginPage from '../support/pageObjects/sauceDemoLogin.page.js';
import ProductsPage from '../support/pageObjects/products.page.js';
import LoginData from '../data/loginData.js';
import GeneralData from '../data/generalData.js';
import ShoppingCartPage from '../support/pageObjects/shoppingCart.page.js';
import BaseData from '../data/baseData.js';


describe('SauceDemo Page Testing - Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BaseData.baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.validUser);
    await loginPage.passwordInput.fill(LoginData.validPassword);
    await loginPage.loginButton.click();
  });

  test('@Smoke - Add 2 products to the cart and check the number of items', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shoppingCartButton.click();
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(2);
  });

  test('@Smoke - Add 6 products to the cart and check the number of items', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.bikeAddToCartButton.click();
    await productsPage.shirtAddToCartButton.click();
    await productsPage.jacketAddToCartButton.click();
    await productsPage.onesieAddToCartButton.click();
    await productsPage.redShirtAddToCartButton.click();
    await productsPage.shoppingCartButton.click();
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(6);
    });

    test('@Smoke - Log out button', async ({ page }) => {
      const productsPage = new ProductsPage(page);
      const shoppingCartPage = new ShoppingCartPage(page);
      await productsPage.shoppingCartButton.click();
      await shoppingCartPage.menuOptionsButton.click();
      await shoppingCartPage.logOutSidebarLink.click();
      await expect(page).toHaveURL(BaseData.baseUrl);
    });

    test('@Smoke - Continue Shopping button', async ({ page }) => {
      const productsPage = new ProductsPage(page);
      const shoppingCartPage = new ShoppingCartPage(page);
      await productsPage.shoppingCartButton.click();
      await shoppingCartPage.continueShoppingButton.click();
      await expect(page).toHaveURL(GeneralData.productsUrl);
    });
});
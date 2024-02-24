const { test, expect, describe } = require('playwright/test');
import LoginPage from '../support/pageObjects/sauceDemoLogin.page.js';
import ProductsPage from '../support/pageObjects/products.page.js';
import LoginData from '../data/loginData.js';
import GeneralData from '../data/generalData.js';
import ShoppingCartPage from '../support/pageObjects/shoppingCart.page.js';
import CheckoutStepOnePage from '../support/pageObjects/checkoutStepOne.page.js';
import CheckoutStepTwoPage  from '../support/pageObjects/checkoutStepTwo.page.js';
import OrderData from '../data/orderData.js';
import BaseData from '../data/baseData.js';


describe('SauceDemo Page Testing - Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BaseData.baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(LoginData.validUser);
    await loginPage.passwordInput.fill(LoginData.validPassword);
    await loginPage.loginButton.click();
  });

  test('@Smoke - Complete checkout flow with 1 item in the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await productsPage.backpackAddToCartButton.click();
    await productsPage.shoppingCartButton.click();
    await shoppingCartPage.checkoutButton.click();
    await expect(page).toHaveURL(GeneralData.checkoutStepOneUrl);
    await checkoutStepOnePage.firstNameInput.fill(OrderData.firstName);
    await checkoutStepOnePage.lastNameInput.fill(OrderData.lastName);
    await checkoutStepOnePage.zipCodeInput.fill(OrderData.zipCode);
    await checkoutStepOnePage.continueButton.click();
    await expect(page).toHaveURL(GeneralData.checkoutStepTwoUrl);
    await checkoutStepTwoPage.finishButton.click();
    await expect(page).toHaveURL(GeneralData.checkoutCompleteUrl);
  });
});
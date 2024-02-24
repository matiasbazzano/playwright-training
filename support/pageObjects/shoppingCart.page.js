class ShoppingCartPage {
    constructor(page) {
      this.page = page;
    }
  
    get menuOptionsButton () {
      return this.page.locator('[id="react-burger-menu-btn"]');
    }

    get logOutSidebarLink () {
      return this.page.locator('[id="logout_sidebar_link"]');
    }

    get shoppingCartBadge () {
      return this.page.locator('.shopping_cart_badge');
    }

    get continueShoppingButton () {
      return this.page.locator('[data-test="continue-shopping"]');
    }

    get checkoutButton () {
      return this.page.locator('[data-test="checkout"]');
    }
  }
  
  export default ShoppingCartPage;
  
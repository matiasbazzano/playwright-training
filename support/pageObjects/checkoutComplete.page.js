class CheckoutCompletePage {
    constructor(page) {
      this.page = page;
    }
  
    get menuOptionsButton () {
      return this.page.locator('[id="react-burger-menu-btn"]');
    }

    get logOutSidebarLink () {
      return this.page.locator('[id="logout_sidebar_link"]');
    }

    get backToHomeButton () {
      return this.page.locator('data-test="back-to-products"]');
    }
  }
  
  export default CheckoutCompletePage;
  
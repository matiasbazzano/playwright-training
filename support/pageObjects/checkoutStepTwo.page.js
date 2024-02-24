class CheckoutStepTwoPage {
    constructor(page) {
      this.page = page;
    }
  
    get menuOptionsButton () {
      return this.page.locator('[id="react-burger-menu-btn"]');
    }

    get logOutSidebarLink () {
      return this.page.locator('[id="logout_sidebar_link"]');
    }

    get cancelButton () {
      return this.page.locator('data-test="cancel"]');
    }

    get finishButton () {
      return this.page.locator('#finish, [data-test="finish"], [name="finish"]');
    }
  }
  
  export default CheckoutStepTwoPage;
  
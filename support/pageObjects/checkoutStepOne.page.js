class CheckoutStepOnePage {
    constructor(page) {
      this.page = page;
    }
  
    get menuOptionsButton () {
      return this.page.locator('[id="react-burger-menu-btn"]');
    }

    get logOutSidebarLink () {
      return this.page.locator('[id="logout_sidebar_link"]');
    }

    get firstNameInput () {
      return this.page.locator('[data-test="firstName"]');
    }

    get lastNameInput () {
      return this.page.locator('[data-test="lastName"]');
    }

    get zipCodeInput () {
      return this.page.locator('[data-test="postalCode"]');
    }

    get cancelButton () {
      return this.page.locator('data-test="cancel"]');
    }

    get continueButton () {
      return this.page.locator('#continue, [data-test="continue"], [name="continue"]');
    }
  }
  
  export default CheckoutStepOnePage;
  
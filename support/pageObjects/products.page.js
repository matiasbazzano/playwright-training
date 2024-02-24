class ProductsPage {
    constructor(page) {
      this.page = page;
    }
  
    get menuOptionsButton () {
      return this.page.locator('[id="react-burger-menu-btn"]');
    }

    get logOutSidebarLink () {
      return this.page.locator('[id="logout_sidebar_link"]');
    }

    get shoppingCartButton () {
      return this.page.locator('.shopping_cart_link');
    }

    get shoppingCartBadge () {
      return this.page.locator('.shopping_cart_badge');
    }

    async getCartItemCount() {
      const cartItemCount = await this.shoppingCartBadge.innerText();
      return cartItemCount.trim();
    }

    get backpackAddToCartButton() {
      return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get backpackRemoveCartButton() {
      return this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

    get bikeAddToCartButton () {
      return this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    get shirtAddToCartButton () {
      return this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get jacketAddToCartButton () {
      return this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    get onesieAddToCartButton () {
      return this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    get redShirtAddToCartButton () {
      return this.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
  }
  
  export default ProductsPage;
  
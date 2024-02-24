class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton() {
    return this.page.locator('#login-button');
  }

  get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}

export default LoginPage;

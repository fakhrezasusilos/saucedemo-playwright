
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    // ✅ All locators are defined here
    this.selectors = {
      usernameInput: '#user-name',
      passwordInput: '#password',
      loginButton: '#login-button',
      errorMsg: '[data-test="error"]',
      inventoryTitle: '.title',
    };
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.locator(this.selectors.usernameInput).fill(username);
    await this.page.locator(this.selectors.passwordInput).fill(password);
    await this.page.locator(this.selectors.loginButton).click();
  }

  async isLoginSuccessful() {
    return this.page.locator(this.selectors.inventoryTitle).isVisible();
  }

  async getErrorMessage() {
    return this.page.locator(this.selectors.errorMsg).textContent();
  }

  get inventoryTitle() {
    return this.page.locator(this.selectors.inventoryTitle);
  }
};

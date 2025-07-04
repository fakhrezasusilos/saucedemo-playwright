
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../data/loginData');

loginData.forEach(({ username, password, expected }) => {
  test(`Login test: ${username} / ${expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    if (expected === 'success') {
      await expect(loginPage.inventoryTitle).toBeVisible();
    } else if (expected === 'locked') {
      const msg = await loginPage.getErrorMessage();
      expect(msg).toContain('locked out');
    } else {
      const msg = await loginPage.getErrorMessage();
      expect(msg).toContain('Username and password do not match');
    }
  });
});

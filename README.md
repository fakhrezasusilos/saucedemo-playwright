
# 🎭 SauceDemo Automation with Playwright

This project is an end-to-end automated testing suite for [SauceDemo](https://www.saucedemo.com/) using **[Playwright](https://playwright.dev/)**. It includes multiple login scenarios tested across **Chromium**, **Firefox**, and **WebKit** browsers.

---

## 📁 Folder Structure

```
saucedemo-playwright/
├── data/
│   └── loginData.js              # Test data for login scenarios
├── pages/
│   └── LoginPage.js             # Page Object Model for Login page
├── tests/
│   └── login.spec.js            # Test spec covering login flows
├── test-results/                # Playwright raw test artifacts
├── playwright-report/           # Generated HTML report
├── report.json                  # JSON test report (if exported)
├── playwright.config.js         # Playwright configuration
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run Tests

```bash
npx playwright test
```

This will run login tests across Chromium, Firefox, and WebKit in parallel.

---

## 🧪 Login Test Scenarios

Test coverage includes multiple credential scenarios:

- ✅ Standard user login
- 🔒 Locked out user
- ❌ Invalid user
- 🤖 Problem user

### Example test code

```js
test(`Login test: ${username} / ${expected}`, async ({ page }) => {
  await loginPage.login(username, password);

  if (expected === 'success') {
    await expect(loginPage.inventoryTitle).toBeVisible();
  } else {
    const msg = await loginPage.getErrorMessage();
    expect(msg).toContain(expected === 'locked' ? 'locked out' : 'do not match');
  }
});
```

---

## 📊 HTML Report

After the test run, view the Playwright HTML report:

```bash
npx playwright show-report
```

---

## ⚙️ Tech Stack

- Playwright Test Runner
- Page Object Model (POM)
- Multi-browser testing (Chromium, Firefox, WebKit)
- JSON & HTML reporting
- Data-driven test structure

---

## ✅ Test Summary

- 12 test cases executed
- 100% passing rate across all browsers
- Data-driven & modular test design

---

## 👨‍💻 Author

**Fakhreza Akbar Susilo**  
🔗 [GitHub](https://github.com/fakhrezasusilos)

---

## 📄 License

This project is licensed under the MIT License.

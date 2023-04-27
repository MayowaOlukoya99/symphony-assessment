/// <reference types="Cypress" />
import SauceDemo from "../../pageObjects/symphony.page";
const SauceDemoPage = new SauceDemo();

const data = require("../../fixtures/symphony.json");

describe("Sauce Demo Test", () => {
  it("should verify item sorting by name", () => {
    SauceDemoPage.openURL();

    // Step 2: Log in and verify initial sorting by Name (A -> Z)
    SauceDemoPage.usernameField().type(data.username);
    SauceDemoPage.passwordFiled().type(data.password);
    SauceDemoPage.loginButton().click();

    // Assuming the items are displayed in a list, you can customize the selector as per your application
    SauceDemoPage.itemName().then(($items) => {
      const itemNames = $items.map((_, el) => Cypress.$(el).text()).get();
      const sortedNames = [...itemNames].sort();

      expect(itemNames).to.deep.equal(
        sortedNames,
        "Items are not sorted by Name (A -> Z)"
      );
    });

    // Step 3: Change sorting to Name (Z -> A)
    SauceDemoPage.filter().select("za");

    // Step 4: Verify items are sorted correctly
    SauceDemoPage.itemName().then(($items) => {
      const itemNames = $items.map((_, el) => Cypress.$(el).text()).get();
      const sortedNames = [...itemNames].sort().reverse();

      expect(itemNames).to.deep.equal(
        sortedNames,
        "Items are not sorted by Name (Z -> A)"
      );
    });
  });
});

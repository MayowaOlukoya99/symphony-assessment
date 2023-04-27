class SauceDemo
{
    openURL()
    {
        return cy.visit('https://www.saucedemo.com/');
    }
    usernameField()
    {
        return cy.get('[data-test="username"]');
    }
    passwordFiled()
    {
        return cy.get('[data-test="password"]');
    }
    loginButton()
    {
        return cy.get('[data-test="login-button"]');
    }
    itemName()
    {
        return cy.get('.inventory_item_name');
    }
    filter()
    {
        return cy.get('[data-test="product_sort_container"]');
    }
}
export default SauceDemo;
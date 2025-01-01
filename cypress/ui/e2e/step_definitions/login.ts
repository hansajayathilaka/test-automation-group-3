import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage";


Given("User logged in as an inventory admin", () => {
    loginPage.visit();
    loginPage.fillEmail(Cypress.env("UI_USERNAME"));
    loginPage.fillPassword(Cypress.env("UI_PASSWORD"));
    loginPage.submit();
});

Given("User logged in as a super admin", () => {
    loginPage.visit();
    loginPage.fillEmail(Cypress.env("UI_USERNAME"));
    loginPage.fillPassword(Cypress.env("UI_PASSWORD"));
    loginPage.submit();
});

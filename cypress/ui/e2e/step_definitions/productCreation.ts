import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductCreationPage from "../../pages/ProductCreationPage";

When("No Product Exists in the Products Page", () => {
    ProductCreationPage.visit();
});

Then("I should be able to Create a New Product", () => {
    ProductCreationPage.createNewProduct();
});
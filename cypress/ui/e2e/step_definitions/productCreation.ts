import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductCreationPage from "../../pages/ProductCreationPage";

When("User visits the Inventory Overview Page", () => {
  ProductCreationPage.visit();
});

Then("User should be able to Create a New Product", () => {
  ProductCreationPage.createNewProduct();
});

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductCreationPage from "../../pages/ProductCreationPage";

Given("Create Product for receipt", () => {
  ProductCreationPage.visit();
  ProductCreationPage.createProduct("Laptop", "250000.00", "200000.00");
})

When("User visits the Product Creation Page", () => {
  ProductCreationPage.visit();
});

Then("User should be able to Create a New Product", () => {
  ProductCreationPage.createProduct("Laptop", "250000.00", "200000.00");
  ProductCreationPage.verifyNewProduct();
});

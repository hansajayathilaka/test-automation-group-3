import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductCreationPage from "../../pages/ProductCreationPage";
import ProductViewPage from "../../pages/ProductViewPage";

When("User visits the Product View", () => {
  ProductViewPage.visit();
});

Then("User should be able to Delete a Product", () => {
  ProductViewPage.selectAllProduct();
  ProductViewPage.deleteSelectedProducts();
});

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductViewPage from "../../pages/ProductViewPage";

When("User visits the Initial Products Page", () => {
  ProductViewPage.visit();
});

Then("User should be able visit the Initial Product View Page", () => {
  ProductViewPage.verifyInitialProjectView();
});

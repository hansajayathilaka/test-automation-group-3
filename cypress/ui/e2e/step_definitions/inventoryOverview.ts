import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryOverviewPage from "../../pages/InventoryOverviewPage";

When("User visits the Inventory Overview Page", () => {
  InventoryOverviewPage.visit();
});

Then("User should be able visit the Initial Inventory Overview Page", () => {
  InventoryOverviewPage.verifyInitialOverview();
});

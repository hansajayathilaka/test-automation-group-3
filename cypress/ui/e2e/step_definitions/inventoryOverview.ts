import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InitialInventoryOverviewPage from "../../pages/inventoryOverviewPage";

When("User visits the Inventory Overview Page", () => {
  InitialInventoryOverviewPage.visit();
});

Then("User should be able visit the Initial Inventory Overview Page", () => {
  InitialInventoryOverviewPage.verifyInitialOverview();
});

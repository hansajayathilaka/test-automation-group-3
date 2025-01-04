import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventryAdjustmentPage from "../../pages/inventryAdjustmentPage";

When("User visits the Inventory Adjustment create page", () => {
    InventryAdjustmentPage.visit();
});

Then("User should be able to create new Inventory Adjustment successfully", () => {
    InventryAdjustmentPage.AddNewAdjustment();
    //InventryAdjustmentPage.verifyNewProduct();
});

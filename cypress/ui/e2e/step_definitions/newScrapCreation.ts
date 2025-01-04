import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NewScrapPListPage from "../../pages/NewScrapListPage";

When("User visits the New Scrap Page", () => {
    NewScrapPListPage.visit();
});

Then("User should be able to Create a New scrap", () => {
    NewScrapPListPage.AddNewAdjustment();
});
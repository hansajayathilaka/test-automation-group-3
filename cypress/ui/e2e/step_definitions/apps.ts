import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import apps from "../../pages/AppsPage";


When("User navigates to the App Store", () => {
    apps.visit();
});

When("User installs the Inventory App", () => {
    apps.installInventoryApp();
});

Then("User should see the Inventory App installed", () => {
    apps.checkInventoryAppInstalled();
});

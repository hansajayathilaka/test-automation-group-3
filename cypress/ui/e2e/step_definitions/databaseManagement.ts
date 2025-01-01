import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import databaseManagement from "../../pages/DatabaseManagerPage";


Given("User navigates to the database management page", () => {
    databaseManagement.visit();
});

When("Create a database if it does not exist", () => {
    databaseManagement.createDatabaseIfNotExists();
});

Then("Database should exist", () => {
    databaseManagement.checkDatabaseExists();
});

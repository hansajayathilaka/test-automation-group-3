import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductCategoryListPage from "../../pages/ProductCategoryListPage";


When("I visit the product category page", () => {
    ProductCategoryListPage.visit();
});

Then("I should go to the product category list page", () => {
    ProductCategoryListPage.checkProductCategoryListPage();
});

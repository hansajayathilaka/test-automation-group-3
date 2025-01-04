import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import ProductCategoryListPage from "../../pages/ProductCategoryListPage";
import ProductCategoryCreatePage from "../../pages/ProductCategoryCreatePage";


When("User visit the product category page", () => {
    ProductCategoryListPage.visit();
});

Then("User should go to the product category list page", () => {
    ProductCategoryListPage.checkProductCategoryListPage();
});

When("User create a new product category with name {string}", (name: string) => {
    ProductCategoryCreatePage.visit();
    ProductCategoryCreatePage.fillName(name);
    ProductCategoryCreatePage.fillRemovalStrategy("fifo");
    ProductCategoryCreatePage.clickSaveButton();
});

Then("User should see the new product category with name {string} in the list", (name: string) => {
    ProductCategoryListPage.visit();
    ProductCategoryListPage.checkProductCategoryExists(name);
});

When("User delete the product category with name {string}", (name: string) => {
    ProductCategoryListPage.visit();
    ProductCategoryListPage.selectProductCategory(name);
    ProductCategoryListPage.deleteSelectedProductCategories();
});

Then("User should not see the product category with name {string} in the list", (name: string) => {
    ProductCategoryListPage.checkProductCategoryNotExists(name);
});

When("User update the product category with name {string} to {string}", (oldName: string, newName: string) => {
    ProductCategoryListPage.visit();
    ProductCategoryListPage.editProductCategory(oldName);
    ProductCategoryCreatePage.fillName(newName);
    ProductCategoryCreatePage.clickSaveButton();
});

After({ tags: "@product-category" }, () => {
    ProductCategoryListPage.visit();
    ProductCategoryListPage.selectAllProductCategoriesExceptDefaults();
    ProductCategoryListPage.deleteSelectedProductCategories();
});

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import newReceiptCreationPage from '../../pages/NewReceiptCreationPage';

When("User visits the Receipts create page", () => {
    newReceiptCreationPage.visitNewReceiptCreationPage();
});

When("User creates a new receipt with valid data", () => {
    newReceiptCreationPage.createNewReceipt();
    newReceiptCreationPage.fillReceiptDetails();
    newReceiptCreationPage.addProductToOperationsTab('Cheese Cake', 1);
    newReceiptCreationPage.clickMarkasTodoButton();
    newReceiptCreationPage.clickValidateButton();
    newReceiptCreationPage.printReceipt();
});

Then("User should be able to see the receipt created successfully", () => {
    newReceiptCreationPage.checkReceiptCreation();
});

When("User fills in the receipt details and attempts to save with zero quantity", () => {
    newReceiptCreationPage.createNewReceipt();
    newReceiptCreationPage.fillReceiptDetails();
    newReceiptCreationPage.addProductToOperationsTab('Laptop', 0);
    newReceiptCreationPage.clickValidateButton();
});

Then("An error message should be displayed", () => {
    newReceiptCreationPage.checkErrorMessage();
});
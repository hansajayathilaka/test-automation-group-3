import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import newReceiptCreationPage from '../../pages/NewReceiptCreationPage';


When("User visits the Receipts create page", () => {
    newReceiptCreationPage.visitNewReceiptCreationPage();
});

When("User creates a new receipt with valid data", () => {
    newReceiptCreationPage.createNewReceipt();
});

Then("User should be able to see the receipt created successfully", () => {        
    newReceiptCreationPage.checkReceiptCreation();
});

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NewReceiptCreationPage from '../../pages/NewReceiptCreationPage';

When("User visits the Receipts create page",()=>{
    NewReceiptCreationPage.visitNewReceiptCreationPage();
})

When("User creates a new receipt with valid data",()=>{
    NewReceiptCreationPage.CreateNewReceipt();
})

Then("User should be able to see the receipt created successfully",()=>{        
    NewReceiptCreationPage.checkReceiptCreation();
})


import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NewReceiptCreationPage from '../../pages/NewReceiptCreationPage';

When("No Receipts are available",()=>{
    NewReceiptCreationPage.checkReceiptsWindow();
})

Then("User should be able to create a new receipt",()=>{        
    NewReceiptCreationPage.CreateNewReceipt();
})


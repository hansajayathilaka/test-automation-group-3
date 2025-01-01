import { When } from "@badeball/cypress-cucumber-preprocessor";
import NewReceiptCreationPage from '../../pages/NewReceiptCreationPage';

When("The user clicks on the Inventory Item",()=>{
    NewReceiptCreationPage.clickInventoryItem();
})
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NewDeliveryCreationPage from '../../pages/newDelieveryCreationPage';
import ProductViewPage from "../../pages/ProductViewPage";

When("User navigates to the new delieveries page", () => {
    NewDeliveryCreationPage.visitNewDelieveryCreationPage();
})

When("User creates a new delievery", () => {
    NewDeliveryCreationPage.createNewDelievery();
});

Then("User should be able to see the delievery created successfully", () => {
    NewDeliveryCreationPage.checkDelieveryCreation();
})



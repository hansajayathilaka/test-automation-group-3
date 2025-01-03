import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import procurementReplenishmentListPage from "../../pages/ProcurementReplenishmentListPage";

When("User visit the replenishment page", () => {
    procurementReplenishmentListPage.visit();
});

Then("User should go to the replenishment list page", () => {
    procurementReplenishmentListPage.checkProcurementReplenishmentListPage();
});

When('User click on the create new replenishment button', () => {
    procurementReplenishmentListPage.clickCreateNewReplenishmentButton();
});

Then('User should see new row in the replenishment list', () => {
    procurementReplenishmentListPage.checkNewRowInReplenishmentList();
})

When('User selects a product from the new row', () => {
    procurementReplenishmentListPage.selectProductDetailsInReplenishmentRow();
})

Then('Product details should be displayed in the replenishment form', () => {
    procurementReplenishmentListPage.validateProductDetailsInReplenishmentForm();
})






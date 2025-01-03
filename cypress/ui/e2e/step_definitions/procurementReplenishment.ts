import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import procurementReplenishmentListPage from "../../pages/ProcurementReplenishmentListPage";

When("User visit the replenishment page", () => {
    procurementReplenishmentListPage.visit();
});

Then("User should go to the replenishment list page", () => {
    procurementReplenishmentListPage.checkProcurementReplenishmentListPage();
});

When('User click on the create new replenishment button', () => {
    procurementReplenishmentListPage.clickOnButton(".o_list_button_add");
});

Then('User should see new row in the replenishment list', () => {
    procurementReplenishmentListPage.checkRowInReplenishmentList(1);
})

When('User clicks on the discard button', () => {
    procurementReplenishmentListPage.clickOnButton(".o_list_button_discard");
})

Then('User should see the new row removed from the replenishment list', () => {
    procurementReplenishmentListPage.checkRowInReplenishmentList(0);
})

When('User selects a product from the new row', () => {
    procurementReplenishmentListPage.selectProductDetailsInReplenishmentRow();
})

Then('Product details should be displayed in the replenishment form', () => {
    procurementReplenishmentListPage.validateProductDetailsInReplenishmentForm("Replenishment Test Product");
})

Then('User should see the on hand quantity of the product', () => {
    procurementReplenishmentListPage.validateOnHandQuantity("10.00");
})

Then('User should see the forecast quantity of the product', () => {
    procurementReplenishmentListPage.validateForecastQuantity("10.00");
})

When('User specifies the minimum quantity below the onhand quantity', () => {
    procurementReplenishmentListPage.specifyQuantity("product_min_qty", "5");
})

Then('User should see only the Snooze button', () => {
    procurementReplenishmentListPage.validateButton("Snooze");
})

When('User specifies the minimum quantity over the onhand quantity', () => {
    procurementReplenishmentListPage.specifyQuantity("product_min_qty", "12");
})

Then('User should see the Automate button', () => {
    procurementReplenishmentListPage.validateButton("Automate");
})

Then('User should see the Order button', () => {
    procurementReplenishmentListPage.validateButton("Order");
})

Then('User should see the Snooze button', () => {
    procurementReplenishmentListPage.validateButton("Snooze");
})
















import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import VerifyDeliveryStatusesPage from "../../pages/VerifyDeliveryStatusesPage";

When("User makes delivery as to do", () => {
    VerifyDeliveryStatusesPage.changeDraftDelieveryStatusToDo();
});

Then("Status change to Waiting and Product Availability to Not Available", () => {
    VerifyDeliveryStatusesPage.checkProductAvailabilityAndStatusChagneToDo();
});

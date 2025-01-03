class VerifyDeliveryStatusesPage {
  changeDraftDelieveryStatusToDo() {
    // click on the first row
    cy.get(".o_data_row").first().click();

    // Click on the mark as to do button
    cy.get('[name="action_confirm"]').click();
    cy.log("Mark as to do button clicked");
  }

  checkProductAvailabilityAndStatusChagneToDo() {
    cy.contains("Check Availability").should("exist");
    cy.contains("Waiting").invoke("css", "color").should("eq", "rgb(0, 0, 0)");
    cy.contains("Not Available").invoke("css", "color").should("eq", "rgb(210, 63, 58)");
  }
}

export default new VerifyDeliveryStatusesPage();

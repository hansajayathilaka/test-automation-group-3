class InventoryOverviewPage {
  visit() {
    const uiBaseUrl = Cypress.env("UI_BASE_URL");
    Cypress.config("baseUrl", uiBaseUrl);

    // Open the Inventory Page
    cy.visit("/odoo/inventory");
  }

  verifyInitialOverview() {
    // Verfications in the Initial Inventory Overview Page
    cy.log("Navigated to the Inventory Overview Page");
    cy.get("article:first-of-type span.fw-bold.fs-4")
      .should("have.text", "Receipts")
      .should("be.visible");
    cy.log("Receipts Section is visible");
    cy.get(
      "body > div.o_action_manager > div > div.o_content > div > article:nth-child(2) > div.px-2 > a > span"
    )
      .should("have.text", "Delivery Orders")
      .should("be.visible");
    cy.log("Delivery Orders Section is visible");
    cy.get(
      "button.btn.btn-primary.oe_kanban_action[name='get_action_picking_tree_ready']"
    ).should("be.enabled");
    cy.log("Open Buttons are enabled");
  }
}

export default new InventoryOverviewPage();

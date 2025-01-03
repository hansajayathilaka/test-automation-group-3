class ProductViewPage {
  visit() {
    // Open the Inventory Page
    cy.visit("/odoo/inventory");

    // Open the Products Page
    cy.openMenu("Products", "stock.menu_stock_inventory_control");
    cy.openMenu("Products", "stock.menu_product_variant_config_stock");
  }

  verifyInitialProjectView() {
    // Verifications in the Empty Products Page
    cy.log("Navigated to the Products View Page");
    cy.get("button.btn.btn-primary.o-kanban-button-new").should("be.enabled");
    cy.log("New Button is Enabled");
    cy.get(".o_view_nocontent p").then(($pTags) => {
      expect($pTags.eq(0)).to.contain.text(
        "No product found. Let's create one!"
      );
      expect($pTags.eq(1)).to.contain.text(
        "Track your stock quantities by creating storable products."
      );
    });
    cy.log("Message Verified Successfully!");
  }
}

export default new ProductViewPage();

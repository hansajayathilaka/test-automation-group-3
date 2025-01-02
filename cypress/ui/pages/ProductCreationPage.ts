class ProductCreationPage {
  visit() {
    // Open the Inventory Page
    cy.visit("/odoo/inventory");

    // Verfications in the Inventory Overview Page
    cy.get("article:first-of-type span.fw-bold.fs-4").should("have.text","Receipts").should("be.visible");
    cy.log("Receipts Section is visible");
    cy.get("body > div.o_action_manager > div > div.o_content > div > article:nth-child(2) > div.px-2 > a > span").should("have.text","Delivery Orders").should("be.visible");
    cy.log("Delivery Orders Section is visible");
    cy.get("button.btn.btn-primary.oe_kanban_action[name='get_action_picking_tree_ready']").should("be.enabled");
    cy.log('Open Button is enabled');

    // Open the Products Page
    cy.openMenu("Products", "stock.menu_stock_inventory_control");
    cy.openMenu("Products", "stock.menu_product_variant_config_stock");
  }

  createNewProduct() {
    // Verifications in the Empty Products Page
    cy.get("button.btn.btn-primary.o-kanban-button-new").should("be.enabled");
    cy.log('New Btton is Enabled');
    cy.get(".o_view_nocontent p").then(($pTags) => {
      expect($pTags.eq(0)).to.contain.text(
        "No product found. Let's create one!"
      );
      expect($pTags.eq(1)).to.contain.text(
        "Track your stock quantities by creating storable products."
      );
    });
    cy.log('Message Verified Successfully!');

    // Create a New Product
    cy.get("button.btn.btn-primary.o-kanban-button-new").should("be.enabled").click();
    cy.get('#name_0').type('Laptop');

    cy.get('#sale_ok_0').should('be.checked');
    cy.log('Sales is Checked');

    cy.get('#sale_ok_0').should('be.checked');
    cy.log('Sales is Checked');


  }


}

export default new ProductCreationPage();

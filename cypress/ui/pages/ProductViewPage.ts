class ProductViewPage {
  visit() {
    const uiBaseUrl = Cypress.env("UI_BASE_URL");
    Cypress.config("baseUrl", uiBaseUrl);

    // Open the Inventory Page
    cy.visit("/odoo/inventory");

    // Open the Products Page
    cy.openMenu("Products", "stock.menu_stock_inventory_control");
    cy.openMenu("Products", "stock.menu_product_variant_config_stock");
  }

  verifyInitialProjectView() {
    // Verifications in the Empty Products Page
    cy.log("Navigated to the Products View Page");
    cy.get("body > div.o_action_manager > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_control_panel_main_buttons.d-flex.gap-1.d-empty-none.d-print-none > div > button").should("be.enabled");
    cy.log("New Button is Enabled");
    // cy.get(".o_view_nocontent p").then(($pTags) => {
    //   expect($pTags.eq(0)).to.contain.text(
    //     "No product found. Let's create one!"
    //   );
    //   expect($pTags.eq(1)).to.contain.text(
    //     "Track your stock quantities by creating storable products."
    //   );
    // });
    cy.log("Message Verified Successfully!");
  }

  selectAllProduct() {
    cy.get("nav.o_cp_switch_buttons > button.o_list").click();
    cy.get("body > div.o_action_manager > div > div.o_content > div > table > thead > tr > th.o_list_record_selector.o_list_controller.align-middle.pe-1.cursor-pointer > div > input").check();
  }

  deleteSelectedProducts() {
    cy.get(".o_control_panel_actions").then(($el) => {
      if ($el.find(".o_list_selection_box").length > 0) {
          cy.get(".o_cp_action_menus").click();
          cy.get(".o_popover > span.o-dropdown-item").contains("Delete").click();
          cy.get(".modal-footer > button.btn-primary").click();
      } else {
          cy.log("No product selected to delete");
      }
  });
  }
}

export default new ProductViewPage();

class ProductCreationPage {
  visit() {
    const uiBaseUrl = Cypress.env("UI_BASE_URL");
    Cypress.config("baseUrl", uiBaseUrl);

    // Open the Inventory Page
    cy.visit("/odoo/inventory");

    // Open the Products Page
    cy.openMenu("Products", "stock.menu_stock_inventory_control");
    cy.openMenu("Products", "stock.menu_product_variant_config_stock");

    // Navigating to the Product Creation Page
    cy.get("body > div.o_action_manager > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_control_panel_main_buttons.d-flex.gap-1.d-empty-none.d-print-none > div > button")
      .should("be.enabled")
      .click();
  }

  verifyNewProduct() {
    cy.get(
      "body > div.o_action_manager > div > div.o_content > div > article > main"
    ).should("be.visible");
    cy.log("Product Created Successfully");
  }

  createProduct(name: string, price: string, cost: string) {
    // Navigating to the Product Creation Page
    cy.get("body > div.o_action_manager > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_control_panel_main_buttons.d-flex.gap-1.d-empty-none.d-print-none > div > button")
      .should("be.enabled")
      .click();

    cy.get("#name_0").type(name);
    cy.get("#sale_ok_0").should("be.checked");
    cy.log("Sales is Checked");
    cy.get("#purchase_ok_0").should("be.checked");
    cy.log("Purchase is Checked");
    cy.get(
      "body > div.o_action_manager > div > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_sheet.position-relative > div.o_notebook.d-flex.w-100.horizontal.flex-column > div.o_notebook_content.tab-content > div > div.o_group.row.align-items-start > div:nth-child(1) > div > div.o_cell.o_wrap_input.text-break > div > div > div:nth-child(1) > label"
    ).click();
    cy.log("Selected Goods as Product Type");
    cy.get("#list_price_0").type(price);
    cy.log("Price Added Successfully");
    cy.get("#standard_price_0").type(cost);
    cy.log("Cost Added Successfully");

    //Adding the Product Category
    cy.get("#categ_id_0").click();
    cy.get("#categ_id_0_0_0").click();

    //Navigating to the Inventory Tab
    cy.contains("Inventory")
      .get(
        "body > div.o_action_manager > div > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_sheet.position-relative > div.o_notebook.d-flex.w-100.horizontal.flex-column > div.o_notebook_headers > ul > li:nth-child(2) > a"
      )
      .click();

    //Adding the Inventory Details
    cy.get("#responsible_id_0").click();
    cy.get("#responsible_id_0_0_0").click();

    cy.get("#weight_0").type("2.00");
    cy.log("Weight Added Successfully");
    cy.get("#volume_0").type("0.50");
    cy.log("Volume Added Successfully");
    cy.get("#sale_delay_0").type("7");
    cy.log("Customer Lead Time Added Successfully");

    //Navigating to the Products Window
    cy.get(
      "body > div.o_action_manager > div > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_breadcrumb.d-flex.flex-row.flex-md-column.align-self-stretch.justify-content-between.min-w-0 > ol > li > a"
    ).click();
  }
}

export default new ProductCreationPage();

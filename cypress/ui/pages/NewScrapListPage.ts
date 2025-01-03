class NewScrapPListPage {
    visit() {
      const uiBaseUrl = Cypress.env("UI_BASE_URL");
      Cypress.config("baseUrl", uiBaseUrl);
  
      // Open the Inventory Page
      cy.visit("/odoo/inventory");
  
      // Open the Products Page
      cy.openMenu("Operations", "stock.menu_stock_warehouse_mgmt");
      cy.openMenu("Scrap", "stock.menu_stock_scrap");
  
      // Navigating to the Product Creation Page
      cy.get("body > div.o_action_manager > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_control_panel_main_buttons.d-flex.gap-1.d-empty-none.d-print-none > div > button")
        .should("be.enabled")
        .click();
    }
  
    AddNewAdjustment() {
      // Adding the General Information
      cy.get("#product_id_0").click();
      cy.get("#product_id_0_0_0").click();
      cy.get("#scrap_qty_0").type("10");
      cy.get("#scrap_reason_tag_ids_0").click();
      cy.get("#scrap_reason_tag_ids_0_0_0").click();
      cy.get("#origin_0").type("Select your source");
      cy.get("body > div.o_action_manager > div > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_statusbar.position-relative.d-flex.justify-content-between.mb-0.mb-md-2.pb-2.pb-md-0 > div.o_statusbar_buttons.d-flex.align-items-center.align-content-around.flex-wrap.gap-1 > button > span").click();
      cy.contains("Confirm").click();  

    }
  
  }
  
  export default new NewScrapPListPage();
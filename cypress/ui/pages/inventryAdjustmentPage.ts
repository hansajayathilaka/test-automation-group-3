class InventryAdjustmentPage {
    visit() {
      const uiBaseUrl = Cypress.env("UI_BASE_URL");
      Cypress.config("baseUrl", uiBaseUrl);
  
      // Open the Inventory Page
      cy.visit("/odoo/inventory");
  
      // Open the Products Page
      cy.openMenu("Operations", "stock.menu_stock_warehouse_mgmt");
      cy.openMenu("Physical Inventory", "stock.menu_action_inventory_tree");
  
      // Navigating to the Product Creation Page
      cy.get("body > div.o_action_manager > div > div.o_control_panel.d-flex.flex-column.gap-3.px-3.pt-2.pb-3 > div > div.o_control_panel_breadcrumbs.d-flex.align-items-center.gap-1.order-0.h-lg-100 > div.o_control_panel_main_buttons.d-flex.gap-1.d-empty-none.d-print-none > div > button.btn.btn-primary.o_list_button_add")
        .should("be.enabled")
        .click();
    }
  
    AddNewAdjustment() {
      // Adding the General Information
      cy.get("body > div.o_action_manager > div > div.o_content > div > table > tbody > tr.o_data_row.o_selected_row > td.o_data_cell.cursor-pointer.o_field_cell.o_list_many2one.o_required_modifier > div > div.o_field_many2one_selection > div > div > input").click();
      cy.get("#autocomplete_0_0").click();
      cy.get("body > div.o_action_manager > div > div.o_content > div > table > tbody > tr.o_data_row.o_selected_row > td.o_data_cell.cursor-pointer.o_field_cell.o_list_many2one > div > div.o_field_many2one_selection > div > div > input");
      cy.get("body > div.o_action_manager > div > div.o_content > div > table > tbody > tr.o_data_row.o_selected_row > td.o_data_cell.cursor-pointer.o_field_cell.o_list_number.o_counted_quantity_widget_cell > div > input").type("10");
      cy.get("body > div.o_action_manager > div > div.o_content > div > table > tbody > tr.o_data_row.o_selected_row > td:nth-child(7) > div > div > input");
      cy.get("body > div.o_action_manager > div > div.o_content > div > table > tbody > tr.o_data_row.o_selected_row > td:nth-child(9) > div > button:nth-child(2) > span").click();
    }
  
  }
  
  export default new InventryAdjustmentPage();
  
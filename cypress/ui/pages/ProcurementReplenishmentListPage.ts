class ProcurementReplenishmentListPage {

    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);
        cy.visit("/odoo/inventory");
        cy.openMenu("Operations", "stock.menu_stock_warehouse_mgmt");
        cy.openMenu("Replenishment", "stock.menu_reordering_rules_replenish");
    }

    checkProcurementReplenishmentListPage() {
        cy.get(".o_last_breadcrumb_item > span:nth-child(1)").should("have.text", "Replenishment");
    }

    clickOnButton(buttonName: string) {
        cy.get(`${buttonName}`).click();
    }

    checkRowInReplenishmentList(rowCount: number) {
        cy.get(".o_data_row").should("have.length", rowCount);
    }

    selectProductDetailsInReplenishmentRow() {
        cy.get(".o_field_widget[name='product_id']").click();
        cy.get(".ui-menu-item").should("be.visible");
        cy.get("body > div.o_action_manager > div > div.o_content.o_component_with_search_panel > div.o_list_renderer.o_renderer.table-responsive > table > tbody > tr > td.o_data_cell.cursor-pointer.o_field_cell.o_list_many2one.o_required_modifier > div > div.o_field_many2one_selection > div > div > ul > li:nth-child(1)").click();
    }

    validateProductDetailsInReplenishmentForm(productName: string) {
        cy.get(".o_field_widget[name='product_id']").should("have.text", `${productName}`);
    }

    validateOnHandQuantity(valueOnHand: string) {
        cy.get(".o_field_widget[name='qty_on_hand']").find("span").should("have.text", `${valueOnHand}`);
    }

    validateForecastQuantity(valueForcast: string) {
        cy.get(".o_field_widget[name='qty_forecast']").find("span").should("have.text", `${valueForcast}`);
    }

    specifyQuantity(attributeName: string, value: string) {
        cy.get(`.o_field_widget[name='${attributeName}']`).type(value);
    }

    validateButton(buttonName: string) {
        cy.contains("span", `${buttonName}`).should('be.visible');
    }

    clickOnDeleteButton() {
        cy.get("body > div.o_action_manager > div > div.o_content.o_component_with_search_panel > div.o_list_renderer.o_renderer.table-responsive > table > thead > tr > th.o_list_record_selector.o_list_controller.align-middle.pe-1.cursor-pointer").click();
        cy.get(".o_cp_action_menus").click();
        cy.contains(".dropdown-item", "Delete").click();
        cy.get("#dialog_0 > div > div > div > footer > button.btn.btn-primary").click();



    }

}


export default new ProcurementReplenishmentListPage()

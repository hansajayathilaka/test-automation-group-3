class ProductCategoryCreatePage {
    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);

        cy.visit("/odoo/inventory");
        cy.openMenu("Configuration", "stock.menu_stock_config_settings");
        cy.openMenu("Product Categories", "stock.menu_product_category_config_stock");
        cy.get("button.btn-primary.o_list_button_add").click();
    }

    fillName(name: string) {
        cy.get("input#name_0").clear();
        cy.get("input#name_0").type(name);
    }

    fillRemovalStrategy(removalStrategy: string) {
        cy.get("input#removal_strategy_id_0").clear();
        cy.get("input#removal_strategy_id_0").type(removalStrategy).type("{enter}");
    }

    clickSaveButton() {
        cy.get(".o_form_button_save").click();
    }
}


export default new ProductCategoryCreatePage()

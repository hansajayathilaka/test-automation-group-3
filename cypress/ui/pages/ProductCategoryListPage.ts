class ProductCategoryListPage {
    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);

        cy.visit("/odoo/inventory");
        cy.openMenu("Configuration", "stock.menu_stock_config_settings");
        cy.openMenu("Product Categories", "stock.menu_product_category_config_stock");
    }

    checkProductCategoryListPage() {
        cy.get(".o_last_breadcrumb_item > span:nth-child(1)").should("have.text", "Product Categories");
    }

    checkProductCategoryExists(name: string) {
        cy.get("td.o_data_cell").contains(name).should("exist");
    }

    checkProductCategoryNotExists(name: string) {
        cy.get("td.o_data_cell").contains(name).should("not.exist");
    }

    selectProductCategory(name: string) {
        cy.get("td.o_data_cell").contains(name).parent().find("td.o_list_record_selector input").check();
    }

    selectAllProductCategoriesExceptDefaults() {
        cy.get("td.o_data_cell").each(($el) => {
            const name = $el.text();
            if (!name.startsWith("All")) {
                cy.wrap($el).parent().find("td.o_list_record_selector input").check();
            }
        });
    }

    deleteSelectedProductCategories() {
        cy.get("o_control_panel_actions").then(($el) => {
            if ($el.find(".o_list_selection_box").length === 0) {
                cy.get(".o_cp_action_menus").click();
                cy.get(".o_popover > span.o-dropdown-item").contains("Delete").click();
                cy.get(".modal-footer > button.btn-primary").click();
            } else {
                cy.log("No product category selected to delete");
            }
        });
    }

    editProductCategory(name: string) {
        cy.get("td.o_data_cell").contains(name).click();
    }
}

export default new ProductCategoryListPage()

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
}

export default new ProductCategoryListPage()

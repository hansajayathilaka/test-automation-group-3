// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />


declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to open the menu
         * @example cy.openMenu("Configuration", "stock.menu_stock_config_settings")
         */
        openMenu(menuName: string, menuId: string): Chainable<Element>;
    }
}

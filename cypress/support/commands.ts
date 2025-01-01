// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*-----------------------------------------------------------------
OpenMenu
Click to menu using Name and XML_ID for this menu
EX: cy.openMenu('Orders','sale.menu_sale_order')
-----------------------------------------------------------------*/
Cypress.Commands.add('openMenu', (menuName, xmlId) => {
    cy.get('[data-menu-xmlid="' + xmlId + '"]')
        .contains(menuName)
        .click({ force: true })
});

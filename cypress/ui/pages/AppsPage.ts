class AppsPage {
    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);
        
        cy.visit('/odoo/apps', { timeout: 60 * 1000 });
    }

    installInventoryApp() {
        cy.get(".o_kanban_renderer").then(($appElements) => {
            const inventoryElement = $appElements.find('article').filter((index, element) => element.innerText.includes('Inventory'));
            if (inventoryElement.find('button:contains("Activate")').length > 0) {
                const activateButton = inventoryElement.find('button').filter((index, button) => button.innerText.includes('Activate'));
                cy.wrap(activateButton).click();
            } else {
                cy.log('Inventory app already installed');
            }
        });
    }

    checkInventoryAppInstalled() {
        this.visit();
        cy.get(".o_kanban_renderer", { timeout: 60 * 1000 }).then(($appElements) => {
            const inventoryElement = $appElements.find('article').filter((index, element) => element.innerText.includes('Inventory'));
            cy.wrap(inventoryElement).should('not.contain', 'Activate');
        });
    }
}


export default new AppsPage();
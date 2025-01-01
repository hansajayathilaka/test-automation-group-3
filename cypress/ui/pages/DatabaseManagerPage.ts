class DatabaseManagerPage {
    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);

        cy.visit('/web/database/manager');
    }

    createDatabaseIfNotExists() {
        cy.get('.container').then(($container) => {
            if ($container.find(".col-lg-6 > form:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)").length > 0) {
                cy.fixture("odoo-db-manager").then((data) => {
                    cy.get('#dbname').type(data.dbname);
                    cy.get('#login').type(data.adminEmail);
                    cy.get('#password').type(data.adminPassword);
                    cy.get('input.btn:nth-child(10)').click();
                });
                this.visit();
            } else {
                cy.log('Database already exists');
            }
        });
    }

    checkDatabaseExists() {
        cy.fixture("odoo-db-manager").then((data) => {
            cy.get('a.d-block').should('contain', data.dbname);
        });
    }
}

export default new DatabaseManagerPage();

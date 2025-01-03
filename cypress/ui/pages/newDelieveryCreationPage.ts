class NewDeliveryCreationPage {

    visitNewDelieveryCreationPage() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);
        
        // User clicks on the inventory icon. 
        cy.visit('/odoo/inventory');
        // User should navigate to the inventory window
        cy.url().should('include', '/odoo/inventory');
        
        // User clicks on the Operations Button in the Navigation Bar.
        cy.get('[data-hotkey="2"]').click();
        //The Operations dropdown should open. 
        cy.contains('Deliveries').should('exist');

        // User clicks on the Delieveries button in the Operations Drop Down 
        cy.get('[href="/odoo/action-263"]').click();
        // The user should navigate to the Deliveries window.
        cy.url().should('include', '/odoo/deliveries');

        // Verify the delivereis window and delieveries table
        // The deliveries table, new button and the search bar should be included in the deliveries window. 
        cy.contains('Deliveries').should('exist');
        const columns = ['Reference', 'Contact', 'Scheduled Date', 'Source Document', 'Status'];
        columns.forEach(column => {
            cy.contains(column).should('exist'); // Check all table columns
          });
        
        // User clicks on the new button.
        cy.get('[data-bounce-button]').click();
        // The user should navigate to the new Deliveries address
        cy.url().should('include', '/odoo/deliveries/new');
    }

    createNewDelievery() {
        // verify the new deliveries window
        cy.contains('New Delivery').should('exist');

        /* User completes the delivery details */
        // - Delivery Address: Select from dropdown
        cy.get('#partner_id_0').click();
        cy.get('#partner_id_0_0_0').click();
        // - Scheduled Date: Select from date picker
        cy.get('#scheduled_date_0').click();
        cy.get('.o_header_part').then(($header) => {
            if (!$header.text().includes('January 2025')) {
              cy.get('.o_next').click(); // Replace with the selector for the "Next" button
              cy.get('.o_header_part').should('contain', 'January 2025');
            }
        });
        cy.contains('.o_date_item_cell','8').click();
        // - Operation Type: Select from dropdown
        cy.get('#picking_type_id_0').click();
        cy.get('#picking_type_id_0_0_1').click();
        // - Source Document: Type an example text
        cy.get('[placeholder="e.g. PO0032"]').type('PO0032');
        // - Select the Options tab
        cy.contains('Add a line').click().type('mouse');
        cy.contains('Create "mouse"').click();
        // - Demand: Type "2"
        cy.get('[inputmode="decimal"]').click().type('2');
        // - Click on the "Deliveries" navigation link
        cy.get('[href="/odoo/deliveries"]').click();
        cy.url().should('include', '/odoo/deliveries');
        cy.log('Delivery creation successfull');
    }

    checkDelieveryCreation() {
        cy.visit('/odoo/deliveries');

        const columns = ['Reference', 'Contact', 'Scheduled Date', 'Source Document', 'Status'];
        columns.forEach(column => {
            cy.contains(column).should('exist');
        });

        // sort the table rows decending
        cy.contains('Reference').click().click();
        
        // check the first row
        const newDraftDelievery = ['Administrator', 'PO0032', 'Draft'];
        newDraftDelievery.forEach(delieveryValues => {
            cy.contains(delieveryValues).should('exist');
        });
    }
}

export default new NewDeliveryCreationPage();

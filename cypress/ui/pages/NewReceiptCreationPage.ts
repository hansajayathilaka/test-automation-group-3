class NewReceiptCreationPage{
    visitNewReceiptCreationPage(){
      cy.visit('/odoo/inventory');

        //User clicks on the Open button for Receipts section
        cy.get("body > div.o_action_manager > div > div.o_content > div > article:nth-child(1) > div.px-2 > div.row.mt-3 > div:nth-child(1) > button").click();
 
        //Verify the Receipts Window
        cy.contains('Receipts').should('exist');
        cy.get(".btn.btn-primary.o_list_button_add").contains('New').should('be.enabled'); // New button
        cy.contains("No receipt yet! Create a new one.").should('exist'); // Info message
        const columns = ['Reference', 'Contact', 'Scheduled Date', 'Source Document', 'Status'];
        columns.forEach(column => {
          cy.contains(column).should('exist'); // Check all table columns
        });
    }

    CreateNewReceipt(){
        cy.get(".btn.btn-primary.o_list_button_add").click();
        
        //Verify the New Receipt Window
        cy.contains('New Receipt').should('exist');

        // Fill in receipt details
       cy.get('#partner_id_0').should('have.attr', 'role', 'combobox').type('Test User').type('{enter}'); 
       cy.get('#partner_id_0').should('have.value', 'Test User');
       cy.get('#picking_type_id_0').should('have.attr', 'role', 'combobox').type('test-automation: Delivery Orders'); 
       cy.get('#picking_type_id_0').should('have.value', 'test-automation: Delivery Orders');
       cy.get('#scheduled_date_0').click();
       cy.get('.o_header_part').then(($header) => {
        if (!$header.text().includes('January 2025')) {
          cy.get('.o_next').click(); 
          cy.get('.o_header_part').should('contain', 'January 2025');
        }
      });
      cy.contains('.o_date_item_cell', '2').click(); 
      cy.get('#origin_0').type('PO00032'); 
  
  
      // Fill the details in Operations Tab
      cy.contains('Operations').get('a[name="operations"]').click();
      cy.contains('Add a line').click();
      cy.get('td[name="product_id"]').click().get('#autocomplete_0_0').contains('Cheese Cake').click();
      cy.get('td[name="product_uom_qty"]').type('1');
  
      // Fill the details in Additional Info Tab
      cy.contains('Additional Info').click();
      
      // Fill the details in Note Tab
      cy.contains('Note').click();
      cy.get('.note-editable.odoo-editor-editable').type('Sample note');

      // Click Mark as Todo button
      cy.get('button[name="action_confirm"]').contains('Mark as Todo').click();
      cy.contains('Ready').should('exist'); 
  
      // Click Validate button
      cy.get('button[name="button_validate"]').contains('Validate').click();
      cy.contains('Done').should('exist'); // Verify Done label
  
      // Print receipt
      cy.get('button[name="209"]').contains('Print').click();
    }

    checkReceiptCreation() {
      cy.get('body > div.o_action_manager > div > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_sheet.position-relative > div.oe_title > h1 > div.o_field_widget.o_readonly_modifier.o_field_char > span')
        .invoke('text')
        .then((innerText) => {
          // Convert the innerText by replacing '/' with '_'
          const formattedText = innerText.replace(/\//g, "_");
    
          // Construct the folder name
          const folderName = `Delivery Slip -  - ${formattedText}`;
          cy.log(`Folder Name: ${folderName}`);
    
          // Use the folder name for verifying the download
          cy.verifyDownload(`${folderName}.pdf`);
          cy.log('Receipt downloaded successfully');
        });
    }
    
}

export default new NewReceiptCreationPage()

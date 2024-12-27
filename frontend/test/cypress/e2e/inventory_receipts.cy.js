describe('Verify the New Receipt Creation when there are no Receipts Created',()=>{

  beforeEach(()=>{
      cy.visit('https://test-automation.odoo.com/');
      cy.get('input#login').type('test.user@example.com');
      cy.get('input#password').type('**********');
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/odoo');
  })

 
  
  
})
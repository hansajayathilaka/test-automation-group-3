
describe('API Testing with Cypress', () => {
  const username = 'admin';
  const password = 'password';
  const baseUrl = 'http://localhost:7081';

  it('Should log in and fetch data from a secured endpoint', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/api/books`, 
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.be.an('array').that.is.empty; 
    });
  });

  });
  
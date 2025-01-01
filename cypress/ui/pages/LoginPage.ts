class LoginPage {
    visit() {
        const uiBaseUrl = Cypress.env('UI_BASE_URL');
        Cypress.config('baseUrl', uiBaseUrl);
        
        cy.visit('/web/login');
    }

    fillEmail(value: string) {
        const field = cy.get('input[name="login"]');
        field.clear();
        field.type(value);
        return this;
    }

    fillPassword(value: string) {
        const field = cy.get('input[name="password"]');
        field.clear();
        field.type(value);
        return this;
    }

    submit() {
        const button = cy.get('button[type="submit"]');
        button.click();
    }
}

export default new LoginPage();

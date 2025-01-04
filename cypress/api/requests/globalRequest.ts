
class GlobalRequest {
    username?: string;
    password?: string;

    public loginAsAdmin() {
        this.username = Cypress.env('API_ADMIN_USERNAME');
        this.password = Cypress.env('API_ADMIN_PASSWORD');
    }

    public loginAsUser() {
        this.username = Cypress.env('API_USER_USERNAME');
        this.password = Cypress.env('API_USER_PASSWORD');
    }

    public loginAsUnauthorized() {
        this.username = undefined;
        this.password = undefined;
    }

    public checkReturnABook(reqId: string, _book: any): void {
        cy.get(reqId)
            .its('body').should("be.an", "object")
            .then((book: {id?: any, title?: any, author?: any}) => {
                expect(book).to.have.property("id");
                expect(book.id).to.be.a("number");
                expect(book).to.have.property("title");
                expect(book.title).to.be.a("string");
                expect(book.title).to.equal(_book.title);
                expect(book).to.have.property("author");
                expect(book.author).to.be.a("string");
                expect(book.author).to.equal(_book.author);
            });
    }

    public checkReturnAListOfBooks(reqId: string): void {
        cy.get(reqId)
            .its('body').should("be.an", "array")
            .then((books: any[]) => {
                books.forEach((book, index) => {
                    expect(book).to.have.property("id");
                    expect(book.id).to.be.a("number");
                    expect(book).to.have.property("title");
                    expect(book.title).to.be.a("string");
                    expect(book).to.have.property("author");
                    expect(book.author).to.be.a("string");
                });
            });
    }

    public checkStatus(reqId: string, status: number = 0): any {
        return cy.get(reqId).then((data) => {
            expect(data).to.have.property('status', status);
        });
    }

    public sendRequest(reqId: string, options: { method: string, url: string, body?: any}): void {
        const apiBaseUrl = Cypress.env('API_BASE_URL');
        Cypress.config('baseUrl', apiBaseUrl);

        cy.request({
            method: options.method,
            url: options.url,
            body: options.body,
            failOnStatusCode: false,
            ...(
                this.username && this.password
                ? { auth: { username: this.username, password: this.password } }
                : {}
            ),
        }).as(reqId);
    }
}

export default new GlobalRequest();

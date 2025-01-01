abstract class BaseRequest {
    urlPath: string;
    baseUrl: string;

    username?: string;
    password?: string;

    constructor(url: string) {
        if (url[0] !== '/') {
            url = '/' + url;
        }
        this.urlPath = url;
        this.baseUrl = Cypress.env('API_BASE_URL');
    }

    public loginAsAdmin() {
        this.username = Cypress.env('API_ADMIN_USERNAME');
        this.password = Cypress.env('API_ADMIN_PASSWORD');
    }

    public loginAsUser() {
        this.username = Cypress.env('API_USER_USERNAME');
        this.password = Cypress.env('API_USER_PASSWORD');
    }
    
    protected initRequest(options: Partial<{
            id: string,
            method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
            queryParams?: object ,
            headers?: object,
            body?: any,
        }>
    ) {
        const url = this.baseUrl + this.urlPath;

        cy.request({
            method: options.method,
            url: url,
            qs: options.queryParams ?? {},
            headers: options.headers ?? {},
            body: options.body ?? "",
            failOnStatusCode: false,
            ...(
                this.username && this.password ?
                { 
                    auth: { 
                        username: this.username,
                        password: this.password,
                    }
                }
                : {}
            )
        }).as(options.id ?? 'request');
    }

    protected checkStatus(id: string, status: number): any {
        return cy.get('@' + id).then((data) => {
            expect(data).to.have.property('status', status);
        });
    }
}

export default BaseRequest;

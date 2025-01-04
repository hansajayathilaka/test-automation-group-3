import globalRequest from "./globalRequest";

class CreateBookRequest {
    url = "api/books/";

    createBookApi(reqId: string, book: any): void {
        const apiBaseUrl = Cypress.env('API_BASE_URL');
        Cypress.config('baseUrl', apiBaseUrl);
        
        globalRequest.sendRequest(reqId, {
            method: "POST",
            url: this.url,
            body: book,
        });
    }
}


export default new CreateBookRequest();

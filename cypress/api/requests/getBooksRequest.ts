import globalRequest from "./globalRequest";

class GetBooksRequest {
    url = "api/books/";

    getBooksApi(reqId: string): void {
        const apiBaseUrl = Cypress.env('API_BASE_URL');
        Cypress.config('baseUrl', apiBaseUrl);

        globalRequest.sendRequest(reqId, {
            method: "GET",
            url: this.url,
        });
    }
}

export default new GetBooksRequest();

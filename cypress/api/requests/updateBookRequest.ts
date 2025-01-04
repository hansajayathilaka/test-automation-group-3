import globalRequest from "./globalRequest";


class UpdateBookRequest {
    url = "api/books/";

    updateBookApi(reqId: string, dataReqId: string, book: any) {
        const apiBaseUrl = Cypress.env('API_BASE_URL');
        Cypress.config('baseUrl', apiBaseUrl);
        
        cy.get(dataReqId).then((data: any) => {
            expect(data).to.have.property("body");
            expect(data.body).to.be.an("object");
            expect(data.body).to.have.property("id");
            expect(data.body.id).to.be.a("number");

            globalRequest.sendRequest(reqId, {
                method: "PUT",
                url: this.url + data.body.id,
                body: {...book, id: data.body.id},
            });
        });
    }
}

export default new UpdateBookRequest();

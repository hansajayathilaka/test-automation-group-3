import globalRequest from "./globalRequest";


class DeleteBookRequest {
    url = "api/books/";

    deleteBookApi(reqId: string, dataReqId: string) {
        const apiBaseUrl = Cypress.env('API_BASE_URL');
        Cypress.config('baseUrl', apiBaseUrl);
        
        cy.get(dataReqId).then((data: any) => {
            expect(data).to.have.property("body");
            expect(data.body).to.be.an("object");
            expect(data.body).to.have.property("id");
            expect(data.body.id).to.be.a("number");

            globalRequest.sendRequest(reqId, {
                method: "DELETE",
                url: this.url + data.body.id,
            });
        });
    }
}


export default new DeleteBookRequest();

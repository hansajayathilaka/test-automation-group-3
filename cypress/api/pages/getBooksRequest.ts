import BaseRequest from "./baseRequest";

class GetBooksRequest extends BaseRequest {
    constructor() {
        super("api/books");
    }

    getBooksApi() {
        this.initRequest({
            id: "getBooks",
            method: "GET",
        })
    }

    checkGetBooksReturnUnauthorized() {
        this.checkStatus("getBooks", 401);
    }

    checkGetBooksReturnOk() {
        this.checkStatus("getBooks", 200);
    }

    checkGetBooksReturnNotFound() {
        this.checkStatus("getBooks", 404);
    }

    checkGetBooksReturnListOfBooks() {
        this.checkStatus("getBooks", 200)
            .its('body').should("be.an", "array")
            .then((books: {id?: any, title?: any, author?: any}[]) => {
                for(const book of books) {
                    expect(book).to.have.property("id");
                    expect(book.id).to.be.a("number");
                    expect(book).to.have.property("title");
                    expect(book.title).to.be.a("string");
                    expect(book).to.have.property("author");
                    expect(book.author).to.be.a("string");
                }
            });
    }
}

export default new GetBooksRequest();

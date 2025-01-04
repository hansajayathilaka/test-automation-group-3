import { When } from "@badeball/cypress-cucumber-preprocessor";
import updateBook from "../../requests/updateBookRequest";


When("{string} Update book with title {string} and author {string} as {string}", (dataReq: string, title: string, author: string, reqId: string) => {
    updateBook.updateBookApi(reqId, dataReq, { title, author });
});

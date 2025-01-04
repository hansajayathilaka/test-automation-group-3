import { When } from "@badeball/cypress-cucumber-preprocessor";
import deleteBook from "../../requests/deleteBookRequest";


When("{string} Delete book as {string}", (dataReqId: string, reqId: string) => {
    deleteBook.deleteBookApi(reqId, dataReqId);
});

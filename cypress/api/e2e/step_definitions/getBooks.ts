import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import getBooks from "../../requests/getBooksRequest"
import { get } from "http";


When("Get books as {string}", (reqId: string) => {
    getBooks.getBooksApi(reqId);
});

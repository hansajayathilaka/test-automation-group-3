import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import getBooks from "../../pages/getBooksRequest"
import { get } from "http";


Given("User is logged in as user", () => {
    getBooks.loginAsUser();
});

Given("User is logged in as admin", () => {
    getBooks.loginAsAdmin();
});

When("User sends a get books request", (method: string, urlPath: string) => {
    getBooks.getBooksApi();
});

Then("Unauthorized user receives an unautthorized response", (statusCode: number) => {
    getBooks.checkGetBooksReturnUnauthorized();
});

Then("User receives a list of books", () => {
    getBooks.checkGetBooksReturnListOfBooks();
})

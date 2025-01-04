import { When } from "@badeball/cypress-cucumber-preprocessor";
import createBook from "../../requests/createBookRequest";


When("Create a book with title {string} and author {string} as {string}", (title: string, author: string, reqId: string) => {
    createBook.createBookApi(reqId, { title, author });
});

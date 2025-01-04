import { Then } from "@badeball/cypress-cucumber-preprocessor";
import globalRequest from "../../requests/globalRequest";


Then("{string} user loged in", (userType: 'Admin' | 'Standard' | 'Unauthorized') => {
    if (userType === "Admin") {
        globalRequest.loginAsAdmin();
    } else if (userType === "Standard") {
        globalRequest.loginAsUser();
    } else if (userType === "Unauthorized") {
        globalRequest.loginAsUnauthorized();
    }
});

Then("{string} request return status {int}", (reqId: string, status: number) => {
    globalRequest.checkStatus(reqId, status);
});

Then("{string} request return title {string} and author {string}", (reqId: string, title: string, author: string) => {
    globalRequest.checkReturnABook(reqId, { title, author });
});

Then("{string} request return a list of books", (reqId: string) => {
    globalRequest.checkReturnAListOfBooks(reqId);
});
import {  When, Then } from '@badeball/cypress-cucumber-preprocessor';
import getBook from '../../requests/getBookRequest';


When("{string} Get book as {string}", (dataReqId: string, reqId: string) => {
    getBook.getBookApi(reqId, dataReqId);
});

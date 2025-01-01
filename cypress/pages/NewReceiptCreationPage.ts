class NewReceiptCreationPage{
    clickInventoryItem(){
        cy.contains("Inventory").click();
        cy.get("body > div.o_action_manager > div > div.o_content > div > article:nth-child(1) > div.px-2 > div.row.mt-3 > div:nth-child(1) > button").click();
    }
}

export default new NewReceiptCreationPage()
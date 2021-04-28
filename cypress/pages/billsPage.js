/// <reference types="cypress" />

//////////////
// elements //
//////////////
const VIEW_BILLS_PAGE_BUTTON = ':nth-child(3) > .btn'
//const CREATE_BILL_BUTTON = ''


//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////
function viewBillsPage(){
    cy.get(VIEW_BILLS_PAGE_BUTTON).click()
}

//////////////////////
// export functions //
//////////////////////
module.exports = {
    viewBillsPage
}

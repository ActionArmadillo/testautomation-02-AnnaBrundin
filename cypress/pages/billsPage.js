/// <reference types="cypress" />

//////////////
// elements //
//////////////
const VIEW_BILLS_PAGE_BUTTON = ':nth-child(3) > .btn'
const CREATE_BILL_BUTTON = 'h2 > .btn'
const VALUE_TEXT_FIELD = 'input'
const SAVE_BUTTON = '.blue'
const BILLS_LIST = '.bills'
const MEATBALLS_BUTTON = '.action'
const DELETE_BUTTON = '.menu > :nth-child(2)'
const CHECKBOX = '.checkbox'


//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////
function openBillsPage(){
    cy.get(VIEW_BILLS_PAGE_BUTTON).click()
}
function openNewBillPage(){
    cy.get(CREATE_BILL_BUTTON).click()
}

// unpaid //
function createUnpaidBill(value){
    cy.get(VALUE_TEXT_FIELD).type(value)
    cy.get(SAVE_BUTTON).click()
}

function validateUnpaidBill(value, paid){
    cy.get(BILLS_LIST).should('contain', value).and('contain', paid)
}

// paid //
function createPaidBill(value){
    cy.get(VALUE_TEXT_FIELD).type(value)
    cy.get(CHECKBOX).click()
    cy.get(SAVE_BUTTON).click()
}
function validatePaidBill(value, paid){
    cy.get(BILLS_LIST).should('contain', value).and('contain', paid)
}

function removeLastBill(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

//////////////////////
// export functions //
//////////////////////
module.exports = {
    openBillsPage,
    openNewBillPage,
    createUnpaidBill,
    validateUnpaidBill,
    createPaidBill,
    validatePaidBill,
    removeLastBill
}
 
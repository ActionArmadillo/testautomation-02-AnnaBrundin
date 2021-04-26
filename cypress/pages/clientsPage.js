/// <reference types="cypress" />

/////////////
// elements//
/////////////
const VIEW_CLIENTS_PAGE_BUTTON = '.blocks > :nth-child(2) > .btn'
const CREATE_CLIENT_BUTTON = 'h2 > .btn'
const NAME_TEXTFIELD = ':nth-child(1) > input'
const NAME_FIELD_LABEL = ':nth-child(1) > label'
const EMAIL_TEXTFIELD = ':nth-child(2) > input'
const EMAIL_FIELD_LABEL = ':nth-child(2) > label'
const TELEPHONE_TEXTFIELD = ':nth-child(3) > input'
const TELEPHONE_FILED_LABEL = ':nth-child(3) > label'
const SAVE_BUTTON = '.blue'
const BACK_BUTTON = '[href="/clients"]'
const MEATBALLS_BUTTON = '.action > img'
const DELETE_BUTTON = '.menu > :nth-child(2)'
const EDIT_BUTTON = '.menu > :nth-child(1)'
const CLIENT_LIST = '.client'

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////

//-----------------------------CLIENTS-----------------------------//
// view Clients page
function viewClientsPage(content){
    cy.get(VIEW_CLIENTS_PAGE_BUTTON).click()
    cy.contains(content)
}

function openClientsPage(){
    cy.get(VIEW_CLIENTS_PAGE_BUTTON).click()
}


//-----------------------------NEW CLIENT-----------------------------//
// view and validate New Client page
function viewNewClientPage(){
    cy.get(CREATE_CLIENT_BUTTON).click()
    cy.contains('New Client')
    cy.get(NAME_FIELD_LABEL).should('have.text','Name').should('have.css', 'text-transform', 'uppercase')
    cy.get(EMAIL_FIELD_LABEL).should('have.text','Email').should('have.css', 'text-transform', 'uppercase')
    cy.get(TELEPHONE_FILED_LABEL).should('have.text','Telephone').should('have.css', 'text-transform', 'uppercase')
    cy.get('.blue').should('have.text', 'Save')
}
function openNewClientPage(){
    cy.get(CREATE_CLIENT_BUTTON).click()
}

function createNewClient(name, email, telephone){
    cy.get(NAME_TEXTFIELD).type(name)
    cy.get(EMAIL_TEXTFIELD).type(email)
    cy.get(TELEPHONE_TEXTFIELD).type(telephone)
    cy.get(SAVE_BUTTON).click()
}

function validateCreatedClient(name, email, telephone){
    cy.get(CLIENT_LIST).should('contain', name).and('contain', email).and('contain', telephone)
}

function removeLastClient(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

/////////////////////
// export functions//
/////////////////////
module.exports = {
    viewClientsPage,
    openClientsPage,
    viewNewClientPage,
    openNewClientPage,
    createNewClient,
    validateCreatedClient,
    removeLastClient
}
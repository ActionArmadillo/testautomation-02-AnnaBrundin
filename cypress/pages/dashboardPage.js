/// <reference types="cypress" />

// elements
const DASHBOARD_TITLE = 'h1 > .router-link-active'
const DASHBOARD_HEADER_NAME = 'h1'
const WELCOME_MESSAGE = '.username'
const LOGOUT_BUTTON = '.user > .btn'
const pages = [ 'http://localhost:3000/rooms',
                'http://localhost:3000/clients',
                'http://localhost:3000/bills',
                'http://localhost:3000/reservations' ]

// functions / methods / actions
function checkElements(username){
    cy.get(DASHBOARD_HEADER_NAME).should('contain', 'Tester Hotel')
    cy.get(WELCOME_MESSAGE).should('contain', username)
    cy.get(LOGOUT_BUTTON).contains('Logout')
}

function checkPages(username){
    for(i = 0; i < pages.length; i++){
        cy.visit(pages[i])
        checkElements(username)
        cy.get(DASHBOARD_TITLE).click()
    }
}

function performLogout(){
    cy.get(LOGOUT_BUTTON).contains('Logout')   
    cy.get(LOGOUT_BUTTON).click()
}

// export functions
module.exports = {
    checkElements,
    checkPages,
    performLogout
}
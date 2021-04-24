/// <reference types="cypress" />

// elements
const VIEW_CLIENTS_PAGE_BUTTON = '.blocks > :nth-child(2) > .btn'

// functions / methods / actions
function viewClientsPage(content){
    cy.get(VIEW_CLIENTS_PAGE_BUTTON).click()
    cy.contains(content)

}

// export functions
module.exports = {
    viewClientsPage
}